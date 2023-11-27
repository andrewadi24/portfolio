import React from 'react'
import { Link } from 'react-router-dom'
import Hamburger from './Hamburger'
import { useState } from 'react'
const Navbar = () => {
    const [hamburgerState, setHamburgerState] = useState("")
    const [menuState, setMenuState] = useState("hidden")
    function showMenu() {
        //show the menu

        setHamburgerState(state => state == "" ? "hidden" : "")
        setMenuState(state => state == "" ? "hidden" : "")

        if (document.body.style.overflow !== 'hidden') {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }

    function closeMenu() {
        setHamburgerState(state => state == "" ? "hidden" : "")
        setMenuState(state => state == "" ? "hidden" : "")
        if (document.body.style.overflow !== 'hidden') {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }
    return (
        <div className='my-nav container'>
            <div className='d-flex justify-content-between'>
                <div className='left'>
                    Andrew's Portfolio
                </div>
                <div className='right desktop'>
                    <ul className='list-unstyled'>
                        <Link to="/" className='link'><li>Home</li></Link>
                        <Link to="/project" className='link'><li>Works</li></Link>
                        <Link to="/about" className='link'><li>About-me</li></Link>
                        <Link to="/contact" className='link'><li>Contacts</li></Link>
                    </ul>
                </div>
                <div className={'mobile ' + hamburgerState} onClick={() => showMenu()}>
                    <Hamburger></Hamburger>
                </div>
                <div className={'menu ' + menuState} >
                    <div className='menu-container'>
                        <ul className='list-unstyled'>
                            <Link to="/" className='link'><li onClick={() =>closeMenu()}>Home</li></Link>
                            <Link to="/project" className='link'><li onClick={() =>closeMenu()}>Works</li></Link>
                            <Link to="/about" className='link'><li onClick={() =>closeMenu()}>About-me</li></Link>
                            <Link to="/contact" className='link'><li onClick={() =>closeMenu()}>Contacts</li></Link>
                        </ul>
                        <div className='close hover' onClick={() => closeMenu()}>
                            <i className="fas fa-times"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar