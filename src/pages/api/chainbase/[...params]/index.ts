export const runtime = 'edge';

import { env } from '~/env.mjs';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const url = new URL(`${req.url}` ?? '');
	console.log(url);
	const chainbaseApiPath = url.pathname.replace('/api/chainbase/', '');
	console.log(chainbaseApiPath);
	const baseUrl = 'https://api.chainbase.online/v1/';

	if (req.method === 'GET') {
		try {
			const params = url.searchParams;
			params.delete('params');
			const targetUrl =
				baseUrl + chainbaseApiPath + '?' + url.searchParams.toString();
			console.log(targetUrl);
			const response = await fetch(targetUrl, {
				headers: {
					accept: 'application/json',
					'x-api-key': env.NEXT_PUBLIC_CHAINBASE_API_KEY ?? 'demo',
				},
			});
			if (!response.ok) {
				return new Response('Error', {
					status: response.status,
				});
			}

			if (response.body) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				return new Response(response.body as any as ReadableStream);
			} else {
				return new Response('Error', {
					status: 500,
				});
			}
		} catch (error) {
			return new Response('Error', {
				status: 500,
			});
		}
	} else if (req.method === 'POST') {
		try {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			const body = req.body;
			const params = url.searchParams;
			params.delete('params');
			const baseUrl = 'https://api.chainbase.online/v1/';
			const targetUrl = baseUrl + chainbaseApiPath;
			const response = await fetch(targetUrl, {
				method: 'POST',
				headers: {
					accept: 'application/json',
					'x-api-key': env.NEXT_PUBLIC_CHAINBASE_API_KEY ?? 'demo',
				},
				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
				body: body,
			});
			console.log(response.ok, response.status);

			if (!response.ok) {
				return new Response('Error', {
					status: response.status,
				});
			}

			if (response.body) {
				return new Response(response.body as ReadableStream);
			} else {
				return new Response('Error', {
					status: 500,
				});
			}
		} catch (error) {
			console.log(error);
			return new Response('Error', {
				status: 500,
			});
		}
	}

	res.status(200).json({ message: 'Hello from Next.js!' });
}
