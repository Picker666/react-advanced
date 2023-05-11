import diff from './diff';

function render (virtualDOM, container) {
  // 旧的DOM存在于container中，并且是container唯一子元素
  const oldDOM = container.firstChild;

  diff(virtualDOM, container, oldDOM);
}

export default render;