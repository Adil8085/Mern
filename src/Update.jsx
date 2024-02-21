import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Update = () => {
    const {id}=useParams()
    const [inputData,setdata]=useState('')
    const[view,setView]=useState('')

    useEffect(()=>{
        let fetchData=async()=>{
            let response=await axios.get(`http://localhost:4000/findById/${id}`)
            console.log(response.data);
            setView(response.data)
           
         
    
        }
        fetchData()
    },[])

    let handlechange=(event)=>{
        setdata({...inputData,[event.target.name]:event.target.value})
        console.log(inputData);
      }
      let submitform=async (event)=>{
        event.preventDefault()
        console.log(inputData,'aftersubmit');
    
          let response=await axios.put(`http://localhost:4000/update/${id}`,inputData)
    
                 console.log('response',response);
                 
     
      }
      
  return (
    <div>
        <form onSubmit={submitform}>
      <div className="in">
    <input type="text"  onChange={handlechange} name='username' placeholder={view.username} /><br></br>
    <input type="text" onChange={handlechange} name='passsword' placeholder={view.passsword}/><br></br>
    <input type="text"  onChange={handlechange} name='Email' placeholder={view.Email} /><br></br>
    <input type="text" onChange={handlechange} name='phonno'placeholder={view.phonno} /><br></br>
    
    </div>
    <div className="sub">
    <button>update</button>
    </div>
    </form>
    </div>
  )
}
