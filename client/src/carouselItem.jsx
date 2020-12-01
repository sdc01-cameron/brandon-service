import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {CarouselIMG} from './styleFile.jsx'

class CarouselItem extends React.Component {
  constructor(props){
    super(props)
    this.hoverHandler = this.hoverHandler.bind(this)
 }

  hoverHandler(event) {
    this.props.changeActive(event.target.src)
  }

  render() {

    return (
      <div className="image">
      <CarouselIMG onMouseOver={this.hoverHandler} src={this.props.image} />

      </div>
    )
  }
}

export default CarouselItem