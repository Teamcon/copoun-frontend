import React from 'react';
import { Route } from 'react-router-dom'
import {connect} from "react-redux"
import Offers from './components/offers/Offers'
import data from './components/data/data'
import './App.css';
import './components/offers/style.css'
import Search from './components/offers/Search'

class App extends React.Component {
  componentDidMount(){
    // here we will fitch data from API , or our backend 
    const arrOffers = ["offers1:50% sale","offers2:30% sale","offers3: Two for one!"];//now it just an array until we create the API
    this.props.setCopons(arrOffers)//here we are passing the array, to the setOffers function
  }
  render(){
    return (
      <div className="App">
      <Route exact path='/' render={() => (
        <div>
          {data.data.map(offer => (
            <Offers
              key={offer.id}
              name={offer.name}
              price={offer.price}
              img={offer.img}
              id={offer.id}
              discount={offer.discount}
            />
          ))}
        </div>
      )}
      />
      </div>
    );
  }
}
const getState = state =>{// here we are getting the data from our redux and save it in the variable (offerss)
  return{
    offerss:state.offerss //to get the data we just write ( this.props.offerss )
  }
}
const setState = dispatch =>{// here we are setting the data that we fitched from the API , and store it in the state
  return{
    setCopons:(arrOffers) =>{
      return dispatch({
        type:"SET_COBONS", // this must be the same as in our case in reducer.js file, that we want it to go to this case
        value: arrOffers  // here we are passing the value we want to store in the variable in the reducer.js file
      })
    }
  }
}
export default connect(getState,setState)(App);//here we are using connect so that we can use the get and set function , its the way that redux works ^_^ 
