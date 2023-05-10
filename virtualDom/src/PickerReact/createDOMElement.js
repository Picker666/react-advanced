import mountElement from "./mountElement";
import updateNodeElement from "./updateNodeElement";

export default function createDOMElement (virtualDOM) {
  let newElement = null;

  const { type, props, children } = virtualDOM;

  if (type === 'text') {
    newElement = document.createTextNode(props.textContent);
  } else {
    newElement = document.createElement(type, props);
    updateNodeElement(newElement, virtualDOM)
  }

  newElement._virtualDOM = virtualDOM;

  if (children) {
    children.forEach(child => {
      mountElement(child, newElement)
    })
  }

  if (virtualDOM?.props?.ref) {
    virtualDOM?.props?.ref(newElement)
  }


  return newElement;
}