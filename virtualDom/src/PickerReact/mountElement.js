import mountNativeElement from './mountNativeElement';
import isFunction from './isFunction';
import mountComponent from './mountComponent';

function mountElement (virtualDOM, container, oldDOM) {

  if (isFunction(virtualDOM)) {
    // 组件渲染
    mountComponent(virtualDOM, container, oldDOM)
  } else {
    // 原生元素渲染
    mountNativeElement(virtualDOM, container, oldDOM);
  }
}

export default mountElement;