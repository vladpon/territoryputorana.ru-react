import React from 'react'
import MainLogo from '../../components/MainLogo/MainLogo'
import BigCards from './components/BigCards'

import './styles.scss'

import tours from '../../data/tours.json'
import { Helmet } from 'react-helmet'
import { useLocation, useNavigate } from 'react-router-dom'


const ToursPage = () => {

  const navigate = useNavigate();
  const location = useLocation()
  const pathname = location.pathname


  return (
    <main className='tours-page'>
      <Helmet>
        <title>Туры на Плато Путорана из Красноярска в 2023 году</title>
        <link rel="canonical" href={`https://territoryputorana.ru${pathname}`} />
        <meta name = 'description' content = 'Туры на Плато Путорана из Красноярска в 2023 году – Все туристические маршруты на Плато Путорана можно найти на сайте или узнать по телефону 8 (903) 929-93-83. Плато Путорана туры и цены на 2023 году вылет на Плато из Красноярска. Бронируйте и покупайте туры на Плато Путорана онлайн на сайте' />
      </Helmet>
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