// import { useReducer } from 'react';
import { useReducer } from '../hooks';

const handler = (state, action) => {
  let newState = {};
  switch (action.type) {
    case 'COUNT':
      newState = { ...state, count: state.count + 1};
      break;
    case 'NAME':
      newState = { ...state, name: state.name + 6};
      break;
    case 'VALUE':
      newState = { ...state, value: action.value };
      break;
    case 'SIGN':
      newState = { ...state, sign: !state.sign };

      // state.sign = !state.sign;
      // newState = state;
      break;
    default :
      newState = state;
  }

  return newState;
}

const StateTesting = () => {
  const [state, dispatch] = useReducer(handler, { count: 0, name: 'Picker', value: 1, sign: false });
  const {count, name,value, sign} = state;

	return <div>
		<h1>ReducerTesting</h1>
		<div>
			<button onClick={() => dispatch({type: 'COUNT'})}>count</button>: {count}
		</div>
		<div>
			<button onClick={() => dispatch({type: 'NAME'})}>name</button>: {name}
		</div>
		<div>
			<button onClick={() => dispatch({type: 'VALUE', value: value+1})}>value -- function initialState</button>: {value}
		</div>
		<div>
			<button onClick={() => dispatch({type: 'SIGN'})}>sign function setSign</button>: {sign ? '标记':'取消标记'}
		</div>
	</div>
}

export default StateTesting;