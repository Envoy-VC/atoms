import React from 'react';
import Link from 'next/link';
import type { IconType } from 'react-icons';
import { TbAtom2Filled, TbLayout } from 'react-icons/tb';
import { RiNftLine } from 'react-icons/ri';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';

interface SidebarItemProps extends React.ComponentProps<'div'> {
	href: string;
	Icon: IconType;
	label: React.ReactNode;
}

const SidebarItem = ({ href, Icon, label, ...props }: SidebarItemProps) => {
	const pathName = usePathname();
	return (
		<Link href={href} className='group'>
			<div
				className='flex flex-col items-center justify-center gap-[3px]'
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
						size={22}
						className={clsx(pathName !== href ? 'text-gray-400' : 'text-[#020617d5]')}
					/>
				</div>

				<span className='text-[10px] text-white'>{label}</span>
			</div>
		</Link>
	);
};

const Sidebar = () => {
	return (
		<div className='item-center fixed flex h-full max-h-screen w-[76px] py-2'>
			<div className='flex flex-col items-center justify-between rounded-[1.25rem] border-2 bg-[#0F162A] px-3 py-6'>
				<div className='flex flex-col items-center gap-2'>
					<Link href='/'>
						<TbAtom2Filled size={32} className='mb-5 text-gray-50' />
					</Link>
					{SidebarItems.map((item, index) => (
						<SidebarItem {...item} key={index} />
					))}
				</div>
			</div>
		</div>
	);
};

const SidebarItems: SidebarItemProps[] = [
	{
		href: '/',
		Icon: TbLayout,
		label: 'Dashboard',
	},
	{
		href: '/nfts',
		Icon: RiNftLine,
		label: 'NFTs',
	},
];

export default Sidebar;
