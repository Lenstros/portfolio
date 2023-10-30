import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Pro from '../components/pro-hero';
import Form from '../components/form';
const contact = () => {
  return (
    <div>
      <Navbar/>
      <Pro heading="Contact Me" text="Let's Connect"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default contact