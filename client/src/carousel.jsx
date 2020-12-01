import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import CarouselItem from './carouselItem.jsx'

const Carousel = (props) => {

  return (
    <div>
      {props.images.map((image, index) => {
        return (
          <CarouselItem image={image} key={index} changeActive={props.changeActive}/>
        )
      })}
    </div>
  )
};

export default Carousel;