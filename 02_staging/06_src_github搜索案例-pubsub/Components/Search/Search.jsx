import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component {

    search = () => {
        //获取用户输入
        //const {value} = this.keyWordElement;  //解构赋值的常规写法
        const { keyWordElement: { value: keyWord } } = this;  //解构赋值的连续写法
        console.log(keyWord);
        //发送请求前通知List更新状态
        PubSub.publish('searchResult', { isFirst: false, isLoading: true })

        //发送网络请求
        axios.get(`/api1/search/users?q=${keyWord}`).then(
            response => {
                //发送请求前通知List更新状态
                PubSub.publish('searchResult', { isLoading: false, users: response.data.items })
            },
            error => {
                //请求失败后通知List更新状态
                PubSub.publish('searchResult', { isLoading: false, err: error.message })

            },
        )
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索github用户</h3>
                <div>
                    <input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索" />&nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </section>
        )
    }
}
