
import React from "react"
import {Link} from "react-router-dom"

function Nav(){
    return (
        <nav className="flex  items-center justify-center gap-10">
            <Link to="/">Home</Link>
            <Link to="/user">User</Link>
            <Link to="/products">Products</Link>
        </nav>
    )
}
export default Nav