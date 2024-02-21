import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './App.css'
import { Link, useParams } from 'react-router-dom'

function View() {
    const [datas,setdata]=useState([])
    const [refresh,setrefresh]=useState(false)

  useEffect(()=>{
    let fetchData=async()=>{
        let response=await axios.get('http://localhost:4000/find')
        // console.log(response.data);
        setdata(response.data)
       
     

    }
    fetchData()
},[refresh])
let deleteData=(id)=>{
  let response=axios.delete(`http://localhost:4000/delete/${id}`)
  setrefresh(!refresh)
}



console.log(datas);
  return (
    <div className='main-view'>
  {
    datas.map((item)=>(
    <div className='view'>

     <h1>{item.username}</h1>
     <h1>{item.passsword}</h1>
     <h1>{item.Email}</h1>
     <h1>{item.phoneno}</h1>
     <Link to={`/update/${item._id}`}><button>update</button></Link>
     <button onClick={()=>{deleteData(item._id)}} >delete</button>
    </div>
    ))
  }
</div>
  )
}

export default View