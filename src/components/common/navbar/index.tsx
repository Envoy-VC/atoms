import React from 'react';

import { Input } from 'antd';
import ConnectButton from '../connect-button';
// Icons
import { TbSearch, TbSlash, TbBleachNoChlorine } from 'react-icons/tb';

import { PiListBold } from 'react-icons/pi';

const Navbar = () => {
	return (
		<div className='w-full p-3 sm:p-6'>
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
					<PiListBold size={28} className='text-slate-800' />
					<div className='flex flex-row items-center gap-1'>
						<TbBleachNoChlorine size={36} className='text-primary' />
						<div className='navTitle text-2xl font-medium'>atoms</div>
					</div>
				</div>
				<ConnectButton />
			</div>
		</div>
	);
};

export default Navbar;
