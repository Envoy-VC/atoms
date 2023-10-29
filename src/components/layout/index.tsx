import React from 'react';
import { Web3Provider, AntDesignConfigProvider } from '~/providers';
import { ThemeProvider } from 'next-themes';

import clsx from 'clsx';
import { SEO, Sidebar, Navbar } from '~/components/common';

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
					<div
						className={clsx(
							inter.className,
							'flex min-h-screen flex-row bg-[#FBFDFF] px-4'
						)}
					>
						<Sidebar />
						<div className='sm:w-[96px]' />
						<div className='flex w-full flex-col'>
							<Navbar />
							{children}
						</div>
					</div>
				</AntDesignConfigProvider>
			</Web3Provider>
		</ThemeProvider>
	);
};

export default Layout;
