// import isFunction from './isFunction';
import isFunctionComponent from './isFunctionComponent'
// import mountNativeElement from './mountNativeElement';
import mountElement from './mountElement';

export default function mountComponent (virtualDOM, container, oldDOM) {
  let nextVirtualDOM = null;
  let component = null;

  if (isFunctionComponent(virtualDOM)) {
    // 函数组件
    nextVirtualDOM = buildFunctionComponent(virtualDOM)
  } else {
    // 类组件
    nextVirtualDOM = buildClassComponent(virtualDOM);
    component = nextVirtualDOM.component;
  }

  // 对组件返回的结果进行渲染
  mountElement(nextVirtualDOM, container, oldDOM);
  // if (isFunction(nextVirtualDOM)) {
  //   mountComponent(nextVirtualDOM, container, oldDOM)
  // } else {
  //   mountNativeElement(nextVirtualDOM, container, oldDOM)
  // }

  // 执行类组件生命周期 并初始化 ref
  if (component) {
    component.componentDidMount();
    if (component.props?.ref) {
      component.props.ref(component)
    }
  }

}

function buildFunctionComponent (virtualDOM) {
  // 执行函数类组件 获取函数组件的 虚拟DOM
  return virtualDOM.type(virtualDOM.props || {})
}

export function buildClassComponent (virtualDOM) {
  // 实例化类组件
  const component = new virtualDOM.type(virtualDOM.props || {});
  // 执行render 获取类组件的 虚拟DOM
  const nextVirtualDOM = component.render();
  // 将实例挂载到 其虚拟DOM上
  nextVirtualDOM.component = component;

  return nextVirtualDOM;
}