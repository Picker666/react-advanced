export default function isFunction(virtualDOM) {
  // function组件，包括类组件
  return virtualDOM && typeof virtualDOM.type === 'function';
}