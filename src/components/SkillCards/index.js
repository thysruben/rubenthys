import React, { Component } from 'react'

import './SkillCards.scss'

class SkillCards extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="skill-cards">
            {
                this.props.skills.map((skill, i) =>
                    <div className="skill-cards--card" key={i}>
                        <div className="card-icon">
                        <img src={skill.icon} alt=""/>
                        </div>
                        <p>{skill.skillName}</p>
                    </div>
                )
            }
            </div>
        )
    }
}

export default SkillCards