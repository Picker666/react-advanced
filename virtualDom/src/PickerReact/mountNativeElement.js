import createDOMElement from "./createDOMElement";

export default function mountNativeElement (virtualDOM, container) {
  const newElement = createDOMElement(virtualDOM);

  container.appendChild(newElement);

  const {component} = virtualDOM;

  if (component) {
    component.setDOM(newElement);
  }
};
