import React from 'react';
import Link from 'next/link';
import type { IconType } from 'react-icons';
import { TbAtom2Filled, TbLayout } from 'react-icons/tb';

interface SidebarItemProps extends React.ComponentProps<'div'> {
	href: string;
	Icon: IconType;
	label: React.ReactNode;
}

const SidebarItem = ({ href, Icon, label, ...props }: SidebarItemProps) => {
	return (
		<Link href={href}>
			<div
				className='flex flex-col items-center justify-center gap-[2px]'
				{...props}
			>
				<div className='rounded-lg p-2'>
					<Icon size={24} className='text-[#8695ac]' />
				</div>

				<span className='text-[10px] text-[#e1e2e6]'>{label}</span>
			</div>
		</Link>
	);
};

const Sidebar = () => {
	return (
		<div className='h-screen w-[6vw]'>
			<div className='item-center fixed flex h-full min-h-[98dvh] border-2 px-3 py-2'>
				<div className='flex flex-col items-center justify-between rounded-[1.25rem] border-2 bg-[#0F162A] px-3 py-6'>
					<div className='flex flex-col items-center gap-4'>
						<Link href='/'>
							<TbAtom2Filled size={32} className='text-gray-50' />
						</Link>
						{SidebarItems.map((item, index) => (
							<SidebarItem {...item} key={index} />
						))}
					</div>
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
];

export default Sidebar;
