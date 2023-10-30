import type { ReactElement } from 'react';
import { Layout } from '~/components';
import type { NextPageWithLayout } from './_app';

import { Button } from 'antd';
import { useGetAccountBalances } from '~/hooks';

const Home: NextPageWithLayout = () => {
	const { refetch } = useGetAccountBalances();
	const onClick = async () => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		const res = await refetch();
		console.log(res);
	};
	return (
		<div className=''>
			<Button
				// eslint-disable-next-line @typescript-eslint/no-misused-promises
				onClick={onClick}
			>
				Fetch
			</Button>
		</div>
	);
};

Home.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Home;
