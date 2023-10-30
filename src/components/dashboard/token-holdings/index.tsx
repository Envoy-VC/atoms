import React from 'react';
import { Avatar, Table } from 'antd';
import { useLocalStorage } from 'usehooks-ts';

// Types
import type { ColumnsType } from 'antd/es/table';
import type { ERC20TokenBalance } from '~/types';

interface Props {
	data: ERC20TokenBalance[] | null;
}

interface DataType {
	key: React.Key;
	label: React.ReactNode;
	name: React.ReactNode;
	balance: { value: number; label: React.ReactNode };
	current_usd_price: { value: number; label: React.ReactNode };
}

const columns: ColumnsType<DataType> = [
	{
		title: <span className='text-sm sm:text-lg'>Coin</span>,
		dataIndex: 'label',
	},
	{
		title: <span className='text-sm sm:text-lg'>Name</span>,
		dataIndex: 'name',
		responsive: ['md'],
	},
	{
		title: <span className='text-sm sm:text-lg'>Balance</span>,
		dataIndex: ['balance', 'label'],
		sorter: (a, b) => a.balance.value - b.balance.value,
	},
	{
		title: <span className='text-sm sm:text-lg'>Price in USD</span>,
		dataIndex: ['current_usd_price', 'label'],
		sorter: (a, b) => a.current_usd_price.value - b.current_usd_price.value,
	},
];

const TokenHoldings = ({ data }: Props) => {
	const [showBalances, setShowBalances] = useLocalStorage('showBalances', true);

	const tableData = data?.map((token, index) => {
		return {
			key: index,
			label: (
				<div className='flex flex-row items-center gap-2'>
					<Avatar
						size={{ xs: 28, sm: 36, md: 36, lg: 36, xl: 36, xxl: 36 }}
						src={token.logos?.at(0)?.uri}
					/>
					<div className='hidden text-lg font-semibold sm:flex'>
						{token.symbol.length < 8 && token.symbol}
					</div>
				</div>
			),
			name: <span className='text-sm sm:text-[1rem]'>{token.name}</span>,
			balance: {
				value: parseInt(token.balance) / 10 ** token.decimals,
				label: (
					<div className='flex flex-row items-center gap-2 text-[1rem] font-medium'>
						{showBalances ? (
							<>
								<span>
									{(parseInt(token.balance) / 10 ** token.decimals).toFixed(2)}
								</span>
								<span>{token.symbol.length < 8 && token.symbol}</span>
							</>
						) : (
							'*******'
						)}
					</div>
				),
			},
			current_usd_price: {
				value: token.current_usd_price,
				label: (
					<div className='text-[1rem] font-medium'>
						{showBalances ? token.current_usd_price : '*******'}
					</div>
				),
			},
		} as DataType;
	});
	return (
		<Table
			columns={columns}
			dataSource={data ? tableData : []}
			tableLayout='auto'
		/>
	);
};

export default TokenHoldings;
