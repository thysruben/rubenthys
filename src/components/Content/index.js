import React, { Component } from 'react'

import './content.scss'

class Content extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="content">{this.props.children}</div>
        )
    }
}

export default Content