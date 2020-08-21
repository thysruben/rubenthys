import React, { Component, useState } from 'react'
import { Link } from 'react-scroll'

import Nav from '../Nav'
import './header.scss'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>
                    <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                    Ruben
                    </Link>
                </h1>
                <Nav></Nav>
            </div>
        )
    }
}

export default Header