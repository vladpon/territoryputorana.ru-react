import React from 'react'

import './styles.scss'

const TourPageCover = (props) => {
    const { title, time, varTime, season, bigImg } = props.tour
  return (
    <div className = "tp-cover">        
        <img className = "tp-cover__bg" src={bigImg} />        
        <div className = "tp-cover__text">
            <h1>{title}</h1>
            {time && 
                (
                <div className = 'tp-cover__opt-block'>
                    <div className = 'tp-cover__opt-item'>
                        <img src='./img/time.png' />
                        <span>{time}</span>
                        {(varTime !== "") && (<span>; {varTime}</span>)}
                    </div>
                    <div className = 'tp-cover__opt-item'>
                        <img src='./img/calendar.png' />
                        <span>{season}</span>
                    </div>
                </div>
                )
            }
        </div>
    </div>
    )
}

export default TourPageCover