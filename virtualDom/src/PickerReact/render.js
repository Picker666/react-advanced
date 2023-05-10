import diff from './diff';

function render (virtualDOM, container) {
  const oldDOM=container.firstChild;
  diff(virtualDOM, container, oldDOM);
}

export default render;