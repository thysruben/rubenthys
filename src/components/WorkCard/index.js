import React, { Component } from 'react'

import './workCard.scss'

class WorkCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="work-card">
                <div className="work-card--head">
                    <p>{this.props.company}</p>
                    <p>{this.props.location}</p>
                    <h4>{this.props.title}</h4>
                </div>
                <div className="work-card--mockup">
                    <img src={this.props.mockImage} alt={this.props.altMessage}/>
                </div>
                <div className="work-card--disclaimer">
                    <p>{this.props.disclaimer}*</p>
                </div>
            </div>
        )
    }
}

export default WorkCard