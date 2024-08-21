import React from 'react'
import web from "../../Image/f482e233b04c1e9282baf8491bc834db.jpg"
import Card from './Card'
import Sdata from './Sdata'


function Service() {
  return (
    <>
      <div className="my-5">
        <h1 className='text-center'>Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {
                Sdata.map((service ,id)=>{
                    return <Card key={id}
                    imgsrc={service.imgsrc}
                    title = {service.title}
                    />
                })
              }              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Service
