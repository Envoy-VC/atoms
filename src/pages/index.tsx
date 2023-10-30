import type { ReactElement } from 'react';
import { Layout } from '~/components';
import type { NextPageWithLayout } from './_app';

import { useGetAccountBalances } from '~/hooks';

import { TokenHoldings, PortfolioValue } from '~/components/dashboard';

const Home: NextPageWithLayout = () => {
	const { data, refetch } = useGetAccountBalances();

	return (
		<div className='p-1 sm:p-4'>
			<PortfolioValue data={data} />
			<TokenHoldings data={data} />
		</div>
	);
};

Home.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Home;
