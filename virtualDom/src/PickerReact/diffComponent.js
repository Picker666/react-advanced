import mountElement from "./mountElement";
import updateComponent from "./updateComponent";

export default function diffComponent (virtualDOM, oldComponent, oldDOM, container) {

  if (isSameComponent(virtualDOM, oldComponent)) {
    updateComponent(virtualDOM, oldComponent, oldDOM, container)
  } else {
    // 不是同类型的组件，直接渲染新的组件，(旧的组件，将在mountNativeElement中被移除)
    mountElement(virtualDOM, container, oldDOM);
  }
}

function isSameComponent (virtualDOM, oldComponent) {
  return oldComponent && virtualDOM.type == oldComponent.constructor
}