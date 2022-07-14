import React from 'react'

import './About.scss'
import { images } from '../../constants'

function About() {
  const digitalCultivation = [
    'Self-training on web designs & UI/UX design',
    'Created UI design for the company and talent’s websites',
    'Produced approximately 6 designs using Figma'
  ];

  const listDC = digitalCultivation.map((digitalCultivation) => 
  <li>{digitalCultivation}</li>);

  const TSA = [
    'Got into the third cohort after submitted the mini project',
    'Involved in approximately 5 real-industry projects involving the frontend part'
  ];

  const listTSA = TSA.map((TSA) => 
  <li>{TSA}</li>);

  const selfEmployed = [
    'Got into the third cohort after submitted the mini project',
    'Involved in approximately 5 real-industry projects involving the frontend part'
  ]

  const listSelfEmployed = selfEmployed.map((selfEmployed) => 
  <li>{selfEmployed}</li>);

  const degree = [
    'Got into the third cohort after submitted the mini project',
    'Involved in approximately 5 real-industry projects involving the frontend part'
  ]

  const listDegree = degree.map((degree) => 
  <li>{degree}</li>);





  return (
  <div>
    <div class="container flex justify-center">
      <div class="flex items-center justify-between min-h-screen box">
          <img src={images.frame} alt="frame" class="object-scale-down image-about"/>

        <div class="flex-col box-inside">
            <h4 class="text-main">About Me</h4>

            <p class="text-about">I started my journey in technical field around march 2021 as a frontend developer after joining an accelerator program for a month.
            I learned about basic git, folder structure and very little coding from the programme, just to familiarise myself with technical environment. 
            Coming from biological background with only 1% of technical knowledge, my curiosity and passion in web development has helped me a lot 
            in completing the real-industry task. My scope usually includes building the user interface (UI) and integrating the frontend with backend. 
            <br/><br/>
            In 2022, I started to explore web designs and playing around with figma, aseprite and blender as tools of creating design. 
             I have created around 6 static web designs and wish to produce more design with animations and 3d assets in future. 
            <br/><br/>
            My goal is to master both frontend and design to produce a more interative website using three.js. 
            I developed this portfolio to showcase my current development.
            </p>
        </div>     
      </div>
      </div>

    {/* Timeline */}

      <div class="container text-timeline">
        <div>
          <h4 class="text-main">My Personal Timeline</h4>
        </div>

        <div class="pt-10">
          <ol>Digital Cultivation
            <ul>{listDC}</ul>
          </ol>
        </div>

        <div class="pt-10">
          <ol>Tech Skill Accelerator, Krenovator
            <ul>{listTSA}</ul>
          </ol>
        </div>

        <div class="pt-10">
          <ol>Doing small business
          <ul>{listSelfEmployed}</ul>
          </ol>
        </div>

        <div class="pt-10">
          <ol>Bachelor’s Degree in Biology
            <ul>{listDegree}</ul>
          </ol>
        </div>

        <div class="pt-10">
          Foundation of Science, UiTM
        </div>
      </div>

  </div>
    
  )
}

export default About