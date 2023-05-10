import createDOMElement from "./createDOMElement";
import unmountNode from "./unmountNode";

export default function mountNativeElement (virtualDOM, container, oldDOM) {
  const newElement = createDOMElement(virtualDOM);

  if (oldDOM) {
    unmountNode(oldDOM)
  }
  container.appendChild(newElement);

  const {component} = virtualDOM;

  if (component) {
    component.setDOM(newElement);
  }
};
