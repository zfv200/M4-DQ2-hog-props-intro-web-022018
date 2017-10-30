import React, { Component } from 'react'
import Baby from '../assets/baby-hog.png'

class BabyHog extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id: props.id,
      name: props.name,
      weight: props.weight,
      eyeColor: props.eyeColor
    }
  }

  render() {
    return (
        <li className="hogbabies">
          <h1>Name: {this.state.name}</h1>
          <h3>Weight: {this.state.weight}</h3>
          <h4>Eye Color: {this.state.eyeColor}</h4>
          <img src={Baby} style={{height: 200}} alt="MasterBlasterJrJr" />
        </li>
    )
  }
}

export default BabyHog;
