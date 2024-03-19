import React from 'react';
import "./footer.css";
import { FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi';
import { IoMailOutline } from "react-icons/io5";


const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="footer__container container">
                <h1 className="footer__title">Want to contact me?</h1>
                <div className="footer__line"></div>
                <a href="mailto:bui@hai-mi.de" className="home__social-icon footer__mail-icon" target="_blank" rel="noreferrer">
                    <IoMailOutline />
                </a>
                <div className="footer__title footer__mail">bui@hai-mi.de</div>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>
                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>
                </ul>
                {/* <div className="footer__social">
                    <a href="https://www.github.com/kmaalig" className="home__social-icon" target="_blank" rel="noreferrer">
                        <FiGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/kmaalig/" className="home__social-icon" target="_blank" rel="noreferrer" >
                        <FiLinkedin />
                    </a>
                </div> */}
                <span className="footer__copy"></span>
            </div>
        </footer>
    );
}

export default Footer;