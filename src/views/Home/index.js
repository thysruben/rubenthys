import React, { Component } from 'react'

import './home.scss'
import illustration from '../../assets/images/me-illustration.png'
import illustrationFloor from '../../assets/images/me-illustration-floor.svg'

class Home extends Component {
    render() {
        return (
            <div className="home" id="home">
                <div className="home--container">
                    <div className="home--message">
                        <p>Hello 👋</p>
                        <h2>I'm Ruben</h2>
                        <p>Creative web developer with a taste for <span>technology</span> and <span>design.</span></p>
                    </div>
                    <div className="home--illustrations">
                        <img src={illustration} alt=""/>
                        <img src={illustrationFloor} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home