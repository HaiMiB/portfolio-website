import React from "react";
import { HiCheckBadge } from "react-icons/hi2";
import { MdCircle } from "react-icons/md";
import { MdOutlineCircle } from "react-icons/md";

const Backend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Other</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                        <span className="skills__name">Git</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                        <span className="skills__name">MS Office</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                        <span className="skills__name">Ad. Photoshop</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                        <span className="skills__name">Latex</span>
                        </div>
                    </div>
                </div>
                {/* Rating */}
                <div className="skills__group">
                    <div className="skills__data">
                        <div>
                            <span className="skills__rating"><MdCircle /> <MdCircle /> <MdCircle /> <MdOutlineCircle /> <MdOutlineCircle /> </span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <div>
                            <span className="skills__rating"><MdCircle /> <MdCircle /> <MdOutlineCircle /> <MdOutlineCircle /> <MdOutlineCircle /> </span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <div>
                            <span className="skills__rating"><MdCircle /> <MdCircle /> <MdOutlineCircle /> <MdOutlineCircle /> <MdOutlineCircle /> </span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <div>
                            <span className="skills__rating"><MdCircle /> <MdCircle /> <MdCircle /> <MdCircle /> <MdOutlineCircle /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Backend;