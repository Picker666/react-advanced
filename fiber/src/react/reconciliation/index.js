import updateNodeElement from '../DOM/updateNodeElement';
import { createTaskQuence, arrified, createStateNode, getTag, getRoot } from '../Misc';

const taskQuence = createTaskQuence();
let subTask = null;

let pendingCommit = null;

const commitAllWork = fiber => {

  fiber.effects.forEach(item => {
    if (item.tag === 'class_component') {
      item.stateNode.__fiber = item;
    }

    if (item.effectTag === 'delete') {
      item.parent.stateNode.removeChild(item.stateNode);
    } else if (item.effectTag === 'update') {

      if (item.type === item.alternate.type) {
        // 节点类型相同
        updateNodeElement(item.stateNode, item, item.alternate)
      } else {
        // 节点类型不同
        item.parent.stateNode.replaceChild(item.stateNode, item.alternate.stateNode)
      }
      
    } else if (item.effectTag === 'placement') {
      let currentFiber = item;
      let parentFiber = item.parent;
      // 不能往类组件节点添加元素，所以找到类组件父级节点
      while (parentFiber.tag === 'class_component' || parentFiber.tag === 'function_component') {
        parentFiber = parentFiber.parent;
      }
      if (currentFiber.tag === 'host_component') {
        parentFiber.stateNode.appendChild(currentFiber.stateNode);
      }
    }
  })
  
  /**
   * 备份旧的 fiber  节点对象
   */

  fiber.stateNode.__rootFiberContainer = fiber;
}

const getFirstTask = () => {
  /**
   * 从任务队列获取任务
   */
  const task = taskQuence.pop();

  if (task.from === 'class_component') {
    const root = getRoot(task.instance);

    task.instance.__fiber.partialState = task.partialState;

    return { 
    props: root.props,
    stateNode: root.stateNode,
    tag: 'host_root',
    effects: [],
    child: null,
    alternate: root
  };
  }
  // 返回最外层节点的fiber对象
  return { 
    props: task.props,
    stateNode: task.dom,
    tag: 'host_root',
    effects: [],
    child: null,
    alternate: task.dom.__rootFiberContainer
  }
};

const reconcileChildren = (fiber, children) => {
  // children 可能是对象也可能实数组，将对象类型的children 变成数组
  const arrifiedChildren = arrified(children);
  let index = 0;
  let numberOfElements = arrifiedChildren.length;
  let element = null;
  let newFiber = null;
  let preFiber = null;

  let alternate = null;

  if (fiber.alternate?.child) {
    alternate = fiber.alternate.child;
  }

  while (index < numberOfElements || alternate) {
    element = arrifiedChildren[index];

    if (!element && alternate) { 
      alternate.effectTag = 'delete';
      fiber.effects.push(alternate);
    } else if (element && alternate) {
      // 更新
      newFiber = {
        type: element.type,
        props: element.props,
        tag: getTag(element),
        effects: [],
        effectTag: "update",
        parent: fiber,
        alternate
      };

      if (element.type === alternate.type) {
        // 类型相同
        newFiber.stateNode = alternate.stateNode;
      } else {
        // 类型不同
        newFiber.stateNode = createStateNode(newFiber);
      }
      
    } else if (element && !alternate) {
      // 初始化
      newFiber = {
        type: element.type,
        props: element.props,
        tag: getTag(element),
        effects: [],
        effectTag: "placement",
        parent: fiber,
      };
  
      newFiber.stateNode = createStateNode(newFiber);
    }


    if (index === 0) {
      fiber.child = newFiber;
    } else if (element) {
      preFiber.sibilng = newFiber;
    }

    if (alternate?.sibilng) {
      alternate = alternate.sibilng;
    } else {
      alternate = null;
    }

    preFiber = newFiber;
    index++;
  }
}

const executeTask = (fiber) => {
  // 执行的fiber都是同级的

  if (fiber.tag === 'class_component') {
    if (fiber.stateNode?.__fiber?.partialState) {
      fiber.stateNode.state = {
        ...fiber.stateNode.state,
        ...fiber.stateNode?.__fiber?.partialState
      }
    }
    reconcileChildren(fiber, fiber.stateNode.render());
  } else if (fiber.tag === 'function_component') {
    reconcileChildren(fiber, fiber.stateNode(fiber.props));
  } else {
    reconcileChildren(fiber, fiber.props.children);
  }

  if (fiber.child) {
    return fiber.child;
  }

  let currentExcutelyFiber = fiber;

  while (currentExcutelyFiber.parent) {
    currentExcutelyFiber.parent.effects = currentExcutelyFiber.parent.effects.concat(
      currentExcutelyFiber.effects.concat([currentExcutelyFiber])
    )
    if (currentExcutelyFiber.sibilng) {
      return currentExcutelyFiber.sibilng;
    }
    currentExcutelyFiber = currentExcutelyFiber.parent;
  }

  pendingCommit = currentExcutelyFiber;
}

const workLoop = (deadline) => {
  // 执行任务

  // 子任务不存在就获取任务
  if (!subTask) {
    subTask = getFirstTask();
  }

  // 任务存在并且浏览器有空余时间
  while (subTask && deadline.timeRemaining() > 1) {
    // 执行任务，并接受任务，返回新任务
    subTask = executeTask(subTask);
  }

  if (pendingCommit) {
    commitAllWork(pendingCommit);
  }
}

const performTask = (deadline) => {
  workLoop(deadline);

  // 任务是否存在 任务队列不为空
  if (subTask || !taskQuence.isEmpty()) {
    requestIdleCallback(performTask);
  }
}

export const render = (element, dom) => {
  /**
   * 1、向任务队列中添加任务
   * 2、指定浏览器的执行任务
   */

  /**
   * 任务通过vdom 对象构建 fiber对象
   */

  taskQuence.push({
    dom,
    props: { children: element }
  })

  requestIdleCallback(performTask)
}

export const scheduleUpdate = (instance, partialState) => {
  taskQuence.push({
    from: 'class_component',
    instance,
    partialState
  });

  requestIdleCallback(performTask);
}