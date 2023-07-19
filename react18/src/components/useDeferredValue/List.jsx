import { memo } from "react";

import ShowText from "./ShowText";

const mockDataArray = new Array(3000).fill(1);

function List({ query }) {
  console.log("List渲染");
  return (
    <div>
      {mockDataArray.map((item, index) => (
        <div key={index}>
          <ShowText query={query} />
        </div>
      ))}
    </div>
  );
}

export default memo(List);
