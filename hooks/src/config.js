import StateTesting from './example/StateTesting.jsx';
import EffectTesting from './example/EffectTesting.jsx';

const config = [
  {
    label: 'useState',
    component: <StateTesting />
  }, {
    label: 'useEffect',
    component: <EffectTesting />
  }
];

export default config;
