import React, { Component} from 'react';
import './coupon.css'
import PaymentForm from'../Coupon/PaymentForm'
//import { Link } from 'react-router-dom';
class Coupon extends Component {
    

    render() { 
         
       
        
        
        return ( 
            <div  className="App main">
           
                <br/><br/>
                <div className="card card1" >
                <div className="div1"><h2>Your Cart</h2></div>
             <div className="card-body body1">
             <div className="pic">
              <img src={this.props.ourdata.img[0]} alt=""/>
                  </div>
                 <div className="title"><p>{this.props.ourdata.name}</p></div>
        
            <div><p>
            <span className="line">{this.props.ourdata.price}</span>{this.props.ourdata.price-this.props.ourdata.discount} SAR</p>
            </div>
        
        
            </div>
            
            
        </div>
            <div className="card2">
                <PaymentForm data={this.props.ourdata}/>
            
                </div>
            </div>
         );
    }
}
 
export default Coupon;