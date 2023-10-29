import React from 'react';

import { Button, Input } from 'antd';
import NavDrawer from './drawer';
import ConnectButton from '../connect-button';
// Icons
import { TbSearch, TbSlash, TbBleachNoChlorine } from 'react-icons/tb';

import { PiListBold } from 'react-icons/pi';

const Navbar = () => {
	const [navDrawerOpen, setNavDrawerOpen] = React.useState<boolean>(false);
	return (
		<div className='px-0 py-3 sm:p-6'>
			<div className='border-grayscale hidden flex-row items-center justify-between rounded-xl border-[1px] bg-white p-2 px-4 sm:flex '>
				<Input
					placeholder='Search'
					prefix={<TbSearch size={20} className='text-slate-400' />}
					className='max-w-[256px] md:max-w-xs'
					size='large'
					suffix={
						<div className='flex h-6 w-6 items-center justify-center rounded-md bg-gray-100'>
							<TbSlash size={20} className='text-slate-500' />
						</div>
					}
				/>
				<ConnectButton />
			</div>

			<div className='flex flex-row items-center justify-between sm:hidden'>
				<div className='flex flex-row items-center gap-2'>
					<Button
						icon={<PiListBold size={28} className='text-slate-800' />}
						type='link'
						onClick={() => setNavDrawerOpen((prev) => !prev)}
					/>

					<div className='flex flex-row items-center gap-1'>
						<TbBleachNoChlorine size={36} className='text-primary mt-1' />
						<div className='navTitle text-2xl font-medium'>atoms</div>
					</div>
				</div>
				<ConnectButton />
			</div>
			<NavDrawer isOpen={navDrawerOpen} setOpen={setNavDrawerOpen} />
		</div>
	);
};

export default Navbar;
