import React, { Component } from 'react'

class Box extends Component {

    render () {
        return (
            <div className="box" style = {{backgroundColor: `${this.props.color}`, flex: 1}}></div>
        )
    }

}
export default Box