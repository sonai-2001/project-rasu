import React from "react"
import {useParams} from "react-router-dom"
function Dyna (){
    
 const x= useParams()
 const {name}=x
    return (
       
       <div className="mt-10">hi {name}</div>
        )
}
export default Dyna