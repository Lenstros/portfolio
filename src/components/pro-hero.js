import "./pro-hero.css"
import React, { Component } from 'react'
import intro from "../img/pexels-luna-lovegood-4087176.jpg"

class Pro extends Component 
{
    render(){
  return (
    <div className="hero">
    <div className="mask">
        <img className="intro-img" src={intro} alt="intro"></img>
    </div>
    <div className="content">
        <h1>{this.props.heading}</h1>
        <p>{this.props.text}</p>
    </div>
    
</div>
  )
}}

export default Pro