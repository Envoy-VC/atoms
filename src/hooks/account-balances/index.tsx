import React from 'react';
import { useAddress, useChainId } from '@thirdweb-dev/react';

import { env } from '~/env.mjs';

const useGetAccountBalances = () => {
	const address = useAddress();
	const network_id = useChainId();

	const [data, setData] = React.useState<string | null>(null);
	const [error, setError] = React.useState<Error | null>(null);
	const [isLoading, setIsLoading] = React.useState<boolean>(false);

	const refetch = async () => {
		try {
			setIsLoading(true);
			const url = `https://api.chainbase.online/v1/account/tokens?chain_id=${network_id}&address=${address}&limit=5&page=1`;
			console.log(url);
			const res = await fetch(url, {
				method: 'GET',
				headers: {
					'x-api-key': env.NEXT_PUBLIC_CHAINBASE_API_KEY,
					accept: 'application/json',
				},
			});
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			const json = await res.json();
			// eslint-disable-next-line @typescript-eslint/no-unsafe-return
			return json;
		} catch (error) {
			console.log(error);
			setError(new Error(String(error)));
		} finally {
			setIsLoading(false);
		}
	};

	return { refetch };
};

export default useGetAccountBalances;
