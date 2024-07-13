import React, { useEffect } from 'react'

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
import InfoFrame from '../../components/InfoFrame/InfoFrame'
import { useLocation } from 'react-router-dom'

const tour = tours.find(tour => tour.id === 'helitour')



const txtTitle = {
  title: "Транспорт",
  text: [
    "Экскурсия проводится на вертолете ВО 105 или Еврокоптер (вместимость — до 4 пассажиров)."
  ]
}

const photos = [
    { src: "./img/Od99fMw5ojM.jpg"},
    { src: "./img/oYi5YOvlld4.jpg"},
    { src: "./img/lLX24UXsvfA.jpg"},
    { src: "./img/ivhpw7jJTqE.jpg"},
    { src: "./img/bl91DKY32eM.jpg"},
    { src: "./img/VMWR0zV93xI.jpg"},
    { src: "./img/3ea0783b-8d9f-4b23-a045-755e9790eef7.jpg"},
    { src: "./img/4dcab409-5afb-4833-981f-549c9e63a85b (1).jpg"},
    { src: "./img/22013fa1-f1bc-4196-a78f-c703fc45d508.jpg"}
  ]


const HeliTour = () => {



  const location = useLocation()
  const pathname = location.pathname

  // useEffect( () => {
  //   window.YandexRotorSettings.isLoaded = true
  // }, [])


  return (
    <main className='tour-page'>
      <Helmet>
        <title>Вертолетная экскурсия </title>
        <link rel="canonical" href={`https://territoryputorana.ru${pathname}`} />
        <meta name = 'description' content = 'Увидеть первозданную красоту природы с высоты птичьего полета? Вертолетная экскурсия гарантирует полный восторг и незабываемые впечатления!' />
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
                  <InfoFrame price = {tour.price} title = {tour.aboutH3} reference = {tour.reference} description = {tour.details} refSpan = {tour.refSpan} clothes = {tour.clothes}/>
              </div>
            </div>
        </div>


        <TourPageProgram tour = {tour}/>
        <div className = 'txt-title'>
            <h2>{txtTitle.title}</h2>
            {txtTitle.text && txtTitle.text.map( (p, index) => <p key = {index}>{p}</p>)}
        </div>

        <div className='map'>
          <h2>Карта маршрута</h2>
          <img src='./img/helimap.jpg'></img>
        </div>

        <PhotoBlock photos = {photos}/>

        <RequestBlock bgImage = {'./img/helire.jpg'}  h2Text = {"Оставить заявку на тур"} h3Text = {"Напишите свои пожелания, мы обязательно свяжемся с вами!"}/>
    </main>
  )
}

export default HeliTour