import React from 'react';
import { Route } from 'react-router-dom'
import {connect} from "react-redux"
import {Link} from 'react-router-dom'
import Offers from './components/offers/Offers'
import data from './components/data/data'
import './App.css';
import './components/offers/style.css'
import Offer from './components/offers/Offer'
// import User_account from './components/user_account/User_account'
import {withRouter} from 'react-router-dom'
// import { useHistory } from 'react-router-dom';
// import { Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row, NavLink  } from 'reactstrap';
import Banner from './components/banner/Banner'
// import Slider from './components/banner/Cards'
import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'
import MyAccount from './components/user_account/MyAccount'
import Coupon from './components/Coupon/Coupon'
import AllOffers from './components/offers/AllOffers'

class App extends React.Component {
  componentDidMount(){
    // here we will fitch data from API , or our backend 
    const arrOffers = ["offers1:50% sale","offers2:30% sale","offers3: Two for one!"];//now it just an array until we create the API
    this.props.setCopons(arrOffers)//here we are passing the array, to the setOffers function
  }
  render(){

    return (
      <div className="App">  
    {/* <div>
      <Link to='/useraccount'>
      <button type="button" className="btn btn-info">user account</button>
      </Link>
      </div> */}
      {/* <Route exact path='/' render ={()=>(        
        <User_account/>
        )}
      /> */}
         <Route  path='/' render ={()=>(        
        <Header />
        )}
      />  
       <Route exact path='/' render ={()=>(        
        <Navbar/>
        )}
      />   
        {/* <Route exact path='/' render ={()=>(        
        <Banner />
        )}
      />         */}
     
           {/* <Route exact path='/' render={() => (
        <div>
          {data.data.map(offer =>
         offer.category == this.props.filter || this.props.filter == "all" ?
        //  console.log(this.props.filter + " ||" + offer.category)
          (
            <Offers
              key={offer.id}
              name={offer.name}
              price={offer.price}
              img={offer.img}
              id={offer.id}
              discount={offer.discount}
            />
          ):console.log("no results"))}
        </div>
           )}
          />  */}

           <Route   path='/my-account' render ={()=>(        
        <MyAccount/>
        )}
      /> 
       
                        
                         
       <Route exact path='/:id' render={(props) => {
        const id = props.match.params.id
      let ourdata = data.data.find(data => data.id === id)
       return (
       <Offer
       ourdata={data.data[id]}
       />
      )}}/>

      <Route exact path='/' render={() => (
      <div className="offer">
        <AllOffers
            alldata={data}/>
         
       </div>)}/>
       <Route exact path='/:id/coupon' render={(props)=>{
       const id = props.match.params.id
      return(
      <Coupon ourdata={data.data[id]}/>)}}/>
      
      </div> 
    );
  }
}
const getState = state =>{// here we are getting the data from our redux and save it in the variable (offerss)
  return{
    offerss:state.offerss, //to get the data we just write ( this.props.offerss )
    filter:state.filter
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
export default connect(getState,setState)(withRouter(App));//here we are using connect so that we can use the get and set function , its the way that redux works ^_^ 
