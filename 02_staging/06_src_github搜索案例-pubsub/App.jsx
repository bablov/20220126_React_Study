import React, { Component } from 'react'
import List from './Components/List/List'
import Search from './Components/Search/Search'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Search/>
        <List/>
      </div>
    )
  }
}
