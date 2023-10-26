import type { ReactElement } from 'react';
import { Layout } from '~/components';
import type { NextPageWithLayout } from './_app';

const NotFound: NextPageWithLayout = () => {
	return <div>404</div>;
};

NotFound.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default NotFound;
