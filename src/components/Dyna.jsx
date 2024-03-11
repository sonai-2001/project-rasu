import React from "react"
import {useParams,useVavigate} from "react-router-dom"
function Dyna (){
    
 const x= useParams()
 const {name}=x
 const  Navigate= useNavigate()
 const handleClick=()=>{
    Navigate(-1)
 }
       
    return (
       
       <div className="mt-10 ">
        <h1>hi {name}</h1>
        <button onClick={handleClick} className="p-2 bg-red-200 rounded-md">go back</button>
       </div>
        )
}
export default Dyna