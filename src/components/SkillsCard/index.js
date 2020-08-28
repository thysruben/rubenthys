import React, { Component } from 'react'
import skillsBackground from '../../assets/images/skills-card-background-1.svg'
import './SkillsCard.scss'

class SkillsCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="skills-card">
                <h4>{ this.props.title }</h4>
                <div className="skills-card--container" style={{ backgroundImage: `url(${this.props.background})` }}>
                    <div className="skills-card--icons-wrapper">
                        { this.props.children }
                    </div>
                </div>
            </div>
        )
    }
}

SkillsCard.defaultProps = {
    title: 'Skill',
    background: skillsBackground
}

export default SkillsCard