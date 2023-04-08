import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const linkStyle = {
    color:"white",
    textDecoration: "none",
  }
  return (
    <nav className='container-fluid p-3 d-flex align-items-center justify-content-center bg-primary'>
        <ul>
            <Link to={"/"} style={linkStyle}><li className=''>Home</li></Link>
            <Link to={"/about"} style={linkStyle}><li className=''>About me</li></Link>
            <Link to={"/projects"} style={linkStyle}><li>Projects</li></Link>
            <Link to={"/contact"} style={linkStyle}><li>Contact</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar