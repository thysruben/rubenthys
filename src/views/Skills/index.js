import React, { Component } from 'react'
import SkillsCard from '../../components/SkillsCard'
import Icons from '../../utils/Icons'
import Icon from '../../components/Icon'
import Background1 from '../../assets/images/skills-card-background-1.svg'

import './skills.scss'

class Skills extends Component {
    render() {
        return (
            <div className="skills">
                <h3>Skills</h3>
                <div className="skills--container">
                    <SkillsCard
                        title="Design"
                    >
                        <Icon src={Icons.GitHub} alt="GitHub"></Icon>
                        <Icon src={Icons.VSCode} alt="Visual Studio Code"></Icon>
                        <Icon src={Icons.Photoshop} alt="Adobe Photoshop"></Icon>
                        <Icon src={Icons.Sketch} alt="Sketch App"></Icon>
                        <Icon src={Icons.Trello} alt="Trello"></Icon>
                        <Icon src={Icons.Apple} alt="Apple"></Icon>
                        <Icon src={Icons.Illustrator} alt="Adobe Illustrator"></Icon>
                    </SkillsCard>
                    <SkillsCard
                        title="Develop"
                    >
                    </SkillsCard>
                    <SkillsCard
                        title="Tools"
                    >
                    </SkillsCard>
                </div>
            </div>
        )
    }
}

export default Skills