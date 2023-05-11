import diff from "./diff";

/**
 * 类组件更新要点：
 *  1、保证组件实例不变
 *  2、执行对应的生命周期
 *  3、更新props
 *  4、执行render生成新的虚拟DOM，并挂载component
 *  5、执行组件内元素的diff
 */

export default function updateComponent (virtualDOM, oldComponent, oldDOM, container) {
  // 执行组件生命周期
  oldComponent.componentWillReceiveProps(virtualDOM.props);
  // 判断是否要更新
  if (oldComponent.shouldComponentUpdate(virtualDOM.props)) {
    const preprops = oldComponent.props;

    oldComponent.componentWillUpdate(virtualDOM.props);
    // props 更新
    oldComponent.updateProps(virtualDOM.props);
    // 获取新的虚拟DOM
    const nextVirtualDOM = oldComponent.render();
    nextVirtualDOM.component = oldComponent;
  
    // 组件内DOM更新
    diff(nextVirtualDOM, container, oldDOM);

    oldComponent.componentDidUpdate(preprops);
  }
  
}