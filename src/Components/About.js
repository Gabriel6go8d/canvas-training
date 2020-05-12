import React from 'react'
import {BsBriefcaseFill} from 'react-icons/bs'
import {FaCode, FaGithub, FaEnvelope} from 'react-icons/fa'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3, DiReact, DiBootstrap} from 'react-icons/di'


function About() {
    return (
        <div className='container text-left mt-5 about'>
            <h4>Canvas Project</h4>

            <h4>Author: Gabriel Gutierrez</h4>
            <a href='mailto:gabriel.ares93@gmail.com' className='contact_link'>
                <div>
                    <FaEnvelope size='25px' color='white'/>
                    <p>Email: </p>
                </div>
                <p>gabriel.ares93@gmail.com</p>
            </a>

            <a href='https://gabriel6go8d.github.io/curriculum-vitae-2/' className='contact_link'>
                <div>
                    <BsBriefcaseFill size='25px' color='white'/>
                    <p>Portfolio: </p>
                </div>
                <p>https://gabriel6go8d.github.io/curriculum-vitae-2/</p>
            </a>
            
            <a href='https://github.com/Gabriel6go8d/canvas-training' className='contact_link'>
                <div>
                    <FaCode size='25px' color='white'/>
                    <p>Project Code: </p>
                </div>
                <p>https://github.com/Gabriel6go8d/canvas-training</p>
            </a>
            <a href='https://github.com/Gabriel6go8d' className='contact_link'>
                <div>
                    <FaGithub size='25px' color='white'/>
                    <p>GitHub: </p>
                </div>
                <p>https://github.com/Gabriel6go8d</p>
            </a>

            <p className='mt-3'>Used Tecnologies: </p>
            <p>HTML5  CSS3  Canvas  Javascript  React  Bootstrap</p>
            <p className='mt-3'>What I Learn?</p>
            <p>This was a really fun project, working with the features of canvas while creating interesting animations, also the math was a little challenge. Plus that, it worked as practice for Bootstrap and React Hooks (useState, useEffect, useRef) and I learned how to use the React-Icons´s library.</p>
        </div>
    )
}

export default About
