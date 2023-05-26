import { useState } from '../hooks';

const StateTesting = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Picker');

    return <div>
        <div>
            <button onClick={() => setCount(count + 1)}>count</button>: {count}
        </div>
        <div>
            <button onClick={() => setName(name + 6)}>name</button>: {name}
        </div>
    </div>
}

export default StateTesting;