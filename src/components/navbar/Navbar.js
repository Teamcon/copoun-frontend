import React, { Component } from 'react';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
    <a class="navbar-brand" href="#"><span style={{fontSize:"30px",color:"blue"}}>All</span></a>
        <a href="#">
          <span class="fa fa-car" style={{fontSize:"30px",color:"purble", margin:"10px 50px"}}></span>
        </a>
        <a href="#">
          <span class="fa fa-envira" style={{fontSize:"30px",color:"purble", margin:"10px 50px"}}></span>
        </a>

        <a href="#">
          <span class="fa fa-medkit" style={{fontSize:"30px",color:"purble", margin:"10px 50px"}}></span>
        </a>

        <a href="#">
          <span class="	fa fa-plane" style={{fontSize:"30px",color:"purble", margin:"10px 50px"}}></span>
        </a>

        <a href="#">
          <span class="material-icons" style={{fontSize:"30px",color:"purble", margin:"10px 50px"}}>brush</span>
        </a>

        <a href="#">
          <span class="material-icons" style={{fontSize:"30px",color:"purble", margin:"10px 50px"}}>hotel</span>
        </a>

        <a href="#">
          <span class="material-icons" style={{fontSize:"30px",color:"purble", margin:"10px 50px"}}>local_cafe</span>
        </a>

        <a href="#">
          <span class="material-icons" style={{fontSize:"30px",color:"purble", margin:"10px 50px"}}>local_dining</span>
        </a>
    </div>
  </div>
</nav>
         );
    }
}
 
export default Navbar;