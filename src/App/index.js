import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import Headroom from 'react-headroom'

import Content from '../components/Content'
import Header from '../components/Header'
import Home from '../views/Home'
import About from '../views/About'
import Skills from '../views/Skills'
import Work from '../views/Work'
import Contact from '../views/Contact'

import './app.scss'

class App extends Component {
    render() {
        return (
            <div className="app">
                {/* <Headroom> */}
                    <Header />
                {/* </Headroom> */}
                <Content>
                    <Home />
                    <About />
                    <Skills />
                    <Work />
                    <Contact />
                </Content>
            </div>
        )
    }
}

export default hot(module)(App)