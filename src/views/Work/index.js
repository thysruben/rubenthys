import React, { Component } from 'react'

import WorkCard from './../../components/WorkCard'

import './work.scss'
import enepathMock from '../../assets/images/enepath-config.png'
import osocMock from '../../assets/images/smart-flanderss.png'

class Work extends Component {
  render() {
    return (
      <div className="work">
        <div className="work--container">
          <h3>Work</h3>
          <div className="work--cards">
            <WorkCard
              company="Enepath"
              title="Trading voice platform admin panel"
              location="London"
              mockImage={enepathMock}
              altMessage="Enepath admin panel"
              disclaimer="Internship"
            ></WorkCard>
            <WorkCard
              company="Open Summer of Code"
              title="Vacant underground parking spots with linked open data"
              location="Brussels"
              mockImage={osocMock}
              altMessage="Vacant underground parking spots application"
              disclaimer="Summer job"
            ></WorkCard>
          </div>
        </div>
      </div>
    )
  }
}

export default Work
