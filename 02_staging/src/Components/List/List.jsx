import React, { Component } from 'react'
import Item from '../Item/Item'
import './List.css'

export default class List extends Component {
    render() {
        const {users,isFirst,isLoading,err} = this.props
        return (
            <div className="row">
                {
                    isFirst ? <h2>欢迎使用</h2> : 
                    isLoading ? <h2>Loading……</h2> :
                    err ? <h2 style={{color:"red"}}>{err}</h2>:
                    users.map((userObj)=>{
                        return <Item key={userObj.id} user={userObj}/>
                    })
                }                
            </div>
        )
    }
}
