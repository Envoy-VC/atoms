import React from 'react';
import { clsx } from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Icons

import {
	TbBleachNoChlorine,
	TbLayout,
	TbChartPie,
	TbActivityHeartbeat,
	TbExchange,
	TbSend,
	TbSettings2,
	TbDeviceWatch,
	TbUserSquareRounded,
} from 'react-icons/tb';
import { RiNftLine } from 'react-icons/ri';

// Types

import type { IconType } from 'react-icons';
interface SidebarItemProps extends React.ComponentProps<'div'> {
	href: string;
	Icon: IconType;
	label: React.ReactNode;
}

export const SidebarItem = ({
	href,
	Icon,
	label,
	...props
}: SidebarItemProps) => {
	const pathName = usePathname();
	return (
		<Link href={href} className='group'>
			<div
				className='flex flex-row items-center justify-center gap-3 sm:flex-col sm:gap-[3px]'
				{...props}
			>
				<div
					className={clsx(
						'flex h-10 w-10 items-center justify-center rounded-lg',
						pathName === href
							? 'bg-[#DDD6FE]'
							: 'transition-all duration-300 ease-in-out group-hover:bg-[#ffffff18]'
					)}
				>
					<Icon
						className={clsx(pathName !== href ? 'text-gray-400' : 'text-[#020617d5]', 'text-2xl sm:text-[22px]')}
					/>
				</div>
				<span className='text-[1rem] text-white sm:text-[10px]'>{label}</span>
			</div>
		</Link>
	);
};

const Sidebar = () => {
	return (
		<div className='item-center fixed hidden h-full max-h-screen w-[76px] py-2 sm:flex'>
			<div className='flex flex-col items-center justify-between rounded-[1.25rem] bg-[#0F162A] px-3 py-6'>
				<div className='flex flex-col items-center gap-2'>
					<Link href='/'>
						<TbBleachNoChlorine size={32} className='mb-5 text-gray-50' />
					</Link>
					{SidebarItems.map((item, index) => (
						<SidebarItem {...item} key={index} />
					))}
				</div>
				<SidebarItem Icon={TbUserSquareRounded} href='/account' label='Account' />
			</div>
		</div>
	);
};

export const SidebarItems: SidebarItemProps[] = [
	{
		href: '/',
		Icon: TbLayout,
		label: 'Dashboard',
	},
	{
		href: '/portfolio',
		Icon: TbChartPie,
		label: 'Portfolio',
	},
	{
		href: '/nfts',
		Icon: RiNftLine,
		label: 'NFTs',
	},
	{
		href: '/market',
		Icon: TbActivityHeartbeat,
		label: 'Market',
	},
	{
		href: '/swap',
		Icon: TbExchange,
		label: 'Swap',
	},
	{
		href: '/send',
		Icon: TbSend,
		label: 'Send',
	},
	{
		href: '/watchlist',
		Icon: TbDeviceWatch,
		label: 'Watchlist',
	},
	{
		href: '/settings',
		Icon: TbSettings2,
		label: 'Settings',
	},
];

export default Sidebar;
