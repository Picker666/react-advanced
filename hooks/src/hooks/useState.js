import render from '../index';

let states = [];
let setters = [];
let currentIndex = 0;

const generateSetter = (index) => (newState) => {
	if (typeof newState === 'function') {
		states[index] = newState(states[index]);
	} else {
		states[index] = newState;
	}

	currentIndex = 0;
	render();
}


const useState = (initialState) =>{
	if (states[currentIndex] === undefined) {
		if (typeof initialState === 'function') {
			states[currentIndex] = initialState();
		} else {
			states[currentIndex] = initialState;
		}
	}

	const setter = generateSetter(currentIndex);

	setters[currentIndex] = setter;
	const value = states[currentIndex];

	currentIndex ++;

	return [value, setter];
}

export default useState;
