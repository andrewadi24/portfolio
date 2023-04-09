import React from 'react'
import LeetCode from './LeetCode'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <>
            <div className='vh-100 '>
                <div className='d-flex align-items-center justify-content-center flex-column h-100'>
                    <h3>Hi I'm Andrew,</h3> 
                    <h1 className='w-75 m-inline-auto text-center'>A Front end Web developer (React JS)</h1>
                    <div className='icons d-flex mt-2 mb-2'>
                        <Link to="https://github.com/andrewadi24"><img src='https://cdn-icons-png.flaticon.com/512/2111/2111432.png' style={{ width: "2rem", height: "2rem", marginRight:"0.75rem"}}></img></Link>
                        <Link to="https://linkedin.com/in/andrew-adisaputra"><img src='https://cdn-icons-png.flaticon.com/512/1384/1384014.png' style={{ width: "2rem", height: "2rem",marginRight:"0.75rem"}}></img></Link>
                        <Link to="https://api.whatsapp.com/send/?phone=62816399399&text&type=phone_number&app_absent=0"><img src='https://cdn-icons-png.flaticon.com/512/1384/1384007.png' style={{ width: "2rem", height: "2rem", marginRight:"0.75rem" }}></img></Link>
                        <Link to = "https://instagram.com/andrew.adisaputra"><img src='https://cdn-icons-png.flaticon.com/512/1400/1400829.png' style={{ width: "2rem", height: "2rem" }}></img></Link>
                    </div>
                    <div className='btn btn-primary mt-2'>Download Resume</div>
                </div>
            </div>
            <About></About>
            <LeetCode></LeetCode>
            <Projects></Projects>
            <Contact></Contact>
        </>
    )
}

export default Home