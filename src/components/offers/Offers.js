import React, { Component } from 'react';
import style from './style.css'


class Offers extends Component {
    
    render() { 
        return ( 
       <div className="container">
           <div className="row">
           <div className="col">
       <div className="card">
       
      <div className="card-body">
      <h1 className="card-text">{this.props.name}</h1>
      </div>
      <img src={this.props.img}/>
      <hr/>
      <div className="card-body">
      <p className="card-text"> offer price:<span className="line">{this.props.price}</span> Sar</p>
        <p>Now {this.props.price-this.props.discount} Sar</p>
      </div>
       </div>
       </div>
       </div>
       </div>
         );
    }
}
 
export default Offers;