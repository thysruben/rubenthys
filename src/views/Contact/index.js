import React, { Component } from 'react'

import './contact.scss'
import twitterIcon from '../../assets/icons/twitter-white.svg'
import linkedInIcon from '../../assets/icons/linkedin-white.svg'
import mailIcon from '../../assets/icons/mail.svg'

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="contact--container">
          <div className="contact--card">
            <h3>Get in touch with me!</h3>
            <div className="contact--socials">
              <a
                href="https://www.linkedin.com/in/thysruben/"
                rel="noopener"
                target="_blank"
              >
                <img src={linkedInIcon} alt="LinkedIn" />
              </a>
              <a href="mailto:hello@rubenthys.dev">
                <img src={mailIcon} alt="Mail" rel="noopener" target="_blank" />
              </a>
              <a href="https://twitter.com/rubenthys22">
                <img
                  src={twitterIcon}
                  alt="Twitter"
                  rel="noopener"
                  target="_blank"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
