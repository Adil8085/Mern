import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  const [inputData,setdata]=useState('')
  let handlechange=(event)=>{
    setdata({...inputData,[event.target.name]:event.target.value})
    console.log(inputData);
  }
  let submitform=async (event)=>{
    event.preventDefault()
    console.log(inputData,'aftersubmit');

      let response=await axios.post('http://localhost:4000/add',inputData)

             console.log('response',response);
             
 
  }
  
  
  return (
    <div className="main">
   
      <h2>Sign Up</h2>
    <form onSubmit={submitform}>
      <div className="in">
    <input type="text"  onChange={handlechange} name='username' placeholder='First Name' /><br></br>
    <input type="text" onChange={handlechange} name='passsword' placeholder='Password'/><br></br>
    <input type="text"  onChange={handlechange} name='Email' placeholder='Email' /><br></br>
    <input type="text" onChange={handlechange} name='phonno'placeholder='Phone No' /><br></br>
    
    </div>
    <div className="sub">
    <button>Sign Up</button>
    </div>
    </form>
  <div className="log">
    Already a member?
    <Link to={'/'}>Log in</Link>
    </div>
    
    </div>
  )
}

export default App