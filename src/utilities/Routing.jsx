import React from "react"
import {Routes,Route} from "react-router-dom"

import Home from "../components/Home"
import Users from "../components/Users"
import Products from "../components/Products"
import Dyna from "../components/Dyna"

function Routing(){

  return (
      <Routes>
       
       <Route  path="/" element={<Home />}  >
          <Route   path="/:name" element={<Dyna />} />
       </Route>
       <Route  path="/user" element={<Users/>} />
           
       
       <Route  path="/products" element={<Products />}/>

      </Routes>  
  )   
}

export default Routing