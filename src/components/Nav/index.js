import React, { Component } from 'react'

import { Link } from 'react-scroll'

import './nav.scss'

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false
        };
        this.handleToggle = this.handleToggle.bind(this);
        this.handleNav = this.handleNav.bind(this);
    }

    handleToggle(e) {
        e.preventDefault();
        this.setState({
            isExpanded: !this.state.isExpanded
        });
    }

    handleNav(e) {
        e.preventDefault();
        console.log('handling');
        this.setState({
            isExpanded: false
        })
    }
    render() {
        const { isExpanded } = this.state;

        return (
            <nav className="nav">
                <p
                    className="nav--mobile-menu"
                    aria-hidden="true"
                    onClick={e => this.handleToggle(e)}
                >MENU</p>
                <ul className={`collapsed ${isExpanded ? "expanded" : ""}`}>
                    <li className="nav-item" onClick={e => this.handleNav(e)}>
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={e => this.handleNav(e)}
                        >
                        Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={e => this.handleNav(e)}
                        >
                        About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={e => this.handleNav(e)}
                        >
                        Skills
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="work"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={e => this.handleNav(e)}
                        >
                        Work
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={e => this.handleNav(e)}
                        >
                        Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Nav