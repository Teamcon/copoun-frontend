import React, { Component } from 'react';
import {connect} from "react-redux"







class Navbar extends Component {
    componentDidMount(){
      // here we will fitch data from API , or our backend 
      this.props.setFilterCopons("all")//here we are passing the array, to the setOffers function
    }

    render() { 
     
      const filter = (e) => {
        let filterString = e.target.id
        this.props.setFilterCopons(filterString)
        // console.log(this.target)
      }
   
        return ( 
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav" style={{alignItems:"flex-end"}}>
    <a class="navbar-brand" href="#"><span style={{fontSize:"14px",color:"rgb(220,20,60)",fontWeight:"800"}} id="all" onClick={filter.bind(this)}>All</span></a>
        <a href="#">
          <span class="fa fa-car" style={{fontSize:"30px",color:"rgb(220,20,60)", margin:"10px 50px"}} id="car-services" onClick={filter.bind(this)}></span><span style={{fontSize:"14px",color:"rgb(220,20,60)",wordWrap:"normal"}}>cars</span>
        </a>
        <a href="#">
          <span class="fa fa-envira" style={{fontSize:"30px",color:"rgb(220,20,60)", margin:"10px 50px"}} id="heath-and-beauty" onClick={filter.bind(this)}></span><span style={{fontSize:"14px",color:"rgb(220,20,60)",wordWrap:"normal"}} >heath&beauty</span>
        </a>

        <a href="#">
          <span class="fa fa-medkit" style={{fontSize:"30px",color:"rgb(220,20,60)", margin:"10px 50px"}} id="medical" onClick={filter.bind(this)}></span><span style={{fontSize:"14px",color:"rgb(220,20,60)"}} >medical</span>
        </a>

        <a href="#">
          <span class="	fa fa-plane" style={{fontSize:"30px",color:"rgb(220,20,60)", margin:"10px 50px"}} id="tourism" onClick={filter.bind(this)}></span><span style={{fontSize:"14px",color:"rgb(220,20,60)"}} >tourism</span>
        </a>

        <a href="#">
          <span class="material-icons" style={{fontSize:"30px",color:"rgb(220,20,60)", margin:"10px 50px"}} id="school-art-supplies" onClick={filter.bind(this)}>brush</span><span style={{fontSize:"14px",color:"rgb(220,20,60)",wordWrap:"normal"}} >school&art</span>
        </a>

        <a href="#">
          <span class="material-icons" style={{fontSize:"30px",color:"rgb(220,20,60)", margin:"10px 50px"}} id="hotels" onClick={filter.bind(this)}>hotel</span><span style={{fontSize:"14px",color:"rgb(220,20,60)"}} >hotels</span>
        </a>

        <a href="#">
          <span class="material-icons" style={{fontSize:"30px",color:"rgb(220,20,60)", margin:"10px 50px"}} id="cafes" onClick={filter.bind(this)}>local_cafe</span><span style={{fontSize:"14px",color:"rgb(220,20,60)"}} >cafes</span>
        </a>

        <a href="#">
          <span class="material-icons" style={{fontSize:"30px",color:"rgb(220,20,60)", margin:"10px 50px"}} id="restaurant" onClick={filter.bind(this)}>local_dining</span><span style={{fontSize:"14px",color:"rgb(220,20,60)"}} >restaurants</span>
        </a>
    </div>
  </div>
</nav>
         );
    }
}
 

const getState = state =>{// here we are getting the data from our redux and save it in the variable (offerss)
  return{
    filter:state.filter //to get the data we just write ( this.props.offerss )
  }
}
const setState = dispatch =>{// here we are setting the data that we fitched from the API , and store it in the state
  return{
    setFilterCopons:(filterString) =>{
      return dispatch({
        type:"SET_FILTER_OFFERS", // this must be the same as in our case in reducer.js file, that we want it to go to this case
        value: filterString  // here we are passing the value we want to store in the variable in the reducer.js file
      })
    }
  }
}

  
export default connect(getState,setState)(Navbar);