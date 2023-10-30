// src/components/Card.js
import "./card.css"
import React from 'react';
import { Component } from 'react'
import intro from "../img/pexels-picjumbocom-196658.jpg"

class WorkCard extends Component {
    render(){
  return ( 
    <div className="work-container">
        <div className="project=container">
        <div>
            <div class="card bg-black">
            <div class="card-image">
            </div>
            <div class="card-content">
             <h1>{this.props.title}</h1>
             <h2>{this.props.tag}</h2>
             <p>{this.props.info}</p>
            </div>
            <div class="card-action">
            </div>
            
    </div>
  </div>
 
  </div>

  </div>
    
  );
};}

export default WorkCard;
