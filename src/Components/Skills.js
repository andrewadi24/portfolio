import React from 'react'
import decorations from '../decorations.png'
import SkillCard from './SkillCard'
const Skills = () => {
    let language_list = ["Python", "Java", "Javascript", "HTML", "CSS"]
    let tools_list = ["Git", "VSCode", "Linux", "Figma"]
    let database_list = ["MySQL", "MongoDB"]
    let framework_list = ["React", "Node.js", "Express.js", "Flask", "Django"]
    return (
        <div className='container mt-5'>
            <h1 className='h1_before'>Skills</h1>
            <div className='row'>
                <div className='col-lg-5'>
                    <img src={decorations} style={{ width: "100%", height: "auto", padding: "30px" }}></img>
                </div>
                <div className='col-lg-7'>
                    <div className='row rtl'>
                        <SkillCard title="Tools" skill_list={tools_list}></SkillCard>
                        <SkillCard title="Databases" skill_list={database_list}></SkillCard>
                        <SkillCard title="Languages" skill_list={language_list}></SkillCard>
                        <SkillCard title="Frameworks" skill_list={framework_list}></SkillCard>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills