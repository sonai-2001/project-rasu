import React from "react"
import Nav from "./components/Nav"
import Routing from "./utilities/Routing"
import {useContext} from "react"
import {UserContext} from "./Context/Context"

function App(){
   
 const x= useContext(UserContext)
//  console.log(x)
 const {mullo,profileval}=x
 
 
 
  return (
    <div>
      <Nav />
      <Routing />
    </div>
  )
}
export default App

