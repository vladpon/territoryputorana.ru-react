import React from 'react'

import './styles.scss'

const TourPageCover = () => {
  return (
    <div className = "tp-cover">
        <img className = "tp-cover__bg" src="./img/tp_lostput_main.jpg" />        
        <div className = "tp-cover__text">
            <h1>Затерянный мир <br /> Плато Путорана</h1>
            <div className = 'tp-cover__opt-block'>
                <div className = 'tp-cover__opt-item'>
                    <img src='./img/time.png' />
                    <span>8 дней / 7 ночей</span>
                </div>
                <div className = 'tp-cover__opt-item'>
                    <img src='./img/calendar.png' />
                    <span>июнь - сентябрь</span>
                </div>
            </div>
        </div>
    </div>
    )
}

export default TourPageCover