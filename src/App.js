import React, { Component } from 'react';
import './App.css';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faRss, faEnvelope } from '@fortawesome/fontawesome-free-solid';
import { faTwitter, faGithub } from '@fortawesome/fontawesome-free-brands'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="title">
          <h1>Ruben Thys</h1>
        </div>
        <div className="links">
          <a href="https://twitter.com/rubenthys22">
            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
          </a>
          <a href="https://github.com/thysruben">
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </a>
          <a href="https://blog.rubenthys.me">
            <FontAwesomeIcon icon={faRss}></FontAwesomeIcon>
          </a>
          <a href="mailto:hello@rubenthys.me">
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          </a>
          </div>
      </div>
    );
  }
}

export default App;
