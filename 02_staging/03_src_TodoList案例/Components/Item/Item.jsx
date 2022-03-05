import React, { Component } from 'react'
import './Item.css'

export default class Item extends Component {

  state = { mouse: false }  //标识鼠标移入、移出

  //鼠标移入移出的回调
  handleMouse = (flag) => {
    return () => {
      this.setState({mouse:flag})
    }
  }

  //勾选或者取消勾选的回调
  handleCheck = (id)=>{
    return (event)=>{
      this.props.updateTodo(id,event.target.checked)
    }
  }

  //删除一个todo的回调
  handleDelete = (id)=>{
    if(window.confirm("确定删除吗？")){
      return this.props.deleteTodo(id)
    }    
  }

  render() {
    const { id, name, done } = this.props;
    const {mouse} = this.state;
    return (
      <li style={{backgroundColor:mouse? '#ddd':'white'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
          <span>{name}</span>
        </label>
        <button onClick={()=>{this.handleDelete(id)}} className="btn btn-danger" style={{ display:mouse?"block":"none" }}>删除</button>
      </li>
    )
  }
}
