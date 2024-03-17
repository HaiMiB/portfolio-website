import React from 'react';
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title section__text__white">Skills</h2>
        <span className="section__subtitle section__text__white">Technical Lvl</span>
        <div className="skills__container container grid">
            <Frontend />
            <Backend /> 
        </div>
    </section>
  );
}

export default Skills;