import React from 'react'
import MainLogo from '../../components/MainLogo/MainLogo'
import BigCards from './components/BigCards'

import './styles.scss'

import tours from '../../data/tours.json'
import { Helmet } from 'react-helmet'


const ToursPage = () => {
  return (
    <main className='tours-page'>
      <Helmet>
        <title>Туры</title>
        <meta name = 'description' content = 'Туры на плато Путорана с местным туроператором. Летние туры все включено. Вертолетные экскурсии. Хели-ски и ски-тур.' />
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