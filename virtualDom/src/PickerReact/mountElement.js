import mountNativeElement from './mountNativeElement';
import isFunction from './isFunction';
import mountComponent from './mountComponent';

function mountElement (virtualDOM, container, oldDOM) {

  if (isFunction(virtualDOM)) {
    mountComponent(virtualDOM, container, oldDOM)
  } else {
    mountNativeElement(virtualDOM, container, oldDOM);
  }
}

export default mountElement;