import diff from './diff'

export default class Component {
  constructor(props) {
    this.props = props;
  }

  setState(state) {
    this.state = { ...this.state, ...state };
    const virtualDOM = this.render();
    const oldDOM = this.getDOM();
    const parentNodes = oldDOM.parentNodes;
    diff(virtualDOM, parentNodes,  oldDOM)
  }

  setDOM (dom) {
    this._dom = dom;
  }

  getDOM () {
    return this._dom
  }
}