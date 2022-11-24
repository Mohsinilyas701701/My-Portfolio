import React from 'react'
import './Experience.css'
import { ThemeContext } from "../../Context";
import { useContext } from "react";

const Experience = () => {

  const Theme = useContext(ThemeContext);
  const darkMode = Theme.state.darkMode;
  return (
    <div className="experience" >
        <div className="achievement" >
            <div className="circle">1+</div>
            <span style={{color: darkMode? 'white' : ''}}>Year</span>
            <span>Experience</span>
        </div>

        <div className="achievement">
            <div className="circle">5+</div>
            <span style={{color: darkMode? 'white' : ''}}>Completed</span>
            <span>Projects</span>
        </div>

        <div className="achievement">
            <div className="circle">5+</div>
            <span style={{color: darkMode? 'white' : ''}}>Companies</span>
            <span>Work</span>
        </div>

    </div>
  )
}

export default Experience
