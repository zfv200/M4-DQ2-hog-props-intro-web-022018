import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import Baby from '../assets/baby-hog.png'

class BabyHog extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id: props.id,
      name: props.name,
      weight: props.weight,
      eyeColor: props.eyeColor,
      imgHeight: 200
    }
  }

  changeWeight(event) {
    event.preventDefault()
    let action = event.target.id
    if (action === 'increase') {
      this.setState({imgHeight: `${this.state.imgHeight += 20}`})
    }
    if (action === 'decrease') {
      this.setState({imgHeight: `${this.state.imgHeight -= 20}`})
    }
  }

  render() {
    return (
        <li className="hogbabies">
          <h1>{this.state.name}</h1>
          <h3>Weight: {this.state.weight}</h3>
          <h4>Eye Color: {this.state.eyeColor}</h4>
          <img src={Baby} style={{height: `${this.state.imgHeight}`}} alt="MasterBlasterJrJr" />

          <Button animated id="increase" onClick={this.changeWeight.bind(this)}>
            <Button.Content id="increase" visible>Increase Weight</Button.Content>
            <Button.Content id="increase" hidden>
              <Icon id="increase" name='plus' />
            </Button.Content>
          </Button>

          <Button animated value={-20} onClick={this.changeWeight}>
            <Button.Content visible>Decrease Weight</Button.Content>
            <Button.Content hidden>
              <Icon name='minus' />
            </Button.Content>
          </Button>

        </li>
    )
  }
}

export default BabyHog;
