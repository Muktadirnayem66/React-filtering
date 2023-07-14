import React, { useState } from 'react';

const initialInputState={
    name:"",
    email:"",
    group:""
  }
  
  const ContactForm = ({getContact})=>{
  
    const [values, setValues] =useState({...initialInputState})
    const {name, email, group}=values
  
    
    const handleChange=(e)=>{
      setValues({
        ...values,
        [e.target.name]:e.target.value
      })
    }
  
    const handleSubmit =(e)=>{
      e.preventDefault()
      getContact(values)
      setValues(initialInputState)
    }
  
  return (
    <>
    
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Enter your Name:</label>
        <input type="text" name="name" value={name} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="email">Enter your Email:</label>
        <input type="text" name="email" value={email} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="group">Option</label>
        <select name="group" id="group" value={group} onChange={handleChange} >
          <option value="">Select Group</option>
          <option value="home">Home</option>
          <option value="office">Office</option>
        </select>
      </div>
      <br />
      <div>
      <input type="submit" value={"Create a new contact"} />
      </div>
  
    </form>
    </>
  )
  
  }
  
  export default ContactForm