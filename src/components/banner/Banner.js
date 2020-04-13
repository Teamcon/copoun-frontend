import React, { Component } from 'react';
import {Carousel, CarouselItem} from 'react-bootstrap'
import CarouselCaption from 'react-bootstrap/CarouselCaption';
import Cards from './Cards'
import './style.css'



class Banner extends React.Component {
	handleClick(type) { };
  render() {
    return (
      <div className="cards-slider">
        <div className="slider-btns">
          {/* <button className="slider-btn btn-l" onClick={() => this.handleClick('prev')}>&lt;</button>
          <button className="slider-btn btn-r" onClick={() => this.handleClick('next')}>&gt;</button> */}
        </div >
        <Cards/>
      </div>
    )
  }
}
 
export default Banner;