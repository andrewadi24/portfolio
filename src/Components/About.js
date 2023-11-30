import React from 'react'
import photo from '../photo_img.png'
import { Link } from 'react-router-dom'
const About = () => {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-lg-8'>
                    <h1 className='h1_before'>About-me</h1>
                    <h2 className='mt-4'> Hi, my name is Andrew👋!</h2>
                    <p>As a final year computer science and information systems student, I am passionate about designing and developing user-friendly web applications that solve complex problems. My proficiency in HTML, CSS, JavaScript, Python, React, and responsive web design, combined with my resourceful problem-solving skills, makes me a valuable addition to any team. I am also well-versed in using development tools such as Git, VS Code, and Figma to create visually appealing and user-friendly websites.</p>
                    <p>Overall, I am excited to bring my technical skills, passion, and experience to any team to design and develop user-friendly web applications that provide innovative solutions to complex problems.</p>
                    <Link to="/about"><button className='btn btn-primary'>Read more {"=>"}</button></Link>
                </div>
                <div className='col-lg-4'>
                    <img src={photo} style={{ width: "100%", height: "auto" }}></img>
                </div>
            </div>
        </div>
    )
}

export default About