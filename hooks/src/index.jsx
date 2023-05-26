import * as ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const render = (callback) => {
    root.render(<App/>);
    callback && callback();
};

render();

export default render;
