import React from 'react';
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';
import Others from './others';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
       
        <div className="skills__container container grid">
            <Frontend />
            <Backend /> 
            <Others />
            
        </div>
    </section>
  );
}

export default Skills;