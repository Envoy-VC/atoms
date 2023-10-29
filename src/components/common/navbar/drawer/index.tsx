import React from 'react';
import { Drawer, Button } from 'antd';
import { SidebarItem, SidebarItems } from '../../sidebar';

// Icons
import {
	TbArrowLeft,
	TbBleachNoChlorine,
	TbUserSquareRounded,
} from 'react-icons/tb';

// Types
interface Props {
	isOpen: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavDrawer = ({ isOpen, setOpen }: Props) => {
	const onClose = () => {
		setOpen(false);
	};
	return (
		<Drawer
			title={
				<div className='flex flex-row items-center gap-1'>
					<Button
						icon={<TbArrowLeft size={28} className='text-gray-50' />}
						type='link'
						onClick={onClose}
					/>

					<div className='flex flex-row items-center gap-1'>
						<TbBleachNoChlorine size={36} className='text-primary mt-1' />
						<div className='navTitle text-2xl font-medium !text-white'>atoms</div>
					</div>
				</div>
			}
			placement='top'
			size='large'
			closable={false}
			onClose={onClose}
			open={isOpen}
			className=' !bg-[#0F162A] !text-white'
		>
			<div className='flex h-full flex-col items-start justify-between gap-2'>
				<div className='flex flex-col items-start gap-2'>
					{SidebarItems.map((item, index) => (
						<SidebarItem {...item} key={index} />
					))}
				</div>
				<SidebarItem Icon={TbUserSquareRounded} href='/account' label='Account' />
			</div>
		</Drawer>
	);
};

export default NavDrawer;
