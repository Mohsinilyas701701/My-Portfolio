import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from './Mohsin-front-end-developer.pdf'
import { ThemeContext } from "../../Context";
import { useContext } from "react";

const Services = () => {
  const Theme = useContext(ThemeContext);
  const darkMode = Theme.state.darkMode;
  return (
    <div className="Services">

        {/* Left side Of Services */}

        <div className="awesome">
            <span style={{color: darkMode? 'white' : ''}}> My Awesome </span>
            <span> Services </span>
            <spane> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Laudantium molestias exercitationem similique! Earum, magni nihil. </spane>
            <a href={Resume} download>
            <button className='button s-button'> Download CV</button>
            </a>
            <div  className='blur s-blur1' style={{background: '#ABF1FF94'}}> </div>
        </div>

        {/* rIGHT side Of Services */}


        {/* 1st  Card */}
        <div className="cards">
           <div style={{left:'14rem'}}>
                <Card
                    emoji ={HeartEmoji}
                    heading = {'Design'}
                    detail = {'Figma, Sketch, Adobe, and Photoshop'}
                    />
           </div>

        {/* 2st  Card */}

          <div style={{top:'12rem', left: '-4rem'}}>
          <Card
                    emoji ={Glasses}
                    heading = {'Developer'}
                    detail = {'HTML5, CSS3, Bootstrap, JavaScript, and React'}
                    />
          </div>

            {/* 3rd  Card */}

            <div style={{top:'19rem', left: '12rem'}}>
          <Card
                    emoji ={Humble}
                    heading = {'UI/UX'}
                    detail = {'lorem ipsium content for dummy content.'}
                    />
          </div>
          <div className='blur s-blur2' style={{background: "var(--purple)"}}></div>

        </div>
    </div>
  )
}

export default Services
