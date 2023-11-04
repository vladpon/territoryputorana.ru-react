import React, { useEffect } from 'react'
import BigCards from '../ToursPage/components/BigCards'
import MainLogo from '../../components/MainLogo/MainLogo'

import tours3d from '../../data/tours3d.json'

import './styles.scss'
import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom'

const Tours3d = () => {

  const location = useLocation()
  const pathname = location.pathname

  useEffect( () => {
    window.YandexRotorSettings.isLoaded = true
  }, [])



  return (
    <main className='tours3d-page'>
      <Helmet>
        <title>3d туры</title>
        <link rel="canonical" href={`https://territoryputorana.ru${pathname}`} />
        <meta name = 'description' content = 'Приглашаем на виртуальную прогулку по плато Путорана. Усадьба «Жар. Птица» и палаточный кемпинг на озере Лама. Природные локации, которые вы сможете посетить во время тура.' />
      </Helmet>
        <div className = 'tours3d-page__content'>
            <MainLogo />
            <div className="tours3d-page__title">
                <h1>3D Туры</h1>
                <h3>Территории Путорана</h3>
            </div>
            <BigCards content = {tours3d}/>
        </div>
    </main>
  )
}

export default Tours3d