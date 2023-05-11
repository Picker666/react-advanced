import mountElement from './mountElement';
import updateTextNode from './updateTextNode';
import updateNodeElement from './updateNodeElement';
import createDOMElement from './createDOMElement';
import unmountNode from './unmountNode';
import diffComponent from './diffComponent';

/**
 * nodeType: 
    1、元素节点
    2、属性节点
    3、文本节点
    4、CDATA区段
    5、实体应用元素
    6、实体
    7、表示处理指令
    8、注释节点
    9、最外层的Root element,包括所有其他节点
    10、<!DOCTYPE...>
    11、文档碎片节点
    12、DTD中声明的符号节点
 */

function diff (virtualDOM, container, oldDOM) {
  const oldVirtualDOM = oldDOM?._virtualDOM;

  const { type } = virtualDOM;
  if (!oldDOM) {
    // 新增
    mountElement(virtualDOM, container);
  } else if (typeof virtualDOM.type === 'function') {
    // 组件
    diffComponent(virtualDOM, oldVirtualDOM?.component, oldDOM, container)
  } else if (type !== oldVirtualDOM.type) {
    // 不是组件， 且 DOM 类型不同，直接替换
    const newElement = createDOMElement(virtualDOM);
    oldDOM.parentNode.replaceChild(newElement, oldDOM);
  } else if (oldVirtualDOM && type === oldVirtualDOM.type) {
    if (type === 'text') {
      // 更新元素内容
      updateTextNode(virtualDOM, oldVirtualDOM, oldDOM)
    } else {
      // 更新元素属性
      updateNodeElement(oldDOM, virtualDOM, oldVirtualDOM)
    }

    // 1、将拥有key属性的子元素放到单独的对象中
    const keyedElements = {};
    for (let i = 0,len = oldDOM.childNodes.length; i < len;i++) {
      const domElement = oldDOM.childNodes[i];
      if (domElement.nodeType === 1) {
        const key = domElement.getAttribute('key');
        if (key !== undefined && key !== null) {
          keyedElements[key] = domElement;
        }
      }
    }

    const hasNoKey = Object.keys(keyedElements).length === 0;

    if (hasNoKey) {
      // 子节点diff
      virtualDOM.children.forEach(function (child, index) {
        diff(child, oldDOM, oldDOM.childNodes[index])
      })
    } else {
      
      // 2、循环virtualDOM 的子元素，获取key属性
      virtualDOM.children.forEach((child, i) => {
        const key = child.props.key;
        if (key) {
          const domElement = keyedElements[key]

          if (domElement) {
            // 3、看看当前位置是不是我们期望的元素
            if(oldDOM.childNodes[i] && oldDOM.childNodes[i] !== domElement) {
              // 将当前位置的元素插入到DOM中当前位置
              oldDOM.insertBefore(domElement, oldDOM.childNodes[i])
            }
          } else {
            // 元素不存在，则为新增
            mountElement(child, oldDOM, oldDOM.childNodes[i]);
          }
        }
      })
    }


    // 删除子节点
    const { childNodes: oldChildNodes } = oldDOM;
    /// 旧元素 多余 新元素 则认为有元素删除
    if (oldChildNodes.length > virtualDOM.children.length) {
      if (hasNoKey) {
        // 没有key时，删除后边多出的元素，（如果实际删除元素不在末尾，此时操作前，可能会有不必要的元素删除新增）
        for (let i = oldChildNodes.length - 1; i > virtualDOM.children.length - 1; i--) {
          unmountNode(oldChildNodes[i]);
        }
      } else {
        for (let i = 0; i < oldChildNodes.length; i++) {
          const oldChild = oldChildNodes[i];
          const key = oldChild._virtualDOM.props.key;

          const found = virtualDOM.children.some(child => child.props.key === key);
          if (!found) {
            unmountNode(oldChild);
          }
        }
      }
    }

  }
}

export default diff;