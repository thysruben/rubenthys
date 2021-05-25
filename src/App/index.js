import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

import Content from '../components/Content'
import Header from '../components/Header'
import Home from '../views/Home'
import Work from '../views/Work'
import Skills from '../views/Skills'
import Contact from '../views/Contact'
import Footer from '../components/Footer'

import './app.scss'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Content>
          <Home />
          <Work />
          <div className="work-background-bottom"></div>
          <Skills />
          <Contact />
          <Footer />
        </Content>
      </div>
    )
  }
}

export default hot(module)(App)
