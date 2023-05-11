// 元素 属性更新
export default function updateNodeElement (newElement, virtualDOM, oldVirtualDOM) {
  const { props } = virtualDOM || { props: {} };
  const { props: oldProps } = oldVirtualDOM || { props: {} };

  if (virtualDOM.type === 'text') {
    if (props.textContent !== oldProps.TextContent) {

      if(virtualDOM.parent.type !== oldVirtualDOM.parent.type) {
        virtualDOM.parent.stateNode.appendChild(document.createTextNode(props.textContent));
      } else {
        virtualDOM.parent.stateNode.replaceChild(document.createTextNode(props.textContent), oldVirtualDOM.stateNode)
      }
    }

    return;
  }

  Object.keys(props).forEach((propName) => {
  
    const newPropValue = props[propName];
    const oldPropValue = oldProps[propName];

    if (newPropValue !== oldPropValue) {
      if (propName.slice(0, 2) === 'on') {
        // 事件更新
        const eventName = propName.toLowerCase().slice(2);
        newElement.addEventListener(eventName,newPropValue);

        if (oldPropValue) {
          // 旧事件移除
          newElement.removeEventListener(eventName, oldPropValue);
        }
      } else if (propName === 'value' || propName === 'checked') {
        newElement[propName] = newPropValue;
      } else if (propName === 'className') {
        newElement.setAttribute('class', newPropValue)
      } else if (propName !== 'children')  {
        // 属性值更新
        newElement.setAttribute(propName, newPropValue)
      }
    }

  })

  // 删除属性
  Object.keys(oldProps).forEach(propName => {
    const newPropsValue = props[propName];
    const oldPropsValue = oldProps[propName];

    if (!newPropsValue) {
      if (propName.slice(0, 2) === 'on') {
        const eventName = propName.toLowerCase().slice(2);
        newElement.removeEventListener(eventName, oldPropsValue);
      } else if (propName !== 'children') {
        newElement.removeAttribute(propName);
      }
    }
  })
}