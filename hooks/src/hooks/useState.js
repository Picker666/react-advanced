import render from '../index.jsx';

let states = [];
let setters = [];
let currentIndex = 0;

const generateSetter = (index) => (newState) => {
    states[index] = newState;
    currentIndex = 0;
    render();
}


const useState = (initialState) =>{
    if (states[currentIndex] === undefined) {
        states[currentIndex] = initialState;
    }

    const setter = generateSetter(currentIndex);

    setters[currentIndex] = setter
    const value = states[currentIndex];

    currentIndex ++;

    return [value, setter];
}

export default useState;
