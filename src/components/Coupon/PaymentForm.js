import React, { Component, Fragment } from 'react';
//import { Link } from 'react-router-dom';
class PaymentForm extends Component {
    state = {  }

    handleSubmit=()=>{

    }
    
     render(){
        return ( 
           <Fragment>
            <div className="body2">
            <form onSubmit={this.handleSubmit}>
        {this.props.data.name}
  <div className="form-group">
    <label htmlFor="formGroupExampleInput" className='bk'>Payment Method </label>
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input"/>
  </div>
  <div className="form-group">
    <label htmlFor="formGroupExampleInput2">Card Holder</label>
    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
    
  </div>
  <button type="submit" className="btn">Submit</button>
  
   </form>
   <div className="custom-control custom-switch">
  <input type="checkbox" className="custom-control-input" id="customSwitch1"/>
  <label className="custom-control-label" htmlFor="customSwitch1">Save Your Card</label>
</div>
   </div>
       </Fragment>);
    }
}
 
export default PaymentForm;