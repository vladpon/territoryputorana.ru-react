import React, { useEffect, useState } from 'react'


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
import '../TourPage/styles.scss'
import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom'
import InfoFrame from '../../components/InfoFrame/InfoFrame'
import { getTourById } from '../../api/tours'

import blankTour from '../../data/blanktour.json' 

// const tour = tours.find(tour => tour.id === 'skitour')
// const tourPhotos = tour.tourPhotos.map( (photo) => {
//         return {src: photo}
//     })


const txtTitle = {
  title: "Транспорт",
  text: [
    'Трансфер до глэмпинга высокопроходимыми машинами на пневмоколесах типа ТРЭКОЛ либо на снегоходах BRP (в зависимости от погодных условий).',
    'Трансфер из аэропорта и в аэропорт комфортабельными автобусами.',
    'Сопровождение гидом на весь период тура.'
  ]
}


const TourPage = () => {

  const [tour, setTour] = useState(blankTour);

  // useEffect( () => {
  //   window.YandexRotorSettings.isLoaded = true
  // }, [])

  useEffect( () => {
      const getNewTour = async () => {
        const newTour = await getTourById('skitour')
        setTour(newTour)
      }
      getNewTour()
  }, [])

  

  const location = useLocation()
  const pathname = location.pathname

  return (
    <main className='tour-page'>
      <Helmet>
        <title>Ски-тур</title>
        <link rel="canonical" href={`https://territoryputorana.ru${pathname}`} />
        <meta name = 'description' content = 'Недельный лыжный тур на плато Путорана. Комфортабельный теплый глэмпинг. Авторские маршруты. Профессиональные гиды.' />
      </Helmet>
        <MainLogo />
        <TourPageCover tour = {tour}/>
        {/* <div className = "tp-about__container">
          <div className='tp-about'>
              <div className = "tp-about__main">
                  <h2>О туре</h2>
                  {tour.about && tour.about.map( (p, index) => <p key={index}>{p}</p>)}
              </div>
              <div className='tp-about__hit-container'>
                  <InfoFrame price = {tour.price} title = {tour.aboutH3} reference = {tour.reference} description = {tour.details} refSpan = {tour.refSpan} included = {tour.included}/>   
                  <InfoFrame price = {tour.varPrice} title = {tour.varAboutH3} reference = {tour.varReference} description = {tour.varDetails} included = {tour.varIncluded}/>             
              </div>
          </div>
        </div> */}
        <TourPageAbout tour = {tour} varInfoframe = {false} />
        <div className = 'tp-aux__container'>
          <div className = "tp-aux">
                  <p>Маршруты ски-тура построены таким образом, чтобы показать вам самые впечатляющие зимние пейзажи плато Путорана. В пути гармонично выстроены подъемы, спуски и переходы по снежным просторам.</p>
              </div>
        </div>


        <TourPageProgram tour = {tour}/>

        <div className = "tp-accmmdtn">
            <p style={{textAlign: "center"}}>Для перевозки участников ски-тура к месту расположения базового лагеря мы используем вездеходы СеверТрак или Ратрак. Гости размещаются в Хижине с необходимыми для комфортного размещения условиями. Приготовление еды осуществляется участниками ски-тура самостоятельно. Хозяйственный работник обеспечивает постоянный порядок и уют в базовом лагере. Для обеспечения безопасности и экстренной эвакуации в лагере находится дежурный снегоход.</p>
        </div>
 
        <PhotoBlock photos = {tour.tourPhoto} />
        
        <RequestBlock bgImage = {'./img/ski01.jpg'} h2Text = {"Оставить заявку на тур"} h3Text = {"Напишите свои пожелания, мы обязательно свяжемся с вами!"}/>
    </main>
  )
}

export default TourPage