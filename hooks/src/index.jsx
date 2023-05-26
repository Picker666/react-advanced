import * as ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const render = () => {
    root.render(<App/>);
};

render();

export default render;
