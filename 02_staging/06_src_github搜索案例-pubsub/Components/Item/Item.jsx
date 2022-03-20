import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        const {user} = this.props
        return (
            <div className="card">
                <a rel="noreferrer" href={user.html_url} target="_blank">
                    <img alt="head portrait" src={user.avatar_url} style={{ width: '100px' }} />
                </a>
                <p className="card-text">{user.login}</p>
            </div>
        )
    }
}
