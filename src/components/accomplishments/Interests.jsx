import React from 'react'
import { MdCircle } from "react-icons/md";

const Interests = () => {
  return (
    <div className="accomplishments__content interests__content">
      <h3 className="accomplishments__title interests__title">Interests</h3>
      <div className="accomplishments__box">
        <div className="accomlisments__data">
          {/* ICons when you know how to use grid */}
          {/* <GrAchievement /> */}
          <div>
            <span className="accomplishments__name interests__name">1. Learning languages</span>
            <div className='accomplishments__info interests__info'>I like to get to know new cultures and people. One of the best way is through languages.

              I started with english and german at school, where I parcitipated in competitions.

              Currently I am learning japanese, because of my interest in japanese culture and their delicious food.</div>
          </div>
        </div>
        <div className="accomlisments__data">
          <div>
            <span className="accomplishments__name interests__name">2. Volunteering</span>
            <div className='accomplishments__info interests__info'>
              Organizing student projects such as:
              <div className='accomplishments__list'>
                <p className='accomplishments__point'> <MdCircle/> Digital Filmfestival</p>
                <p className='accomplishments__point'> <MdCircle/> Jahresfest Deutschlandstipendium</p>
              </div>




              Being a buddy for a an international student
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Interests