import React from 'react';
import "./accomplishments.css";
import Awards from './Awards';
import Interests from './Interests';


const Accomplishments = () => {
  return (
    <section className="accomplishments section" id="accomplishments">
        <h2 className="section__title section__text__white">Awards & Interests</h2>
        <span className="section__subtitle section__text__white"></span>
        <div className="accomplishments__container container grid">
            <Awards/>
            <Interests/>
        </div>
    </section>
  );
}

export default Accomplishments;