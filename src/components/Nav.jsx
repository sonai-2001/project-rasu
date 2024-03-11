
import React from "react"
import {Link} from "react-router-dom"

function Nav(){
    return (
        <nav className="flex  items-center justify-center gap-10">
            <Link to="/project-rasu">Home</Link>
            <Link to="/project-rasu/user">User</Link>
            <Link to="/project-rasu/products">Products</Link>
        </nav>
    )
}
export default Nav