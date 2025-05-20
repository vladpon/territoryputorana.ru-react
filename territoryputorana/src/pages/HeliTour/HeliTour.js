import React, { useEffect, useState } from 'react'

import '../TourPage/styles.scss'
import './styles.scss'

import TourPageCover from '../TourPage/components/TourPageCover'
import TourPageAbout from '../TourPage/components/TourPageAbout'
import TourPageAux from '../TourPage/components/TourPageAux'
import TourPageProgram from '../TourPage/components/TourPageProgram'
import TourPageAccmmdtn from '../TourPage/components/TourPageAccmmdtn'
import PhotoBlock from '../TourPage/components/PhotoBlock'
import TextTitle from '../MainPage/components/TextTitle'
import RequestBlock from '../../components/RequestBlock/RequestBlock'

import tours from '../../data/tours.json'
import MainLogo from '../../components/MainLogo/MainLogo'

import '../TourPage/components/styles.scss'
import '../MainPage/components/styles.scss'
import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom'
import { getTourById } from '../../api/tours'

// const tour = tours.find(tour => tour.id === 'helitour')


import blankTour from '../../data/blanktour.json' 

const txtTitle = {
  title: "Транспорт",
  text: [
    "Экскурсия проводится на вертолете ВО 105 или Еврокоптер (вместимость — до 4 пассажиров)."
  ]
}



const HeliTour = () => {


  const [tour, setTour] = useState(blankTour);

  const location = useLocation()
  const pathname = location.pathname

  // useEffect( () => {
  //   window.YandexRotorSettings.isLoaded = true
  // }, [])

  useEffect( () => {
    const getNewTour = async () => {
      const newTour = await getTourById('helitour')
      setTour(newTour)
    }
    getNewTour()
}, [])


  return (
    <main className='tour-page'>
      <Helmet>
        <title>Вертолетная экскурсия </title>
        <link rel="canonical" href={`https://territoryputorana.ru${pathname}`} />
        <meta name = 'description' content = 'Увидеть первозданную красоту природы с высоты птичьего полета? Вертолетная экскурсия гарантирует полный восторг и незабываемые впечатления!' />
      </Helmet>
        <MainLogo />
        <TourPageCover tour = {tour}/>


        <TourPageAbout tour = {tour} varInfoframe = {false}/>


        <TourPageProgram tour = {tour}/>
        <div className = 'txt-title'>
            <h2>{txtTitle.title}</h2>
            {txtTitle.text && txtTitle.text.map( (p, index) => <p key = {index}>{p}</p>)}
        </div>

        <div className='map'>
          <h2>Карта маршрута</h2>
          <img src='./img/helimap.jpg'></img>
        </div>

        <PhotoBlock photos = {tour.tourPhoto}/>

        <RequestBlock bgImage = {'./img/helitour/helitour_req.jpg'}  h2Text = {"Оставить заявку на тур"} h3Text = {"Заполните форму, и мы ответим Вам в ближайшее время!"}/>
    </main>
  )
}

export default HeliTour