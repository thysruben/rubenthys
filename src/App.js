import React, { Component } from 'react';
import './App.css';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faRss } from '@fortawesome/fontawesome-free-solid';
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
            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon> Twitter
          </a>
          <a href="https://github.com/thysruben">
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> GitHub
          </a>
          <a href="https://blog.rubenthys.me">
            <FontAwesomeIcon icon={faRss}></FontAwesomeIcon> Blog
          </a>
        </div>
      </div>
    );
  }
}

export default App;
