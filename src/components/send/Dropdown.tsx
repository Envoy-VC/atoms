import React, { useState } from 'react';
import { Select } from 'antd';

const Dropdown: React.FC = () => {
	const [selectedItems, setSelectedItems] = useState<string[]>([]);
	const OPTIONS = ['Arshit' ,'Dishank','Vedant'];
	const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));

	return (
		<Select
			mode='multiple'
			placeholder='Choose your wallet'
			value={selectedItems}
			onChange={setSelectedItems}
			style={{ width: '100%' }}
			options={filteredOptions.map((item) => ({
				value: item,
				label: item,
			}))}
		/>
	);
};

export default Dropdown;
