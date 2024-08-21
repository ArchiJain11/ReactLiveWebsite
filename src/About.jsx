import React from 'react'
import { NavLink } from 'react-router-dom';
import web from "../../Image/hero-img.png";
import Common from './Common';

function About() {
  return (
    <>
      <Common name={"Welcome to About Page"} imgsrc={web} visit="/contact" btn={"Contact Now"}/>
    </>
  )
}

export default About
