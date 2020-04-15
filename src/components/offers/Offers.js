import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom'
import Offer from './Offer'
import { Route } from 'react-router-dom'


class Offers extends Component {
  
    render() { 
        
      
        return ( 
         
       <div className="mycontainer" key={this.props.offer.id}>
         
        
       
      <div className="card-body">
      <div className="pic">
      <img src={this.props.offer.img[0]} alt=""/>
      </div>
      <div className="card-text">
      <Link to={`/${this.props.offer.id}`}><p>{this.props.offer.name}</p></Link>
      </div>
      <div>
      <p> offer price:<span className="line">{this.props.offer.price}</span> Sar</p>
        <p>Now {this.props.offer.price-this.props.offer.discount} Sar</p></div>
      
    </div><br/>
    </div>
      
         );
    }
}
 
export default withRouter (Offers);