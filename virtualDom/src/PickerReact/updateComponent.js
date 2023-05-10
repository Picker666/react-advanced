import diff from "./diff";


export default function updateComponent (virtualDOM, oldComponent, oldDOM, container) {
  oldComponent.componentWillReceiveProps(virtualDOM.props)
  if (oldComponent.shouldComponentUpdate(virtualDOM.props)) {
    const preprops = oldComponent.props;

    oldComponent.componentWillUpdate(virtualDOM.props);
    // props 更新
    oldComponent.updateProps(virtualDOM.props);
    const nextVirtualDOM = oldComponent.render();
    nextVirtualDOM.component = oldComponent;
  
    diff(nextVirtualDOM, container, oldDOM);

    oldComponent.componentDidUpdate(preprops);
  }
  
}