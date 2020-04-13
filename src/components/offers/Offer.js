import React, { Component } from 'react';
import Carousel from 'react-image-carousel';
import style from'./style.css'
import {withRouter} from 'react-router-dom'

class Offer extends Component{
    
    render() { 

       const img=this.props.ourdata.img
       
        return (
            <div className="container">
                <div className="card">
    <p>offer </p>
   <div className="card-body">
   <h1 className="card-text">{this.props.ourdata.name}</h1>
   <div className="my-carousel">
            <Carousel images={img} 
                        thumb={true}
                        loop={true}
                        autoplay={5000}/></div>
   
   <hr/>
   <div className="card-body">
   <p className="card-text"> offer price:<span className="line">{this.props.ourdata.price}</span> Sar</p>
   <div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
  
  <label className="form-check-label" for="exampleRadios1">
  
  Now {this.props.ourdata.price-this.props.ourdata.discount} Sar
  </label>
  
</div>
     
     <button className="btn btn-secondary">Buy </button>
   </div>
    </div>
    </div>
  </div>
        
         );
    }
}
 
export default withRouter(Offer);