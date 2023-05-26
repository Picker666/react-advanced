import render from '../index';

const previousStates = {
	current: []
}

const update = () => {
	callbackReturnCB.forEach(cb => {
		cb && cb();
	});

	render(() => {
		statesIndex = 0;
		previousStates.current = states.slice();
		effectIndex = 0
	});
}

/// ================================================================= useState
let states = [];
let setters = [];
let statesIndex = 0;

const generateSetter = (index) => (newState) => {
	if (typeof newState === 'function') {
		states[index] = newState(states[index]);
	} else {
		states[index] = newState;
	}

	update();
}


const useState = (initialState) => {
	if (states[statesIndex] === undefined) {
		if (typeof initialState === 'function') {
			states[statesIndex] = initialState();
		} else {
			states[statesIndex] = initialState;
		}
	}

	const setter = generateSetter(statesIndex);

	setters[statesIndex] = setter;
	const value = states[statesIndex];

	statesIndex ++;

	return [value, setter];
}

// ================================= useEffect
let previousDependencies=[];
let effectIndex = 0;
let callbackReturnCB = [];

const returnCBFunc = (dependencies, cb) => {
	if (cb) {
		return () => {
			console.log('dependencies: ', dependencies);
			cb();
		}
	}
}

const useEffect = (callback, dependencies) => {
	if (typeof callback !== 'function') {
		throw new Error('callback invalid fail....');
	}
  if (dependencies!== undefined && !Array.isArray(dependencies)) {
    throw new Error('dependencies invalid fail....');
  }

  if (dependencies === undefined) {
		const cb = callback();
		callbackReturnCB[effectIndex] = returnCBFunc(dependencies, cb);
  } else if (dependencies.length) {
		const preDep = previousDependencies[effectIndex];
		const haveChanged = preDep?.some((dep, i) => dependencies[i] !== dep);
		if (!preDep || haveChanged) {
			const cb = callback();
			callbackReturnCB[effectIndex] = returnCBFunc(dependencies, cb);
		}
  }

	previousDependencies[effectIndex] = dependencies;
	effectIndex ++;
}

export {
  useState,
	useEffect
};
