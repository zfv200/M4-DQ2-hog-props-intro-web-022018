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

          <Button animated value={0.5}>
            <Button.Content visible>Increase Weight</Button.Content>
            <Button.Content hidden>
              <Icon name='plus' />
            </Button.Content>
          </Button>

          <Button animated value={-0.5}>
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
