import React from 'react'
import Home from './Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import Page404 from './Page404'
import "./App.css"

// bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Navbar from './Navbar'
import Footer from './Footer'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/*" element={<Page404/>}/>

       </Routes>
       <Footer/>
       </BrowserRouter>
    </>
  )
}

export default App
