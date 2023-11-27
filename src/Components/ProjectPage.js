import React from 'react'
import MyCard from './MyCard'

const ProjectPage = () => {
    return (
        <div className='container'>
            <h1 className='h1_slash'>Projects</h1>
            <p>List of my projects</p>

            <div className='mt-5'>
                <h2 className='h1_before'>complete-apps</h2>
                <div className='my-card-container row'>
                    <MyCard stack="REACT.JS JAVSCRIPT HTML CSS" title="PK_Curves - Capstone project for University of Sydney Pharmacy School" text="Empowering students with an interactive experience in understanding pharmacokinetics. The platform offers dynamic graph visualizations that change in real-time based on user input, providing immediate insights into complex pharmacological equations." demo="https://andrewadi24.github.io/pharmacokinetics/"></MyCard>
                    <MyCard stack="HTML CSS JAVASCRIPT(VANILLA)" title="Mail" text="Developed a single-page email client web application, featuring functionalities such as sending emails, viewing mailbox contents, reading and replying to emails, and archiving/unarchiving emails." demo="https://www.youtube.com/watch?v=r4n5TYmTohM"></MyCard>
                    <MyCard stack="HTML CSS DJANGO JAVSCRIPT" title="Social Network" text="I developed a twitter-like social networking web application allowing users to make posts, follow others, and like posts." demo="https://www.youtube.com/watch?v=MSWup0VUEOY"></MyCard>
                    <MyCard stack="HTML CSS DJANGO JAVSCRIPT" title="Wiki" text="Created a Wikipedia like website, with features including search, create new page, edit page, view page, and markdown to html conversion." demo="https://www.youtube.com/watch?v=aEo8diFQGbE"></MyCard>
                    <MyCard stack="REACT.JS JAVSCRIPT HTML CSS DJANGO" title="Finish my bible" text="Finish my bible is a single page web application, designed to help motivate individuals, in completing the bible for the first time. Recognizing that it is important to stay consistent, the application offers features such as:Personalized user settings, Progress tracking, Reading suggestions, Weekly reports,Reading history" demo="https://www.youtube.com/watch?v=jHcQ3_PZQ2k"></MyCard>
                    <MyCard stack="HTML CSS JAVSCRIPT FLASK" title="FINANCE" text="A web application using yahoo API to learn about stocks." demo="https://www.youtube.com/watch?v=jHcQ3_PZQ2k"></MyCard>
                </div>
            </div>

            <div className='row mt-5'>
                <h2 className='h1_before'>small-projects</h2>
                <div className=''></div>
            </div>
        </div>
    )
}

export default ProjectPage