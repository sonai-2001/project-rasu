
import React from "react"
import {Link} from "react-router-dom"
import {Outlet} from "react-router-dom"
function Home(){
  return (
    <div className= "flex flex-col items-center mt-5">
      <Link  className="bg-green-400 p-2 rounded-md mt-2"to="/apurba">Apurba</Link>
      <Link className="bg-green-400 p-2 rounded-md mt-2"  to="/Maa">Maa</Link>
      <Link className="bg-green-400 p-2 rounded-md mt-2" to="/papa">Papa</Link>
      <Link className="bg-green-400 p-2 rounded-md mt-2" to="/kumar">Kumar</Link>
    
    
    <Outlet />
    </div>
  )
}

export default Home