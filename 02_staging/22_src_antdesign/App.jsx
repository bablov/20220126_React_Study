import React, { Component } from 'react'
import { Button, DatePicker, RangePicker } from 'antd'
import { SearchOutlined, WechatOutlined, WeiboOutlined } from '@ant-design/icons'
import 'antd/dist/antd.less'

export default class App extends Component {
  render() {
    return (
      <div>
        App
        <Button>点我</Button>
        <Button type="primary">按钮1</Button>
        <Button>按钮2</Button>
        <Button type="link">按钮3</Button>
        <Button type="primary" icon={<SearchOutlined />} >按钮4</Button>
        <WechatOutlined />
        <WeiboOutlined />
        <DatePicker />
      </div>
    )
  }
}
