import React, { useState } from 'react'

function Contact() {

  const [data,setData] = useState({
      fullName : "",
      phone : "",
      email:"",
      msg:""
  })
  const [ans , setAns] =  useState();

  const formSubmit = (e) =>{
    e.preventDefault();
    alert(
      `My name is ${data.fullName}. My mobile number is ${data.phone} and email is ${data.email}, Here is what I want to say ${data.msg}`
    )
  }
  const InputField=(e) =>{
      console.log(e.target.value);
      const value = e.target.value;
      const name = e.target.name;

      setData((oldVal)=>{
        return {
          ...oldVal,
          [name] : value
        }
      })

  } 

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">
          Contact US
        </h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto mb-5">
            <form onSubmit={formSubmit}>

              <div className="mb-3">
                <label
                  for="exampleFormControlInput1"
                  className="form-label">
                  FullName
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your name" 
                  value={data.fullName}
                  name="fullName"
                  onChange={InputField}
                  />
              </div>

              <div className="mb-3">
                <label
                  for="exampleFormControlInput1"
                  className="form-label">
                  Phone
                </label>
                <input
                  required
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Mobile Number" 
                  name="phone"
                  value={data.phone}
                  onChange={InputField}
                  />
              </div>

              <div className="mb-3">
                <label
                  for="exampleFormControlInput1"
                  className="form-label">
                  Email address
                </label>
                <input
                  required
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com" 
                  name="email"
                  value={data.email}
                  onChange={InputField}
                  />
              </div>

              <div className="mb-3">
                <label
                  for="exampleFormControlTextarea1"
                  class="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputField}
                  ></textarea>
              </div>

              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
