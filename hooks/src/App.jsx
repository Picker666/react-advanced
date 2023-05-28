import { useMemo, useState } from 'react';
import { Menu } from 'antd';

import config from './config';

const App = () => {
	const [selectedKeys, setSelectedKeys] = useState([config[0].label]);
	const [component, setComponent] = useState(config[0].component);

	const items = useMemo(() => config.map(c =>({label: c.label, key: c.label})), []);

	const handleSelect = (data) => {
		const { selectedKeys, key } = data;
		setSelectedKeys(selectedKeys);
		setComponent(config.find(c => c.label === key).component)
	}

	return (
		<div>
			<Menu
        selectedKeys={selectedKeys}
        mode={'horizontal'}
        theme={'dark'}
        items={items}
				onSelect={handleSelect}
			/>
			{component}
		</div>
	)
}

export default App;
