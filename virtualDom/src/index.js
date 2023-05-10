import PickerReact from './PickerReact';

const root = document.getElementById("root")

const virtualDOM = (
  <div className="container">
    <h1>Picker React 666</h1>
    <h2 data-test="test">(编码必杀技)</h2>
    <div>
      嵌套1 <div>嵌套 1.1</div>
    </div>
    <h3>(观察: 这个将会被改变)</h3>
    {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
    {2 == 2 && <div>2</div>}
    <span>这是一段内容</span>
    <button onClick={() => alert("你好")}>点击我</button>
    <h3>这个将会被删除</h3>
    2, 3
    <input type="text" value="13" />
  </div>
)

console.log(virtualDOM);
// PickerReact.render(virtualDOM, root);

function Demo () {
  return <dev>666</dev>
}
function Heart (props) {

  return <div>{props.title}&heart;<Demo /></div>
}

// PickerReact.render(<Heart title="Picker 666..."/>, root);

class Alert extends PickerReact.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return <div>Hello Picker ...{this.props.name}{this.props.age}</div>
  }
}


// PickerReact.render(<Alert name="Picker" age='18'/>, root);

const modifyDOM = (
  <div className="container">
    <h1>Picker React 666</h1>
    <h2 data-test="test123">(编码必杀技)</h2>
    <div>
      嵌套1 <div>嵌套 1.1</div>
    </div>
    <h3>(观察: 这个将会被改变)</h3>
    {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
    {2 == 2 && <div>2</div>}
    {/* <span>这是一段修改过的内容</span> */}
    <button onClick={() => alert("你好!!!!!")}>点击我</button>
    {/* <h6>这个将会被删除</h6>
    2, 3 */}
    <input type="text" value="13" />
  </div>
)

// PickerReact.render(virtualDOM, root);

// setTimeout(() => {
//   PickerReact.render(modifyDOM, root);
// }, 2000)

class AlertComponent extends PickerReact.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "default title"
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.setState({title: "new title..."});
  }

  render () {
    return <div>Hello Picker ...{this.props.name}{this.props.age}
      <div>
        {this.state.title}
        <button onClick={this.handleClick}>更新</button>
      </div>
    </div>
  }
}

PickerReact.render(<AlertComponent name="picker" age='18' />, root);