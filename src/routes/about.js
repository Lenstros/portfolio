import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Pro from '../components/pro-hero';
import WorkCard from '../components/workcard';


const about = () => {
  return (
    <div>
        <Navbar/>
        <Pro heading="About" text="Enthusiastic and motivated Graduate"/>

        <div className='container'>
        <WorkCard title="Shiny Ponnachan" info="I am from Coorg, I have completed my BCA from Christ College Mysuru in the year 2022 and I joined KodNest in November 2022 and completed my certification and internship in Java Full-Stack development. Later I joined Parallelgram in April 2023 as an intern Java Full-Stack developer."/>
        
        </div>
        <Footer/>
    </div>
  )
}

export default about