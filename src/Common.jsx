import React from 'react'
import { NavLink } from 'react-router-dom';
import web from "../../Image/img2.svg";

function Common(props) {
  return (
    <>
      <section id='header' className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                  {/* heading */}
                  <h1>{props.name} <strong className="brand-name">ARCHI'es</strong></h1>
                  <h2 className='my-3'>We are the team of talented developer making websites</h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn-get-started">
                      {props.btn}
                    </NavLink>
                  </div>
                </div>

                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                  <img src={props.imgsrc} className="img-fluid animated" alt='home img' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Common

// ===============================================================================
// home ka code upar about mein bhi yahi lag raha tha toh props ka use kar liya ha
// ===============================================================================

{/* <section id='header' className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                  <h1>Grow Your Business With <strong className="brand-name">ARCHI'es</strong></h1>
                  <h2 className='my-3'>We are the team of talented developer making websites</h2>
                  <div className="mt-3">
                    <NavLink to="/service" className="btn-get-started">
                      Get Started
                    </NavLink>
                  </div>
                </div>

                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                  <img src={web} className="img-fluid animated" alt='home img' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}