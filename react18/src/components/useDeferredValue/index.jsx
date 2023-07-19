import { useDeferredValue, useState } from 'react';

import List from './List';

function StartTransition(props) {
  const [value, setInputValue] = useState("");
  const [isTransition, setTransition] = useState(false);
  const [query, setSearchQuery] = useState("");


  const handleChange = (e) => {
    setInputValue(e.target.value);
    setSearchQuery(e.target.value);
  };

  const deferredQuery = useDeferredValue(query);

  return (
    <div>
      <h1>{props.serialNumber}、useDeferredValue</h1>
      <button onClick={() => setTransition(!isTransition)}>
        {isTransition ? "transition" : "normal"}{" "}
      </button>
      <input onChange={handleChange} placeholder="输入搜索内容" value={value} />
      <List query={isTransition ? deferredQuery : query} />
    </div>
  );
}

export default StartTransition;
