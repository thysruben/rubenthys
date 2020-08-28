import React, { Component } from 'react'

import './footer.scss'
import githubIcon from '../../assets/icons/github-icon.svg'

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer--container">
                    <div className="footer--socials">
                        <a href="https://www.linkedin.com/in/ruben-thys-895545120/" target="_blank">
                            <img src={githubIcon} alt="Github"/>
                        </a>
                    </div>
                    <div className="footer--text">
                        <p>Design and coding done by me! 😎</p>
                        <a href="mailto:hello@rubenthys.dev" target="-blank">hello@rubenthys.dev</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer