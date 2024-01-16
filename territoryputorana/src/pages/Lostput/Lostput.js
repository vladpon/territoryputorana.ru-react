import React, { useEffect, useState } from 'react'

import '../TourPage/styles.scss'
import TourPageCover from '../TourPage/components/TourPageCover'
import TourPageAbout from '../TourPage/components/TourPageAbout'
import TourPageAux from '../TourPage/components/TourPageAux'
import TourPageProgram from '../TourPage/components/TourPageProgram'
import TourPageAccmmdtn from '../TourPage/components/TourPageAccmmdtn'
import PhotoBlock from '../TourPage/components/PhotoBlock'
import TextTitle from '../MainPage/components/TextTitle'
import RequestBlock from '../../components/RequestBlock/RequestBlock'
import { ScrollRestoration, useLocation } from 'react-router-dom'

import { getTourByTourId } from '../../api/tours'

import tours from '../../data/tours.json'
import MainLogo from '../../components/MainLogo/MainLogo'
import { Helmet } from 'react-helmet'
import InfoFrame from '../../components/InfoFrame/InfoFrame'

import blanktour from '../../data/blanktour.json' 

const blankTour = tours.find(tour => tour.id === 'lostput')


const photos = [
  { src: "./img/tr_ph01.jpg"},
  { src: "./img/tr_ph02.jpg"},
  { src: "./img/tr_ph03.jpg"},
  { src: "./img/tr_ph04.jpg"},
  { src: "./img/tr_ph05.jpg"},
  { src: "./img/tr_ph06.jpg"}
]

const txtTitle = {
  title: "Транспорт",
  text: [
    'Трансферы по Норильску будут выполняться на автомобилях или микроавтобусах (в зависимости от количества человек в группе).',
    'Заброска на озеро Лама и обратно будет осуществляться на скоростном закрытом катере на воздушной подушке. На активных дневных маршрутах также будут использоваться судно на воздушной подушке и моторные лодки.'
  ]
}


const Lostput = () => {

  // useEffect( () => {
  //   window.YandexRotorSettings.isLoaded = true
  // }, [])


  const [tour, setTour] = useState(blankTour);

  const location = useLocation()
  const pathname = location.pathname

  // useEffect( () => {
  //     const getNewTour = async () => {
  //       const newTour = await getTourByTourId('lostput')
  //       setTour(newTour)
  //     }
  //     getNewTour()
  // }, [])

  return (
    <main className='tour-page'>
      <Helmet>
        <title>Затерянный мир плато Путорана</title>
        <link rel="canonical" href={`https://territoryputorana.ru${pathname}`} />
        <meta name = 'description' content = 'Динамичный недельный тур на плато Путорана. Размещение с комфортом класса люкс. Трекинговые маршруты, каньоны, водопады. Водные прогулки. Вертолетные экскурсии. Гастрономический туризм.' />
      </Helmet>
        <MainLogo />
        <TourPageCover tour = {tour}/>
        <div className = "tp-about__container">
          <div className='tp-about'>
              <div className = "tp-about__main">
                  <h2>О туре</h2>
                  {tour.about && tour.about.map( (p, index) => <p key={index}>{p}</p>)}
              </div>
              <div className='tp-about__hit-container'>
                  <InfoFrame price = {tour.price} title = {tour.aboutH3} reference = {tour.reference} description = {tour.details} refSpan = {tour.refSpan}/>
                  <InfoFrame price = {tour.varPrice} title = {tour.varAboutH3} reference = {tour.varReference} description = {tour.varDetails} />
              </div>
          </div>
        </div>
        <TourPageAux/>
        <TourPageProgram tour = {tour}/>
        <TourPageAccmmdtn tour = {tour}/>
        <PhotoBlock photos = {photos}/>
        <TextTitle txtTitle = {txtTitle} />
        <RequestBlock bgImage = {'./img/lostput_req.jpg'} h2Text = {"Оставить заявку на тур"} h3Text = {"Напишите свои пожелания, мы обязательно свяжемся с вами!"}/>
    </main>
  )
}

export default Lostput