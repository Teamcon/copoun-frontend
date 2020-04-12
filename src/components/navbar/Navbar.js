import React, { Component } from 'react';
import {connect} from "react-redux"
import {Nav,Navbar} from 'react-bootstrap'






class Navbarc extends Component {
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

        //   <Dropdown size="lg" drop="right">
        //   <Dropdown.Toggle variant="danger" id="dropdown-basic">
        //     Dropdown Button
        //   </Dropdown.Toggle>
        
        //   <Dropdown.Menu>
        //     <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        //     <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        //     <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        //   </Dropdown.Menu>
        // </Dropdown>



            <Navbar bg="danger" variant="light" sticky="top">
  
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav" style={{alignItems:"flex-end"}}>
    <a class="navbar-brand" href="#"><span style={{fontSize:"14px",color:"rgb(255,255,255)",fontWeight:"800"}} id="all" onClick={filter.bind(this)}>All</span></a>
        <a href="#">
          <span class="fa fa-car" style={{fontSize:"30px",color:"rgb(255,255,255)", margin:"10px 50px"}} id="car-services" onClick={filter.bind(this)}></span><span style={{fontSize:"14px",color:"rgb(255,255,255)",wordWrap:"normal"}}>cars</span>
        </a>
        <a href="#">
          <span class="fa fa-envira" style={{fontSize:"30px",color:"rgb(255,255,255)", margin:"10px 50px"}} id="heath-and-beauty" onClick={filter.bind(this)}></span><span style={{fontSize:"14px",color:"rgb(255,255,255)",wordWrap:"normal"}} >heath&beauty</span>
        </a>

        <a href="#">
          <span class="fa fa-medkit" style={{fontSize:"30px",color:"rgb(255,255,255)", margin:"10px 50px"}} id="medical" onClick={filter.bind(this)}></span><span style={{fontSize:"14px",color:"rgb(255,255,255)"}} >medical</span>
        </a>

        <a href="#">
          <span class="	fa fa-plane" style={{fontSize:"30px",color:"rgb(255,255,255)", margin:"10px 50px"}} id="tourism" onClick={filter.bind(this)}></span><span style={{fontSize:"14px",color:"rgb(255,255,255)"}} >tourism</span>
        </a>

        <a href="#">
          <span class="material-icons" style={{fontSize:"30px",color:"rgb(255,255,255)", margin:"10px 50px"}} id="school-art-supplies" onClick={filter.bind(this)}>brush</span><span style={{fontSize:"14px",color:"rgb(255,255,255)",wordWrap:"normal"}} >school&art</span>
        </a>

        <a href="#">
          <span class="material-icons" style={{fontSize:"30px",color:"rgb(255,255,255)", margin:"10px 50px"}} id="hotels" onClick={filter.bind(this)}>hotel</span><span style={{fontSize:"14px",color:"rgb(255,255,255)"}} >hotels</span>
        </a>

        <a href="#">
          <span class="material-icons" style={{fontSize:"30px",color:"rgb(255,255,255)", margin:"10px 50px"}} id="cafes" onClick={filter.bind(this)}>local_cafe</span><span style={{fontSize:"14px",color:"rgb(255,255,255)"}} >cafes</span>
        </a>

        <a href="#">
          <span class="material-icons" style={{fontSize:"30px",color:"rgb(255,255,255)", margin:"10px 50px"}} id="restaurant" onClick={filter.bind(this)}>local_dining</span><span style={{fontSize:"14px",color:"rgb(255,255,255)"}} >restaurants</span>
        </a>
    </div>
  </div>
</Navbar>
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

  
export default connect(getState,setState)(Navbarc);