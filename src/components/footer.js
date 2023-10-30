import "./footer.css"
import React from 'react';
import {FaFacebook, FaHome,FaInstagram,FaLinkedin,FaMailBulk,FaPhone} from "react-icons/fa"



const Footer = () => {
    
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome  size ={20} style={{color:"#fff" ,marginright:"2rem"}}/>
                    <div>
                        <p>134 8th main Hongsandra</p>
                        <p>BANGLORE</p>
                    </div>
                </div>

                <div className="phone">
                    <FaPhone  size ={20} style={{color:"#fff" ,marginright:"2rem"}}/>
                    <div>
                        <p>7899945474</p>
                    </div>
                </div>
          
               
           </div>
         </div>
         <div className="email">
                    <FaMailBulk  size ={20} style={{color:"#fff" ,marginright:"2rem"}}/>
                    <div>
                        <p>shinyponnachan99@gmail.com</p>
                        <FaFacebook  size ={20} style={{color:"#fff" ,marginright:"2rem"}}/>
                        <FaLinkedin  size ={20} style={{color:"#fff" ,marginright:"2rem"}}/>
                       <FaInstagram size ={20} style={{color:"#fff" ,marginright:"2rem"}}/>

                    </div>
                </div>
    </div>
  )
}

export default Footer