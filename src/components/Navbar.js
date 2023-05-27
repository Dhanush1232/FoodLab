import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';

import img100 from '../images/food_logo.png';

const Navbar = () => {

 


  const RenderMenu=()=>{
{
      return(
        <>
          <li className="nav-item">
          <NavLink className="nav-link" to=""><span id="head">Home</span></NavLink>
        </li>
        
          <li className="nav-item">
          <NavLink className="nav-link" to=""><span id="head">Services</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to=""><span id="head">Gallery</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to=""><span id="head">Co-traveller</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to=""><span id="head">FAQs</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to=""><span id="head">Contact Us</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to=""><span id="head">Register</span></NavLink>
        </li>
        </>
      )
    }

  }
  return(
   <>
   <nav className="navbar navbar-expand-lg navbar-light" id="abc">
   <img id="food_logo" src={img100}/>
    <NavLink className="navbar-brand" id="nav-head" to="#"><strong>Food Lab</strong></NavLink>
    <div className='nav'>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    </div>
    <div className='nav'>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <RenderMenu />
      </ul>
    </div>
    </div>
</nav>
   </>
  )
}

export default Navbar