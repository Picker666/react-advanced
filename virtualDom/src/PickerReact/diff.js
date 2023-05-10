import mountElement from './mountElement';
import  updateTextNode from './updateTextNode';
import updateNodeElement from './updateNodeElement';
import createDOMElement from './createDOMElement';

function diff (virtualDOM, container, oldDOM) {
  const oldVirtualDOM = oldDOM?._virtualDOM;

  const { type } = virtualDOM;
  if (!oldDOM) {
    mountElement(virtualDOM, container)
  } else if (type !== oldVirtualDOM.type && typeof virtualDOM !== 'function') {
    const newElement = createDOMElement(virtualDOM);
    oldDOM.parentNode.replaceChild(newElement, oldDOM);
  } else if (oldVirtualDOM && type === oldVirtualDOM.type) {
    if (type === 'text') {
      updateTextNode(virtualDOM, oldVirtualDOM, oldDOM)
    } else {
      updateNodeElement(oldDOM, virtualDOM, oldVirtualDOM)
    }

    virtualDOM.children.forEach(function (child, index) {
      diff(child, oldDOM, oldDOM.childNodes[index])
    })
  }
}

export default diff;