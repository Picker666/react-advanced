export default function updateNodeElement (newElement, virtualDOM, oldVirtualDOM) {
  const { props } = virtualDOM || {props: {}};
  const { props: oldProps } = oldVirtualDOM || {props: {}};
  Object.keys(props).forEach((propName) => {
     
    const newPropValue = props[propName];
    const oldPropValue = oldProps[propName];

    if (newPropValue !== oldPropValue) {
      if (propName.slice(0, 2) === 'on') {
        const eventName = propName.toLowerCase().slice(2);
        newElement.addEventListener(eventName,newPropValue);

        if (oldPropValue) {
          newElement.removeEventListener(eventName, oldPropValue);
        }
      } else if (propName === 'value' || propName === 'checked') {
        newElement[propName] = newPropValue;
      } else if (propName === 'className') {
        newElement.setAttribute('class', newPropValue)
      } else if (propName !== 'children')  {
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