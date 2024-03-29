import React from 'react'

import InfoFrame from '../../../components/InfoFrame/InfoFrame'

const TourPageAbout = (props) => {
    const {about, yearTime, groupSize, time, accmdtnShort, difficultyLevel, price, varPrice, aboutH3, routes, reference, varAboutH3, varHitDescription, hitDescription} = props.tour

  return (
    <div className = "tp-about__container">
        <div className='tp-about'>
            <div className = "tp-about__main">
                <h2>О туре</h2>
                {about && about.map( (p, index) => <p key={index}>{p}</p>)}
            </div>
            <div className='tp-about__hit-container'>
                <div className = "tp-about__hit">
                        <h3>{aboutH3}</h3>
                        <p><span>Время проведения: </span><span>{yearTime}</span></p>
                        <p><span>Размер группы: </span><span>{groupSize}</span></p>
                        <p><span>Продолжительность: </span><span>{time}</span></p>
                        {routes && <p><span>Маршруты: </span><span>{routes}</span></p>}
                        {accmdtnShort && <p><span>Проживание: </span><span>{accmdtnShort}</span></p>}
                        <p><span>Уровень: </span><span>{difficultyLevel}</span></p>            
                        <span className = "tp-about__price">{price}</span><br />
                        {reference && <span className = 'tp-about__note'>*{reference}</span>}
                </div>
                {/* <InfoFrame price = {price} title = {aboutH3} reference = {reference} description = {hitDescription} /> */}
                {(varAboutH3 !== "") && (
                    <div className = "tp-about__hit">
                        <h3>{varAboutH3}</h3>
                        {<div dangerouslySetInnerHTML={{__html: varHitDescription}} />}
                        <span className = "tp-about__price">{varPrice}</span><br />
                        {reference && <span className = 'tp-about__note'>*{reference}</span>}
                    </div>
                ) }
            </div>
        </div>
    </div>
  )
}

export default TourPageAbout