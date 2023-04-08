import React from 'react'
import ReactDOMServer from 'react-dom/server';
import { useState } from 'react'
const items = () => {
  let ls = [
    {
      title: "Bomberman",
      description: "",
      website_url: "",
    },
    {
      title: "Resume Builder",
      description: "hello",
      website_url: "",
    },
    {
      title: "Typing Test",
      description: "",
      website_url: "",
    },
    {
      title: "Sextant web application",
      description: "Created a web application for cisco software engineering virtual program.",
      website_url: "",
    },
  ]
  return ls
}
const Projects = () => {
  let ls = items()
  let cardElements = []
  let projectHover = (i) => {
    document.getElementById(i).innerHTML = ls[i].description
  }
  let projectReset = (i) => {
    console.log(ls[i])
    document.getElementById(i).innerHTML = ReactDOMServer.renderToString(<h1 className='text-center'>{ls[i].title}</h1>)
  }
  for (let i = 0; i < ls.length; i++) {
    cardElements.push(
      <div className='col-12 col-lg-4'>
        <div className='card mb-3' id={i} onMouseOver={() => { projectHover(i)}} onMouseLeave = {() => {projectReset(i)}}>
          <h1 className='text-center'>{ls[i].title}</h1>
        </div>
      </div>
    )
  }
  return (
    <div className='projects pt-3'>
      {/* https://dunks1980.com/ */}
      <h1 className='text-center'>Projects I've made</h1>
      <p className='text-center'>Here are a few past design projects I've worked on. Want to see more? Email me.</p>
      <div className='container pb-3'>
        <div className='row'>
          {cardElements}
          {/* <div className='col-12 col-lg-4'>
            <div className='card mb-3'>
              <h1 className='text-center'>Bomberman</h1>
            </div>
          </div>
          <div className='col-12 col-lg-4'>
            <div className='card mb-3'>
              <h1 className='text-center'>Resume Builder</h1>
            </div>
          </div>
          <div className='col-12 col-lg-4'>
            <div className='card mb-3'>
              <h1 className>Typing Test</h1>
            </div>
          </div> */}
        </div>

      </div>
    </div>
  )
}

export default Projects