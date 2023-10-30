import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import Send from './Send'
import Recieve from './Recieve'


const onChange = (key: string) => {
	console.log(key);
};

const items: TabsProps['items'] = [
	{
		key: '1',
		label: 'Send',
		children: <Send/>,
	},
	{
		key: '2',
		label: 'Recieve',
		children: <Recieve/>,
	},

];

const SendRecieve: React.FC = () => (
	<Tabs defaultActiveKey='1' items={items} onChange={onChange} />
);

export default SendRecieve;
