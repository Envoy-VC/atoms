import type { ReactElement } from 'react';
import { Layout } from '~/components';
import type { NextPageWithLayout } from '../_app';

const SendAndReceive: NextPageWithLayout = () => {
	return <div className=''>send and receive</div>;
};

SendAndReceive.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default SendAndReceive;
