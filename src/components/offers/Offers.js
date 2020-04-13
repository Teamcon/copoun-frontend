import React, { Component } from 'react';
import style from './style.css'
import { Link } from 'react-router-dom'
import {withRouter} from 'react-router-dom'

class Offers extends Component {
    
    render() { 
        return ( 
         
          <div className="mycontainer" key={this.props.id}>
          <Link to={`/${this.props.id}`}>
    
       <div className="card"> 
      <div className="card-body">
      <h1 className="card-text">{this.props.name}</h1>
      </div>
      <img src={this.props.img[0]}/>
      <hr/>
      <div className="card-body">
      <p className="card-text"> offer price:<span className="line">{this.props.price}</span> Sar</p>
        <p>Now {this.props.price-this.props.discount} Sar</p>
      </div>
       </div></Link>
       </div>
      
    
       
         );
    }
}
 
export default withRouter (Offers);