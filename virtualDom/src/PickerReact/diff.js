import mountElement from './mountElement';
import updateTextNode from './updateTextNode';
import updateNodeElement from './updateNodeElement';
import createDOMElement from './createDOMElement';
import unmountNode from './unmountNode';

function diff (virtualDOM, container, oldDOM) {
  const oldVirtualDOM = oldDOM?._virtualDOM;

  const { type } = virtualDOM;
  // 初次渲染
  if (!oldDOM) {
    mountElement(virtualDOM, container)
  } else if (type !== oldVirtualDOM.type && typeof virtualDOM !== 'function') {
    // DOM 类型不同，并且不是组件，直接替换
    const newElement = createDOMElement(virtualDOM);
    oldDOM.parentNode.replaceChild(newElement, oldDOM);
  } else if (oldVirtualDOM && type === oldVirtualDOM.type) {
    if (type === 'text') {
      // 更新元素内容
      updateTextNode(virtualDOM, oldVirtualDOM, oldDOM)
    } else {
      // 更新元素属性
      updateNodeElement(oldDOM, virtualDOM, oldVirtualDOM)
    }

    // 子节点diff
    virtualDOM.children.forEach(function (child, index) {
      diff(child, oldDOM, oldDOM.childNodes[index])
    })

    // 删除子节点
    const { childNodes: oldChildNodes } = oldDOM;
    if (oldChildNodes.length > virtualDOM.children.length) {
      for (let i = oldChildNodes.length - 1; i > virtualDOM.children.length - 1; i--) {
        unmountNode(oldChildNodes[i]);
      }
    }

  }
}

export default diff;