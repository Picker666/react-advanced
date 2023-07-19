import logo from './logo.svg';

import Lazy from './components/lazy';
import StartTransition from './components/startTransition';
import UseTransition from './components/useTransition';
import UseDeferredValue from './components/useDeferredValue';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Lazy serialNumber="1" />
      <StartTransition serialNumber="2" />
      <UseTransition serialNumber="3" />
      <UseDeferredValue serialNumber="4" />
    </div>
  );
}

export default App;
