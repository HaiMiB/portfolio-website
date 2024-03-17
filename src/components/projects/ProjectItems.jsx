import React from 'react';
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { v4 as uuid } from 'uuid';

const ProjectItems = ({ item }) => {
    return (
        <div className="project__card" key={item.id}>
            <img className="project__img" src={item.image} alt="" />
            <h3 className="project__title">{item.title}</h3>
            <div className="project__tools">
                {item.tools.map(toolName => <div key={uuid()} className='project__tools__name' >{toolName}</div>)}
            </div>
            <a href="#" className="project__button">
                Demo <HiOutlineArrowSmRight className="project__button-icon" />
            </a>
        </div>
    );
}

export default ProjectItems;