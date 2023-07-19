function ShowText({ query }) {
  const text = "asdfghjk";
  let children;
  if (query !== "" && (text.indexOf(query) > 0 || text.indexOf(query) === 0)) {
    /* 找到匹配的关键词 */
    const arr = text.split(query);
    console.log(arr);
    children = (
      <div>
        {arr[0]}
        <span style={{ color: "pink" }}>{query}</span>
        {arr[1]}{" "}
      </div>
    );
  }
  return <div>{children}</div>;
}

export default ShowText;
