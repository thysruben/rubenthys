import React, { Component } from 'react'

import './about.scss'
import background from '../../assets/images/about-background.svg'

class About extends Component {
    render() {
        return (
            <div className="about" id="about">
                <div className="about--text-box">
                    <h3>About me</h3>
                    <p>I like solving problems</p>
                    <p>Hi, my name is Ruben and I'm a web developer.</p>
                </div>
            </div>
        )
    }
}

export default About