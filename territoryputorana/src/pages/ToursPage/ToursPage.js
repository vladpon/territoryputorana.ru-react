import React from 'react'
import MainLogo from '../../components/MainLogo/MainLogo'
import BigCards from './components/BigCards'

import './styles.scss'

import tours from '../../data/tours.json'


const ToursPage = () => {
  return (
    <main className='tours-page'>
        <div className = 'tours-page__content'>
            <MainLogo />
            <div className="tours-page__title">
                <h1>туры</h1>
                <h3>на Плато Путорана</h3>
            </div>
            <BigCards content = {tours}/>
        </div>
    </main>
  )
}

export default ToursPage