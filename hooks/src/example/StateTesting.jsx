// import { useState } from 'react';
import { useState } from '../hooks';

const StateTesting = () => {
	const [count, setCount] = useState(0);
	const [name, setName] = useState('Picker');
	const [value, setValue] = useState(() => count + 1);
	const [sign, setSign] = useState(false);

	return <div>
		<h1>StateTesting</h1>
		<div>
			<button onClick={() => setCount(count + 1)}>count</button>: {count}
		</div>
		<div>
			<button onClick={() => setName(name + 6)}>name</button>: {name}
		</div>
		<div>
			<button onClick={() => setValue(value + 1)}>value -- function initialState</button>: {value}
		</div>
		<div>
			<button onClick={() => setSign(s => !s)}>sign function setSign</button>: {sign ? '标记':'取消标记'}
		</div>
	</div>
}

export default StateTesting;