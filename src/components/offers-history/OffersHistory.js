import React, { Component } from 'react';
import {connect} from "react-redux"
import './style.css'
import {withRouter} from 'react-router-dom'


class OffersHistory extends Component {
    state = {  }
    render() { 
        return ( 

          // this.props.OffersHistory.map(offer =>(
            //sind data to ticket component
            <React.Fragment>
              <div class="col-md-10 order-md-1">
              <h2 class="mb-3">Offers History</h2>
          <hr class="mb-4"/>
          <table>
                <tr>
                  <th>Offer</th>
                  <th>Store</th>
                  <th>Date</th>
                </tr>
                <tr>
                  <td>50% on all products</td>
                  <td>BR Store</td>
                  <td>12/08/2019</td>
                </tr>
              </table>
              </div>
             
            </React.Fragment>
          // ))

         );
    }
}
 
const getState = state =>{// here we are getting the data from our redux and save it in the variable (offerss)
    return{
      offersHistory:state.offersHistory
    }
  }
  const setState = dispatch =>{// here we are setting the data that we fitched from the API , and store it in the state
    return{
      setCopons:(arrOffersHistory) =>{
        return dispatch({
          type:"SET_OFFERS_HISTORY", // this must be the same as in our case in reducer.js file, that we want it to go to this case
          value: arrOffersHistory  // here we are passing the value we want to store in the variable in the reducer.js file
        })
      }
    }
  }
export default connect(getState,setState)(withRouter(OffersHistory));