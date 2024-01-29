import React from 'react'
import MyCard from './MyCard'
import { Link } from 'react-router-dom'
const Projects = () => {
    return (
        <div className='container'>
            <div className=' mb-3 d-flex justify-content-between align-items-center '>
                <div><h1 className='h1_before  h-100 '>Projects</h1></div>
                <div> <Link to="/project"><p className=' center  h-100'>View all {"~~>"}</p></Link></div>
            </div>
            <div className='row'>

                <MyCard stack="REACT.JS JAVSCRIPT HTML CSS" title="PK_Curves - Capstone project for University of Sydney Pharmacy S chool" text="Empowering students with an interactive experience in understanding pharmacokinetics. The platform offers dynamic graph visualizations that change in real-time based on user input, providing immediate insights into complex pharmacological equations." demo="https://andrewadi24.github.io/pharmacokinetics/"></MyCard>
                <MyCard stack="HTML CSS JAVASCRIPT(VANILLA)" title="BullBearBlend" text="Developed a real-world stock simulation platform, allowing users to buy and sell stocks in a simulated environment using real-time stock data." demo="https://andrewadi24.pythonanywhere.com/"></MyCard>
                <MyCard stack="HTML CSS DJANGO JAVSCRIPT" title="Social Network" text="I developed a twitter-like social networking web application allowing users to make posts, follow others, and like posts." demo="https://www.youtube.com/watch?v=MSWup0VUEOY"></MyCard>
            </div>
        </div>
    )
}

export default Projects