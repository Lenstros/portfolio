// For example, in your navigation bar component
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";
import {FaBars,FaTimes} from "react-icons/fa"


function Navbar() {

  const [click,setClick]=useState(false);
  const handlClick=() =>setClick(!click);
  return (
    <div className='header'>
      
         <Link to="/"><h1>portfolio</h1> </Link>
         <ul className={click ? "nav-menu active":"nav-menu"}>
         <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/project">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className='hamburger' onClick={handlClick}>
      {click ? (<FaTimes size ={20} style={{color:"#fff"}}/>): (<FaBars size ={20} style={{color:"#fff"}}/>) }
      

       

       </div>
      </div>
  );
}

export default Navbar;