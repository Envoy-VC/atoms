import React from 'react';
import { Web3Provider, AntDesignConfigProvider } from '~/providers';
import { ThemeProvider } from 'next-themes';

import clsx from 'clsx';
import { SEO, Sidebar } from '~/components/common';

// Font
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

interface Props {
	children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<ThemeProvider attribute='class' enableSystem={false}>
			<Web3Provider>
				<SEO />
				<AntDesignConfigProvider>
					<div className={clsx(inter.className, 'flex flex-row')}>
						<Sidebar />
						{children}
					</div>
				</AntDesignConfigProvider>
			</Web3Provider>
		</ThemeProvider>
	);
};

export default Layout;
