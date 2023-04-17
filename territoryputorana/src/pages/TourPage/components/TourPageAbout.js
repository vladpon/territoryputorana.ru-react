import React from 'react'

const TourPageAbout = (props) => {
    const {about, yearTime, groupSize, time, accmdtnShort, difficultyLevel, price} = props.tour
  return (
    <div className = "tp-about__container">
        <div className='tp-about'>
            <div className = "tp-about__main">
                <h2>О туре</h2>
                {about && about.map( (p, index) => <p key={index}>{p}</p>)}
            </div>
            <div className = "tp-about__hit">
                <h3>Хит!</h3>
                <p><span>Время проведения: </span><span>{yearTime}</span></p>
                <p><span>Размер группы: </span><span>{groupSize}</span></p>
                <p><span>Продолжительность: </span><span>{time}</span></p>
                <p><span>Проживание: </span><span>{accmdtnShort}</span></p>
                <p><span>Уровень: </span><span>{difficultyLevel}</span></p>            
                <span className = "tp-about__price">{price}</span><br />
                {/* <span className = 'tp-about__note'>*cтоимость зависит от выбранного варианта питания и дополнительных услуг</span> */}
            </div>
        </div>
    </div>
  )
}

export default TourPageAbout