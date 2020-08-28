import React, { Component } from 'react'
import SkillsCard from '../../components/SkillsCard'
// import Icons from '../../utils/Icons'
// import Icon from '../../components/Icon'
// import Background1 from '../../assets/images/skills-card-background-1.svg'

import './skills.scss'

class Skills extends Component {
    render() {
        return (
            <div className="skills">
                <div className="skills--container">
                    <h3>Skills</h3>
                    <div className="skills-cards"></div>
                </div>
            </div>
        )
    }
}

export default Skills