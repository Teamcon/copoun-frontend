import React, { Component } from 'react';
import connect from 'redux'



class OffersHistory extends Component {
    state = {  }
    render() { 
        return ( 

          this.props.OffersHistory.map(offer =>(
            //sind data to ticket component
            <h1>Offers History</h1>
          ))

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
export default connect(getState,setState) (OffersHistory);