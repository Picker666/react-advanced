import updateNodeElement from "./updateNodeElement";

export default function createDOMElement (virtualDOM) {
  let newElement = null;

  const { type, props, children } = virtualDOM;

  if (type === 'text') {
    newElement = document.createTextNode(props.textContent);
  } else {
    newElement = document.createElement(type, props);
    // 将虚拟DOM属性更新到真是DOM上
    updateNodeElement(newElement, virtualDOM)
  }

  return newElement;
}