import React from 'react'
import photo from '../photo_img.png'
import SkillCard from './SkillCard'
const AboutPage = () => {
    let language_list = ["Python", "Java", "Javascript", "HTML", "CSS"]
    let tools_list = ["Git", "VSCode", "Linux", "Figma"]
    let database_list = ["MySQL", "MongoDB"]
    let framework_list = ["React", "Node.js", "Express.js", "Flask", "Django"]
    return (
        <div className='container'>
            <h1 className='h1_slash'>About</h1>
            <p>who am i?</p>
            <div className='row'>
                <div className='col-lg-4'>
                    <img src={photo} style={{ width: "100%", height: "auto" }}></img>
                </div>
                <div className='col-lg-8 d-flex justify-content-center flex-column'>
                    <h2 className='mt-4'> Hi, my name is Andrew👋!</h2>
                    <p>As a final year computer science and information systems student, I am passionate about designing and developing user-friendly web applications that solve complex problems. My proficiency in HTML, CSS, JavaScript, Python, React, and responsive web design, combined with my resourceful problem-solving skills, makes me a valuable addition to any team. I am also well-versed in using development tools such as Git, VS Code, and Figma to create visually appealing and user-friendly websites.</p>
                    <p>Overall, I am excited to bring my technical skills, passion, and experience to any team to design and develop user-friendly web applications that provide innovative solutions to complex problems.</p>
                </div>
            </div>

            <div className='row mt-5'>
                <h1 className='h1_before'>Skills</h1>
                <div className='row d-flex'>
                    <SkillCard title="Tools" skill_list={tools_list}></SkillCard>
                    <SkillCard title="Databases" skill_list={database_list}></SkillCard>
                    <SkillCard title="Languages" skill_list={language_list}></SkillCard>
                    <SkillCard title="Frameworks" skill_list={framework_list}></SkillCard>
                </div>

            </div>
            <div className='row mt-5'>
                <h1 className='h1_before'>fun-facts</h1>

            </div>
        </div>
    )
}

export default AboutPage