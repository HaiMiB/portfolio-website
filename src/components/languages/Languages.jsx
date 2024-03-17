import React from 'react';
import "./languages.css";
import LanguageBox from './LanguageBox';

const Languages = () => {
  return (
    <section className="language section" id="language">
        <h2 className="section__title section__text__white">Languages</h2>
        <span className="language__margin"></span>
        <div className="language__container container">
            <LanguageBox />
        </div>
    </section>
  );
}

export default Languages;