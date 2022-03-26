import React, { Component } from 'react'
// import qs from 'qs'

const DetailData = [
    { id: "01", content: "你好，北京" },
    { id: "02", content: "你好，上海" },
    { id: "03", content: "你好，郑州" },
]

export default class Detail extends Component {
    render() {
        console.log(this.props)

        //接收params参数
        // const { id, title } = this.props.match.params

        //接收search参数
        // const { search } = this.props.location
        // const {id,title} = qs.parse(search.slice(1)) 

        //接收state参数
        const {id,title} = this.props.location.state || {}

        const findResult = DetailData.find((detailObj) => {
            return detailObj.id === id
        })
        return (
            <ul>
                <li>ID:{id}</li>
                <li>Title:{title}</li>
                <li>Content:{findResult?.content}</li>
            </ul>
        )
    }
}
