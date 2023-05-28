import { useMemo, useState } from 'react';
import { Menu } from 'antd';

import StateTesting from './example/StateTesting.jsx';
import EffectTesting from './example/EffectTesting.jsx';
import ReducerTesting from './example/ReducerTesting.jsx';

import { OverallState } from './components';

const config = [
  {
    label: 'useState',
  }, {
    label: 'useEffect',
  }, {
    label: 'useReducer',
  }, {
		label: 'overallState'
	}
];

const ComponentController = ({comp}) => {
	if (comp === 'useState') {
		return <StateTesting />
	} else if (comp === 'useEffect') {
		return <EffectTesting />
	} else if (comp === 'useReducer') {
		return <ReducerTesting />
	} else if (comp === 'overallState') {
		return <OverallState />
	}
	return null;
}

const App = () => {
	const [selectedKeys, setSelectedKeys] = useState([config[0].label]);

	const items = useMemo(() => config.map(c =>({label: c.label, key: c.label})), []);

	const handleSelect = (data) => {
		const { selectedKeys, key } = data;
		setSelectedKeys(selectedKeys);
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
				<ComponentController comp={selectedKeys[0]} />
		</div>
	)
}

export default App;
