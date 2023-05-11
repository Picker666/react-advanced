import React, { render, Component } from './react';

const root = document.getElementById('root')

const jsx = <div>
  <p>Hello React</p>
  <p>Hello Fiber</p>
</div>

render(jsx, root);

setTimeout(() => {
  const jsx = <div>
    {/* <div>Hi React</div> */}
    <p>Hi Fiber</p>
  </div>;

  render(jsx, root);
}, 2000);

class Greating extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return <div>Hello World......{ this.props.title}</div>
  }
}

// render(<Greating title="Hi" />, root);

function FnComponent (props) {
  return <div>Hello Function component...{props.title}</div>
};

// render(<FnComponent title="Hi"/>, root);
