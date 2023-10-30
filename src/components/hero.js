import "./hero.css"
import React from 'react'
import intro from "../img/pexels-sanni-sahil-2565919.jpg"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={intro} alt="intro"></img>
        </div>
        <div className="content">
            <p>Hi, My Name is Shiny</p>
            <h1>Web Developer</h1>
            <div>
                <Link to="/project" className="my-button"> projects</Link>
                <Link to="/contact" className="button">contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Hero