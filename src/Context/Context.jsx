
import React from "react"
import {createContext} from "react"
export const UserContext=createContext()
import {useState} from "react"
function Context(props){
    const[val,setVal]=useState([])
    const[profile,setProfile]=useState({name:"apurba",age:22})
       
    
    return (
        <UserContext.Provider value={{mullo:{val,setVal},profileval:{profile,setProfile}}}>{props.children}</UserContext.Provider>
    )
}
export default Context