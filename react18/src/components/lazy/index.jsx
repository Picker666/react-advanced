import { lazy, useState, Suspense } from 'react';

const Content = lazy(() => {
  return import('./LazyContent.jsx');
});

/**
 * lazy 组件懒加载，异步
 * 初次加载时候将会返回promise，所以需要 Suspense 退格显示UI
 *
 * 懒加载组件加载期间，将退格Suspense下所有的子元素，并展示fallback
 */

const Lazy = (props) => {
  const [load, setLoad] = useState(false);

  const handleClick = () => {
    setLoad(!load);
  }

  return <div>
    <h1>{props.serialNumber}、lazy + Suspense</h1>
    <button onClick={handleClick}>toggle</button>
    <Suspense fallback={<h2>loading</h2>}>
      <p>lazy load component is here: </p>
      {load && <Content />}
    </Suspense>
  </div>
};

export default Lazy;
