import React from 'react'
import Dropdown from './Dropdown';
import { QRCode, Space } from 'antd';

const QrSpace: React.FC = () => (
  <Space className='flex justify-center'>
    <QRCode type="canvas" value="https://ant.design/" />
  </Space>
);

const Recieve = () => {
  return (
  <div className="flex flex-col gap-4" >
    <div>
				<div className='text-md font-bold mb-3'>Send From</div>
				<div>
					<Dropdown />
				</div>
			</div>
      <div className='mt-5'>
        <QrSpace/>
      </div>
  </div>
  )
}

export default Recieve