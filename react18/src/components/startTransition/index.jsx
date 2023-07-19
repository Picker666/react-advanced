import { startTransition, useState } from 'react';

import List from './List';

function StartTransition(props) {
  const [value, setInputValue] = useState("");
  const [isTransition, setTransition] = useState(false);
  const [query, setSearchQuery] = useState("");
  const handleChange = (e) => {
    /* 高优先级任务 —— 改变搜索条件 */
    setInputValue(e.target.value);
    if (isTransition) {
      /* transition 模式 */
      startTransition(() => {
        /* 低优先级任务 —— 改变搜索过滤后列表状态  */
        setSearchQuery(e.target.value);
      });
    } else {
      /* 不加优化，传统模式 */
      setSearchQuery(e.target.value);
    }
  };
  return (
    <div>
      <h1>{props.serialNumber}、startTransition</h1>
      <button onClick={() => setTransition(!isTransition)}>
        {isTransition ? "transition" : "normal"}{" "}
      </button>
      <input onChange={handleChange} placeholder="输入搜索内容" value={value} />
      <List query={query} />
    </div>
  );
}

export default StartTransition;
