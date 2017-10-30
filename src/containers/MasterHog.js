import React, { Component } from 'react'
import Master from '../assets/master-hog.png'
import BabyHog from '../components/BabyHog'

class MasterHog extends Component {

  constructor(props) {
    super(props)
    this.state = {
      eyeColor: "blue",
      name: "Master Blaster",
      weight: '2.54 Tons',
      offspring: props.offspring
    }
  }

  makeBabyHogs = () => this.state.offspring.map(el => <BabyHog key={el.id} {...el} eyeColor={this.state.eyeColor}/>)

  render() {
    return (
      <div>
        {/* img on click increment style (ie () => style={{'scale': '+=.1'}} )*/}
        <h2>Name: {this.state.name}</h2>
        <h3>Weight: {this.state.weight}</h3>
        <h3>Eye Color: {this.state.eyeColor}</h3>
        <div id="masters-domicile">
          <img id="master-blaster" src={Master} alt='MasterBlaster' style={{height: 400}}></img>
        </div>
        <ul className="hoglist">
          {this.makeBabyHogs()}
        </ul>
      </div>

    )
  }

}

export default MasterHog;
