import React from 'react'
import Navbar from '../components/Navbar';
import Pro from '../components/pro-hero';
import Footer from '../components/footer';
import WorkCard from '../components/workcard';

const project = () => {
  return (
    <div>
      <Navbar/>
      <Pro heading="Projects" text="Some of my recent works"/>
      <div className='container'>
      <div className='row  row-cols-lg-3 row-cols-sm-2'>
      <WorkCard title="AquaMart" tag="Water Delivery Application" info="It is a cutting-edge MERN stack web application where you can order pure drinking water to your doorstep. AquaMart seamlessly connects MongoDB and MySQL backend, offering user friendly platform for customers and admins.  "/>
      <WorkCard title="ChatFlow"tag="ChatFlow-GPT" info="ChatFlow is an streamlined web application  that harness the capabilities of Generative Pre-trained transformer(GPT) technology-Powered by Node.js, ChatFlow provides user-friendlly platform for real-time conversations. "/>
      <WorkCard title="Planner Pro" tag="Event Management Application" info="The objective of this application is to develop a system that effectively manages all data for organizing an successful event. Customer can track each and every step of the preprations. Technologies used here are Java,XML and Firebase."/>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default project