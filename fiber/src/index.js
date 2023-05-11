import React, { render, Component } from './react';

const root = document.getElementById('root')

const jsx = <div>
  <p>Hello React</p>
  <p>Hello Fiber</p>
</div>

// render(jsx, root);

// setTimeout(() => {
//   const jsx = <div>
//     {/* <div>Hi React</div> */}
//     <p>Hi Fiber</p>
//   </div>;

//   render(jsx, root);
// }, 2000);

class Greating extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Picker'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState({ name: 'Chistine' });
  }

  render () {
    return <div>
      {this.state.name}Hello World......{this.props.title}
      <button onClick={this.handleClick}>按钮</button>
    </div>
  }
}

render(<Greating title="Hi" />, root);

function FnComponent (props) {
  return <div>Hello Function component...{props.title}</div>
};

// render(<FnComponent title="Hi"/>, root);
