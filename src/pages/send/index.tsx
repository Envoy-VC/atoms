import type { ReactElement } from 'react';
import { Layout } from '~/components';
import type { NextPageWithLayout } from '../_app';
import SendRecieve from '~/components/send/SendRecieve'


const SendAndReceive: NextPageWithLayout = () => {
	return (
		<div className='flex h-[100vh] w-full items-center justify-center'>
			<div className='border border-black w-[380px] h-auto min-h-[500px] m-5 rounded-2xl px-8 py-4 '>
			<SendRecieve/>
			</div>
		</div>
	);
};

SendAndReceive.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default SendAndReceive;
