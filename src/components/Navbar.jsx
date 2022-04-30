import { Link } from "react-router-dom"
import "../App.css"

export const Navbar=(()=>{
    return <div id="navbar" style={{display:"flex"}}>
        <Link to={'/Admin'}>Admin</Link>
        <Link to={'/'}>Home</Link>
    </div>
})


   
