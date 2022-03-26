import React, { Component } from 'react'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'

class Header extends Component {

  back = () => {
    this.props.history.goBack()
  }

  forward = () => {
    this.props.history.goForward()
  }

  go = () => {
    this.props.history.go(-2)
  }

  render() {
    return (
      <div className="page-header">
        <h2>React Router Demo</h2>
        &nbsp;<button onClick={() => { this.back() }}>back</button>
        &nbsp;<button onClick={() => { this.forward() }}>forward</button>
        &nbsp;<button onClick={() => { this.go() }}>go</button>
      </div>
    )
  }
}

export default withRouter(Header)

// withRouter可以加工一般组件，让一般组件具备路由组件所特有的API
// withRouter的返回值是一个新组件
