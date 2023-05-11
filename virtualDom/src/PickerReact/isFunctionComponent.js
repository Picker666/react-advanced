import isFunction from "./isFunction";

export default function isFunctionComponent (virtualDOM) {
  const { type } = virtualDOM;
  // 不是类组件的function组件
  return !(type && isFunction(virtualDOM) && type.prototype && type.prototype.render)
}