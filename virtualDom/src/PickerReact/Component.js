import diff from './diff'

export default class Component {
  constructor(props) {
    this.props = props;
  }

  setState(state) {
    this.state = { ...this.state, ...state };
    // 获取新的虚拟DOM
    const virtualDOM = this.render();
    // 获取旧真实DOM
    const oldDOM = this.getDOM();
    const parentNodes = oldDOM.parentNodes;

    // 执行diff 并将改变更新到真是DOM
    diff(virtualDOM, parentNodes,  oldDOM)
  }

  setDOM (dom) {
    // 设置真实DOM，也就是该组件最外层元素
    this._dom = dom;
  }

  getDOM () {
    // 获取DOM
    return this._dom
  }

  updateProps (props) {
    // 更新props
    this.props = props;
  }

  // 生命周期函数
  componentWillMount() {}
  componentDidMount() {}
  componentWillReceiveProps(nextProps) {}
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps != this.props || nextState != this.state
  }
  componentWillUpdate(nextProps, nextState) {}
  componentDidUpdate(prevProps, preState) {}
  componentWillUnmount() {}
}