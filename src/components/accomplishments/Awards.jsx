import React from 'react'
import { GrAchievement } from "react-icons/gr";

const Awards = () => {
  return (
    <div className="accomplishments__content">
      <h3 className="accomplishments__title awards__title">Awards</h3>
      <div className="accomplishments__box">
        <div className="accomlisments__data">
          <div>
            <span className="accomplishments__name">Scholarship for the Deutschlandstipendium</span>
            <div className="accomplishments__level">2020 - 2022</div>
            <div className='accomplishments__info'>Support for high-achieving and commited students with excellent study results, social contribution, such as volunteering and personal achievements.</div>
          </div>
        </div>
        <div className="accomlisments__data">
          {/* ICons when you know how to use grid */}
          {/* <GrAchievement /> */}
          <div>
            <span className="accomplishments__name">Winner of the National German Olympiade</span>
            <div className="accomplishments__level">2018</div>
            <div className='accomplishments__info'>Participating in an international competition against other countries in the german language. The competition demanded good german grammar, communication, creativity, listening and presentation skills and teamwork.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Awards