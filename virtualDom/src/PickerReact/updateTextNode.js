export default function updateTextNode (virtualDOM, oldVirtualDOM, oldDOM) {
  // 文本节点 内容不一样
  if (virtualDOM.props.textContent !== oldVirtualDOM.props.textContent) {
    // 更新DOM 文本内容
    oldDOM.textContent = virtualDOM.props.textContent;
    // 更新 DOM 上挂载的虚拟DOM
    oldDOM._virtualDOM = virtualDOM;
  }
}