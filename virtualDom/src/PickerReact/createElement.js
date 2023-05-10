const createElement = (type, props, ...children) => {
  const newChildren = [...children].reduce((result, child) => {
    if (child !== false && child !== true && child !== null) {
      if (typeof child === 'object') {
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
    children: newChildren
  }
}

export { createElement };
