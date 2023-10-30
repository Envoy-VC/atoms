import type { ReactElement } from 'react';
import { Layout } from '~/components';
import type { NextPageWithLayout } from './_app';

import { Button } from 'antd';
import { useGetAccountBalances } from '~/hooks';

import { TokenHoldings } from '~/components/dashboard';

const Home: NextPageWithLayout = () => {
	const { data, refetch } = useGetAccountBalances();

	return (
		<div className=''>
			<TokenHoldings data={data} />
		</div>
	);
};

Home.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Home;
