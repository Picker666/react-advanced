// import { useState, useEffect } from 'react';
import { useState, useEffect } from '../hooks';

const EffectTesting = () => {
	const [count, setCount] = useState(0);
	const [name, setName] = useState('Picker');
	const [value, setValue] = useState(() => count + 1);
	const [sign, setSign] = useState(false);

	useEffect(() => {
		console.log('======without dependencies========');

		return () => {
			console.log('======without dependencies cb========');
		}
	});

	useEffect(() => {
		console.log('======with empty array dependencies========');
		return () => {
			console.log('======with empty array  dependencies cb========');
		}
	}, []);

	useEffect(() => {
		console.log('======with array dependencies========count: ', count);

		return () => {
			console.log('======with array  dependencies cb========count: ', count);
		}
	}, [count]);

	useEffect(() => {
		console.log('======with array dependencies========name: ', name);

		return () => {
			console.log('======with array  dependencies cb========name: ', name);
		}
	}, [name]);

	return <div>
		<h1>EffectTesting</h1>
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

export default EffectTesting;