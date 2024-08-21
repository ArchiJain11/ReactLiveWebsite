import React from 'react'
import { NavLink } from 'react-router-dom';
import web from "../../Image/img2.svg";
import Common from './Common';
// const img = "https://oswaldlabs.com/images/illustrations/accelerator.svg";


function Home() {
  return (
    <>
      <Common 
      name={"Grow Your Business With "} 
      imgsrc={web} 
      visit="/service" 
      btn={"Get Started"}/>

    </>
  )
}

export default Home
