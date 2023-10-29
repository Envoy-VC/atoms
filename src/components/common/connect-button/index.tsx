import React from 'react';
import { ConnectWallet, lightTheme } from '@thirdweb-dev/react';

import SplashImage from '../../../../public/splash.gif';

const ConnectButton = () => {
	return (
		<div>
			<ConnectWallet
				theme={lightTheme({
					colors: {
						accentText: '#9d72ff',
						accentButtonBg: '#9d72ff',
					},
				})}
				btnTitle={'Connect'}
				switchToActiveChain={true}
				modalSize={'wide'}
				modalTitle={'Connect your Wallet'}
				welcomeScreen={{
					title: 'Axioms',
					subtitle: 'Portfolio Tracker with superpowers 🦹🏻‍♂️',
					img: {
						src: SplashImage.src,
						width: 500,
						height: 250,
					},
				}}
				modalTitleIconUrl={''}
				className='!rounded-xl !p-3'
			/>
		</div>
	);
};

export default ConnectButton;
