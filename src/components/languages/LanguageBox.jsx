import React from "react";
import { HiCheckBadge } from "react-icons/hi2";
import { MdCircle } from "react-icons/md";
import { MdOutlineCircle } from "react-icons/md";


const LanguageBox = () => {
    return (
        <div className="language__content">
            <div className="language__box">
                <div className="language__group">
                    <div className="language__data">
                        <HiCheckBadge />
                        <div>
                            <span className="language__name">German</span>
                            {/* <span className="language__level">Basic</span> */}
                        </div>
                    </div>
                    <div className="language__data">
                        <HiCheckBadge />
                        <div>
                            <span className="language__name">English</span>
                        </div>
                    </div>
                    <div className="language__data">
                        <HiCheckBadge />
                        <div>
                            <span className="language__name">Czech</span>
                        </div>
                    </div>
                    <div className="language__data">
                        <HiCheckBadge />
                        <div>
                            <span className="language__name">Vietnamese</span>
                        </div>
                    </div>
                    <div className="language__data">
                        <HiCheckBadge />
                        <div>
                            <span className="language__name">Japanese</span>
                        </div>
                    </div>
                </div>
                {/* Rating */}
                <div className="language__group">
                    <div className="language__data">
                        <div>
                            <span className="language__rating">
                                C1
                            </span>
                        </div>
                    </div>
                    <div className="language__data">
                        <div>
                            <span className="language__rating">B2/C1</span>
                        </div>
                    </div>
                    <div className="language__data">
                        <div>
                            <span className="language__rating">C2</span>
                        </div>
                    </div>
                    <div className="language__data">
                        <div>
                            <span className="language__rating">A1</span>
                        </div>
                    </div>
                    <div className="language__data">
                        <div>
                            <span className="language__rating">A1</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LanguageBox;