import React from "react"
import {Routes,Route} from "react-router-dom"

import Home from "../components/Home"
import Users from "../components/Users"
import Products from "../components/Products"
import Dyna from "../components/Dyna"

function Routing(){

  return (
      <Routes>
       
       <Route  path="/project-rasu" element={<Home />}  >
          <Route   path="/project-rasu:name" element={<Dyna />} />
       </Route>
       <Route  path="/project-rasu/user" element={<Users/>} />
           
       
       <Route  path="/project-rasu/products" element={<Products />}/>

      </Routes>  
  )   
}

export default Routing