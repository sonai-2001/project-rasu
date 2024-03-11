
import React from "react"
import axios from "../utilities/Axios"
import {useState} from "react"
import {useEffect} from "react"
function Users(){

  useEffect(()=>{
    console.log("created")
    getUsers()
  
    return ()=>{
      console.log("deleted")
    }
  },[])
  
const[us,setUs]=useState([])
const getUsers=()=>{
  axios.get('users')
  .then((u)=>{
       setUs(u.data)
  })
  .catch((err)=>{
    console.log(err)
  })
}

  
  return (
    <div className="mt-5 flex flex-col items-center justify-center">
      {/* <button onClick={getUsers} className="bg-red-200 hover:bg-red-500 p-2 rounded">get the users</button> */}
      <ul>
        {us.map((item,idx)=>{
          return <li  className="bg-red-200 mt-5 rounded-md  p-2 " key={idx}>{item.username}</li>
        })}
      </ul>
    </div>
  )
}

export default Users