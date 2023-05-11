const createTaskQuence =  () => {
  const taskQuence = []
  return {
    push: item => taskQuence.push(item),
    pop: () => taskQuence.shift(),
    isEmpty: () => taskQuence.length === 0
  }
}

export default createTaskQuence;
