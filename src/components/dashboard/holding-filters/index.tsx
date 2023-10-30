import React from 'react';
import { Checkbox } from 'antd';
import { useLocalStorage } from 'usehooks-ts';
import type { ERC20TokenBalance } from '~/types';

interface Props {
	data: ERC20TokenBalance[] | null;
	filteredData: ERC20TokenBalance[] | null;
	setFilteredData: React.Dispatch<
		React.SetStateAction<ERC20TokenBalance[] | null>
	>;
}

const HoldingsFilters = ({ data, filteredData, setFilteredData }: Props) => {
	const [showZeroBalances, setShowZeroBalances] = useLocalStorage(
		'showZeroBalances',
		true
	);

	React.useEffect(() => {
		if (data) {
			if (showZeroBalances) {
				setFilteredData(data);
			} else {
				setFilteredData(data.filter((token) => token.current_usd_price > 0));
			}
		}
	}, [data, showZeroBalances]);

	return (
		<div className='fle flex-col gap-1'>
			<div className='text-lg font-medium'>ERC-20 Balances</div>
			<Checkbox
				checked={showZeroBalances}
				onChange={(e) => setShowZeroBalances(e.target.checked)}
			>
				Show Zero Balances
			</Checkbox>
		</div>
	);
};

export default HoldingsFilters;
