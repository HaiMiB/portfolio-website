import React from "react";
import { HiCheckBadge } from "react-icons/hi2";
import { MdCircle } from "react-icons/md";
import { MdOutlineCircle } from "react-icons/md";


const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Developer</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <span className="skills__name">Python</span>
                            {/* <span className="skills__level">Basic</span> */}
                        </div>
                    </div>
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <span className="skills__name">Javascript</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <span className="skills__name">HTML, CSS</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <span className="skills__name">React</span>
                        </div>
                    </div>
                </div>
                {/* Rating */}
                <div className="skills__group">
                    <div className="skills__data">
                        <div>
                            <span className="skills__rating">
                                <MdCircle /> <MdCircle /> <MdCircle /> <MdCircle /> <MdCircle />
                            </span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <div>
                            <span className="skills__rating"><MdCircle /> <MdCircle /> <MdCircle /> <MdCircle /> <MdOutlineCircle /></span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <div>
                            <span className="skills__rating"><MdCircle /> <MdCircle /> <MdCircle />  <MdOutlineCircle /> <MdOutlineCircle /></span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <div>
                            <span className="skills__rating"><MdCircle /> <MdCircle /> <MdCircle />  <MdOutlineCircle /> <MdOutlineCircle /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Frontend;