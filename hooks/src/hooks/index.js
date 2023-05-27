import render from '../index';

const previousStates = {
	current: []
}

const update = () => {
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

const handleEffect = (callback) => {
	const returnCBFunc = callbackReturnCB[effectIndex];
	if (callbackReturnCB[effectIndex]) {
		returnCBFunc()
	};
	callbackReturnCB[effectIndex] = callback();
}

const useEffect = (callback, dependencies) => {
	if (typeof callback !== 'function') {
		throw new Error('callback invalid fail....');
	}
  if (dependencies!== undefined && !Array.isArray(dependencies)) {
    throw new Error('dependencies invalid fail....');
  }

  if (dependencies === undefined) {
		handleEffect( callback);
  } else if (dependencies.length) {
		const preDep = previousDependencies[effectIndex];
		const haveChanged = preDep?.some((dep, i) => dependencies[i] !== dep);
		if (!preDep || haveChanged) {
			handleEffect(callback);
		}
  }

	previousDependencies[effectIndex] = dependencies;
	effectIndex ++;
}

export {
  useState,
	useEffect
};
