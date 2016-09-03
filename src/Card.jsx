import React, { Component } from 'react'
import lordGabe from '../assets/lordGabe.jpg'

export default class Card extends Component {
  getImage(){
    if(this.props.imageURL){
      return (
        <img src={this.props.imageURL} />
      )
    } else {
      return (
        <img src={lordGabe} />
      )
    }
  }

  render() {
    return (
      <div className='ui card'>
        <div className='image'>
          {this.getImage()}
        </div>
        <div className='content'>
          <a className='header'>{this.props.name}</a>
          <div className='meta'>
            {this.props.set}
          </div>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  name: React.PropTypes.string.isRequired,
  imageURL: React.PropTypes.string,
  set: React.PropTypes.string
}
