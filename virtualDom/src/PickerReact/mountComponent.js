import isFunction from './isFunction';
import isFunctionComponent from './isFunctionComponent'
import mountNativeElement from './mountNativeElement';

export default function mountComponent (virtualDOM, container, oldDOM) {
  let nextVirtualDOM = null;
  if (isFunctionComponent(virtualDOM)) {
    nextVirtualDOM = buildFunctionComponent(virtualDOM)
  } else {
    nextVirtualDOM = buildClassComponent(virtualDOM)
  }

  if (isFunction(nextVirtualDOM)) {
    mountComponent(nextVirtualDOM, container, oldDOM)
  } else {
    mountNativeElement(nextVirtualDOM, container, oldDOM)
  }

}

function buildFunctionComponent (virtualDOM) {
  return virtualDOM.type(virtualDOM.props || {})
}

export function buildClassComponent (virtualDOM) {
  const component = new virtualDOM.type(virtualDOM.props || {});
  const nextVirtualDOM = component.render();
  nextVirtualDOM.component = component;
  
  return nextVirtualDOM;
}