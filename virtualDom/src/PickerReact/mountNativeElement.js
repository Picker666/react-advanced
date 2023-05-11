import createDOMElement from "./createDOMElement";
import unmountNode from "./unmountNode";

export default function mountNativeElement (virtualDOM, container, oldDOM) {
  const newElement = createDOMElement(virtualDOM);

  if (oldDOM) {
    container.insertBefore(newElement, oldDOM)
  } else {
    container.appendChild(newElement);
  }

  if (oldDOM) {
    unmountNode(oldDOM)
  }


  const {component} = virtualDOM;

  if (component) {
    component.setDOM(newElement);
  }
};
