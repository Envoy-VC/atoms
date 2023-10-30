import React from 'react';
import { useLocalStorage } from 'usehooks-ts';

import { Button } from 'antd';
// Icons
import { TbEye, TbEyeClosed } from 'react-icons/tb';

// Types
import type { ERC20TokenBalance } from '~/types';

interface Props {
	data: ERC20TokenBalance[] | null;
}

const PortfolioValue = ({ data }: Props) => {
	const [showBalances, setShowBalances] = useLocalStorage('showBalances', true);
	const totalValue = data?.reduce((acc, token) => {
		const tokenValue = token.current_usd_price;
		return acc + tokenValue;
	}, 0);
	return (
		<div className='my-4 flex w-fit flex-col gap-4 rounded-xl border-[1px] border-gray-300 bg-gray-50 p-4'>
			<div className='text-sm font-semibold text-gray-400'>Portfolio Value</div>
			<div className='flex flex-row items-center gap-4'>
				<div className='text-5xl font-semibold'>
					{showBalances ? `$${totalValue ?? 0}` : '*******'}
				</div>
				<Button
					type='text'
					size='large'
					icon={
						showBalances ? (
							<TbEyeClosed size={42} className='text-gray-600' />
						) : (
							<TbEye size={42} className='text-gray-600' />
						)
					}
					className='flex items-center justify-center !p-8'
					onClick={() => setShowBalances(!showBalances)}
				/>
			</div>
		</div>
	);
};

export default PortfolioValue;
