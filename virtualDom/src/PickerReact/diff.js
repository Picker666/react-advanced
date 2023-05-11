import mountElement from './mountElement';
import updateTextNode from './updateTextNode';
import updateNodeElement from './updateNodeElement';
import createDOMElement from './createDOMElement';
import unmountNode from './unmountNode';
import diffComponent from './diffComponent';

function diff (virtualDOM, container, oldDOM) {
  const oldVirtualDOM = oldDOM?._virtualDOM;
  const oldComponent = oldVirtualDOM?.component;

  const { type } = virtualDOM;
  // 新增
  if (!oldDOM) {
    mountElement(virtualDOM, container)
  } else if (type !== oldVirtualDOM.type && typeof virtualDOM.type !== 'function') {
    // DOM 类型不同，并且不是组件，直接替换
    const newElement = createDOMElement(virtualDOM);
    oldDOM.parentNode.replaceChild(newElement, oldDOM);
  } else if (typeof virtualDOM.type === 'function') {
    // 组件
    diffComponent(virtualDOM, oldComponent, oldDOM, container)
  } else if (oldVirtualDOM && type === oldVirtualDOM.type) {
    if (type === 'text') {
      // 更新元素内容
      updateTextNode(virtualDOM, oldVirtualDOM, oldDOM)
    } else {
      // 更新元素属性
      updateNodeElement(oldDOM, virtualDOM, oldVirtualDOM)
    }

    // 1|将拥有key属性的子元素方到单独的对象中
    const keyedElements = {};
    for (let i = 0,len = oldDOM.childNodes.length; i < len;i++) {
      const domElement = oldDOM.childNodes[i];
      if (domElement.nodeType === 1) {
        const key = domElement.getAttribute('key');
        if (key !== undefined && key !== null) {
          keyedElements[key] = domElement;
        }
      }
    }

    const hasNoKey = Object.keys(keyedElements).length === 0;

    if (hasNoKey) {
      // 子节点diff
      virtualDOM.children.forEach(function (child, index) {
        diff(child, oldDOM, oldDOM.childNodes[index])
      })
    } else {
      
      // 2、循环virtualDOM 的子元素，获取key属性
      virtualDOM.children.forEach((child, i) => {
        const key = child.props.key;
        if (key) {
          const domElement = keyedElements[key]

          if (domElement) {
            // 3、看看当前位置是不是我们期望的元素
            if(oldDOM.childNodes[i] && oldDOM.childNodes[i] !== domElement) {
              oldDOM.insertBefore(domElement, oldDOM.childNodes[i])
            }
          } else {
            mountElement(child, oldDOM, oldDOM.childNodes[i]);
          }
        }
      })
    }


    // 删除子节点
    const { childNodes: oldChildNodes } = oldDOM;
    if (oldChildNodes.length > virtualDOM.children.length) {
      if (hasNoKey) {
        for (let i = oldChildNodes.length - 1; i > virtualDOM.children.length - 1; i--) {
          unmountNode(oldChildNodes[i]);
        }
      } else {
        for (let i = 0; i < oldChildNodes.length; i++) {
          const oldChild = oldDOM.children[i];
          const key = oldChild._virtualDOM.key;

          const found = virtualDOM.children.some(child => child.key === key);
          if (!found) {
            unmountNode(oldChild);
          }
        }
      }
    }

  }
}

export default diff;