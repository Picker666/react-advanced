import { createTaskQuence, arrified, createStateNode, getTag } from '../Misc';

const taskQuence = createTaskQuence();
let subTask = null;

let pendingCommit = null;

const commitAllWork = fiber => {
  console.log('fiber: ', fiber.effects);
  fiber.effects.forEach(item => {
    if (item.effectTag === 'placement') {
      item.parent.stateNode.appendChild(item.stateNode);
    }
  })
  
}

const getFirstTask = () => {
  /**
   * 从任务队列获取任务
   */
  const task = taskQuence.pop();
  // 返回最外层节点的fiber对象
  return { 
    props: task.props,
    stateNode: task.dom,
    tag: 'host_root',
    effects: [],
    child: null,
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

  while (index < numberOfElements) {
    element = arrifiedChildren[index];
    newFiber = {
      type: element.type,
      props: element.props,
      tag: getTag(element),
      effects: [],
      effectTag: "placement",
      parent: fiber,
    };

    newFiber.stateNode = createStateNode(newFiber);

    if (index === 0) {
      fiber.child = newFiber;
    } else {
      preFiber.sibilng = newFiber;
    }

    preFiber = newFiber;
    index++;
  }
}

const executeTask = (fiber) => {
  reconcileChildren(fiber, fiber.props.children);

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