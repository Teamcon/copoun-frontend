import React, { Component } from 'react';
import Carousel from 'react-image-carousel';
import {Link} from 'react-router-dom'
import './style.css'

class Offer extends Component{
  
    
  render() { 

       
    const img=this.props.ourdata.img
       
        return (
            <div className="container">
        <div>        <div className="mycard">
    <p>offer </p>
    </div>
   <div className="card-body">
   <h1 className="card-text">{this.props.ourdata.name}</h1>
   <div className="my-carousel">
            <Carousel images={img} 
                        thumb={false}
                        loop={true}
                        autoplay={5000}/></div>
   
   <hr/>
   <div className="card-body mycard">
   <p className="card-text"> offer price:<span className="line">{this.props.ourdata.price}</span> Sar</p>
   <div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
  
  <label className="form-check-label" htmlFor="exampleRadios1">
  Now {this.props.ourdata.price-this.props.ourdata.discount} Sar
  </label>
  
</div>
     
     <Link to ={`/${this.props.ourdata.id}/coupon`}>buy</Link>
   </div>
    </div>
    </div>
  </div>
        
         );
    }
}
 
export default Offer;