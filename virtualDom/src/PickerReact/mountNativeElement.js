import createDOMElement from "./createDOMElement";
import unmountNode from "./unmountNode";

// 原生DOM元素创建并挂载到其父级节点
export default function mountNativeElement (virtualDOM, container, oldDOM) {
  // 创建DOM
  const newElement = createDOMElement(virtualDOM);

  // 其位置 是否存在旧元素
  if (oldDOM) {
    // 存在旧元素时，插入新元素，并删除就元素
    container.insertBefore(newElement, oldDOM);
    unmountNode(oldDOM)
  } else {
    // 不存在旧元素时，直接添加
    container.appendChild(newElement);
  }

  const {component} = virtualDOM;

  if (component) {
    // 如果该元素为类组件最外层节点，则将该元素更新到类组件中
    component.setDOM(newElement);
  }
};
