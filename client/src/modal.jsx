import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ModalCarousel from './modalCarousel.jsx';
import {ModalStyle, BackgroundStyle,} from './styleFile.jsx'


class Modal extends React.Component {
  constructor(props){
    super(props)
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler() {
    this.props.toggleModal()
  }

  render() {
    if (this.props.showModal) {
      return ReactDOM.createPortal(
      <>
        <BackgroundStyle onClick={this.clickHandler}></BackgroundStyle>
        <ModalStyle>
          <ModalCarousel activeImage={this.props.activeImage} productName= {this.props.productName} images={this.props.images} changeActiveModal={this.changeActiveModal}/>
        </ModalStyle>
      </>, document.getElementById('portal'))
    } else {
      return(null)
    }

  }
}


export default Modal;