import type { ReactElement } from 'react';
import { Layout } from '~/components';
import type { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
	return <div className='h-[400vh] border-2 border-orange-400'>hello world</div>;
};

Home.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Home;
