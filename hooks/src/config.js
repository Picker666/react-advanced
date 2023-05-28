import StateTesting from './example/StateTesting.jsx';
import EffectTesting from './example/EffectTesting.jsx';
import ReducerTesting from './example/ReducerTesting.jsx';

const config = [
  {
    label: 'useState',
    component: 'StateTesting'
  }, {
    label: 'useEffect',
    component: 'EffectTesting'
  }, {
    label: 'useReducer',
    component: 'ReducerTesting'
  }
];

export default config;
