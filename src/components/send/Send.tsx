import React from 'react';
import Dropdown from './Dropdown';
import { Input } from 'antd';
import { InputNumber } from 'antd';

const Inputnumber: React.FC = () => (
	<InputNumber<string>
		style={{ width: 200 }}
		defaultValue='0'
		min='0'
		max='10'
		step='0.00000000000001'
		stringMode
	/>
);

const SendTo: React.FC = () => (
	<Input placeholder='Enter public address (0x) or ENS name' />
);

const Send = () => {
	return (
		<div className='flex flex-col gap-4 '>
			<div>
				<div className='text-md mb-3 font-bold'>Send From</div>
				<div>
					<Dropdown />
				</div>
			</div>
			<div>
				<div className='text-md mb-3 font-bold'>Send to</div>
				<div>
					<SendTo />
				</div>
			</div>
			<div>
				<div className='text-md mb-3 font-bold'>Asset</div>
				<div>
					<Dropdown />
				</div>
			</div>
			<div>
				<div className='text-md mb-3 font-bold'>Amount</div>
				<div>
					<Inputnumber />
				</div>
			</div>
			<div className='my-4 flex h-10 w-full justify-center rounded-full bg-gray-400 font-bold text-white transition duration-300 hover:bg-[#267BFA]'>
				<button>Send</button>
			</div>
		</div>
	);
};

export default Send;
