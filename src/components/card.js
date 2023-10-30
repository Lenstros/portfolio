// src/components/Card.js
import "./card.css"
import React from 'react';
import intro from "../img/pexels-picjumbocom-196658.jpg"

const Card = () => {
  return ( 
    <div className="work-container">
        <div className="project=container">
        <div>
            <div class="card bg-black">
            <div class="card-image">
            <img className="intro-img" src={intro} alt="intro"></img>

            <span class="card-title text-white">AquaMart</span>
            </div>
            <div class="card-content">
            <h1>AquaMart</h1>
            <p>water delivery application</p>
            </div>
            <div class="card-action">
            </div>
            
    </div>
  </div>
 
  </div>

  </div>
    
  );
};

export default Card;
