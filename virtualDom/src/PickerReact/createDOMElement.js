import mountElement from "./mountElement";
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

  // 每个DOM 上都有_virtualDOM，挂载其虚拟DOM
  newElement._virtualDOM = virtualDOM;

  if (children) {
    children.forEach(child => {
      mountElement(child, newElement)
    })
  }

  // 元素ref初始化
  if (virtualDOM?.props?.ref) {
    virtualDOM?.props?.ref(newElement)
  }

  return newElement;
}