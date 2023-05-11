const createElement = (type, props, ...children) => {
  // 这里不能用[...children]，cancat 具有数据多层自动解构和非数组兼容能力，可以处理 dom中循环动态生成多个子元素的情况
  const newChildren = [].concat(...children).reduce((result, child) => {
    if (child !== false && child !== true && child !== null) {
      // 理论上这里的 child 只有 {} 和 字符串（即，文本节点）
     if (child instanceof Object) {
        result.push(child);
      } else {
        result.push(createElement('text', { textContent: child }));
      }
    }
    return result;
  }, [])
  return {
    type,
    props: { ...props, children: newChildren},
  }
}

export { createElement };
