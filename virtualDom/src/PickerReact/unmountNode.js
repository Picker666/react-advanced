export default function unmountNode (node) {
  const virtualDOM = node._virtualDOM;

  // 1、文本节点 直接删除
  if (virtualDOM.type === 'text') {
    node.remove();
    return;
  }

  // 2、是否有组件生成的节点
  const component = virtualDOM.component;

  if (component) {
    component.componentWillUnmount();
  }

  // 3、是否有ref属性
  if(virtualDOM?.props?.ref) {
    virtualDOM.props.ref(null);
  }

  // 4、事件属性
  Object.keys(virtualDOM.props).forEach(propName => {
    if (propName.slice(0,2) === 'on') {
      const eventName = propName.toLowerCase().slice(2);
      const eventHandler = virtualDOM.props[eventName];
      node.removeEventListener(eventName, eventHandler);
    }
  })

  // 5、递归删除子节点
  if(node.childNodes.length > 0) {
    for(let i = 0; i < node.childNodes.length; i++) {
      unmountNode(node.childNodes[i]);
      // 删除之后node.childNodes.length 长度减少
      i--;
    }
  }

  node.remove();
}