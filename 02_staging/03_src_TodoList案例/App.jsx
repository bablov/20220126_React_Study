import React, { Component } from 'react'
import Header from './Components/Header/Header'
import List from './Components/List/List'
import Footer from './Components/Footer/Footer'
import "./App.css"

export default class App extends Component {
  //状态在哪里，操作状态的方法就在哪里

  //初始化状态
  state = {
    todos: [
      { id: "001", name: "吃饭", done: true },
      { id: "002", name: "睡觉", done: true },
      { id: "003", name: "打代码", done: false },
      { id: "004", name: "打游戏", done: false },
    ]
  }

  //addToDo 用于添加一个todo，接收的参数是todo对象
  addToDo = (todoObj) => {
    //获取原来的todo
    const { todos } = this.state;
    //追加一个todo
    const newTodos = [todoObj, ...todos]
    //更新状态
    this.setState({ todos: newTodos })
  }

  //用于更新一个todo对象
  updateTodo = (id, done) => {
    //获取状态中todos
    const { todos } = this.state
    //匹配处理数据
    const newTodos = todos.map((todo) => {
      if (todo.id === id) return { ...todo, done: done }
      else return todo
    })

    this.setState({ todos: newTodos })
  }

  //用于删除一个todo
  deleteTodo = (id) => {
    //获取状态中todos
    const { todos } = this.state
    //删除指定id的todo对象
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id
    })
    this.setState({ todos: newTodos })
  }

  //用于全选或取消全选
  checkAllTodo = (done) => {
    //获取状态中todos
    const { todos } = this.state
    //匹配处理数据
    const newTodos = todos.map((todo) => {
      return { ...todo, done }
    })

    this.setState({ todos: newTodos })
  }

  //用于清除所有已完成的
  chearDone = () => {
    //获取状态中todos
    const { todos } = this.state
    //删除已完成的
    const newTodos = todos.filter((todoObj) => {
      return !todoObj.done
    })
    this.setState({ todos: newTodos })
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addToDo={this.addToDo} />
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} chearDone={this.chearDone} />
        </div>
      </div>
    )
  }
}
