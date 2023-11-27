import React from 'react'
import photo from '../photo_new.png'
import Projects from './Projects'
import Skills from './Skills'
import About from './About'
import Contact from './Contact'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div className=''>
            <div className='container mt-5 mb-5'>
                <div class="row">
                    <div class="col-md-7">
                        <h1>Hello, I'm <span class="primary">Andrew Adisaputra</span>,</h1>
                        <h2>A <span class="primary">Full Stack Web Developer</span></h2>
                        <p>I specialize in creating <span class="primary">user-friendly web applications</span>. With
                            skills in HTML, CSS, JavaScript, Python, and React, I strive to design engaging and responsive
                            websites. <span class="primary">Let's collaborate</span> to bring your web vision to life.</p>
                        <Link to="/contact"><button class='btn btn-primary'>Contact Me!! </button></Link>
                    </div>
                    <div class="col-md-5 m-auto text-center">
                        <img src={photo} style={{ width: "100%", height: "auto" }}></img>
                    </div>
                </div>

            </div >
            {/* <Quotes></Quotes> */}
            <Projects></Projects>
            <Skills></Skills>
            <About></About>
            <Contact></Contact>
        </div>
    )
}

export default Home