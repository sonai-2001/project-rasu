
import React from "react"
import axios from "../utilities/Axios"
import {useState} from "react"
import {useEffect} from "react"
function Products(){
  const[pro,setPro]=useState([])

  const getProducts=()=>{
    axios.get('products')
  .then((p)=>{
     setPro(p.data)
  })
  .catch((err)=>{
    console.log(err)
  })
  }
  useEffect(()=>{
    console.log("created")
    getProducts()

    return ()=>{
      console.log("deleted")
    }
  },[])
  return (
    <div>
      <ul>
           {pro.map((item,idx)=>{
            return  <li key={idx} className= "mt-5 bg-red-200">{item.title}</li>
           })}
      </ul>
    </div>
  )
}

export default Products