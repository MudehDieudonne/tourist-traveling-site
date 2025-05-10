import React from 'react';
// import styled from 'styled-components'
import './Form.css'

const Form = () => {
  return (
    <>
      <form className="form">
        <p className="form-title">Contact Us </p>
        <p className="message">Signup now and get full access to our app. </p>
        <div className="flex">
          <label>
          <span>Firstname</span>
            <input className="first-name" type="text" placeholder required />
            
          </label>
          <label>
          <span>Lastname</span>
            <input className="last-name" type="text" placeholder required />
            
          </label>
        </div>  
        <label>
        Email
          <input className="input" type="email" placeholder required />
          <span>Email</span>
        </label> 
        <label>
        Password
          <input className="input" type="password" placeholder required />
          <span>Password</span>
        </label>
        <label for="textarea">Massage</label>
        <textarea name="textarea" id="textarea" placeholder='write a massage' rows="10" cols="50" required=""> </textarea>
        <button className="submit">Submit</button>
      </form>
    </>
  )
}

export default Form;
