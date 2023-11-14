import React, { useEffect } from 'react'


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

const tour = tours.find(tour => tour.id === 'skitour')
const tourPhotos = tour.tourPhotos.map( (photo) => {
        return {src: photo}
    })


const txtTitle = {
  title: "Транспорт",
  text: [
    'Трансфер до глэмпинга высокопроходимыми машинами на пневмоколесах типа ТРЭКОЛ либо на снегоходах BRP (в зависимости от погодных условий).',
    'Трансфер из аэропорта и в аэропорт комфортабельными автобусами.',
    'Сопровождение гидом на весь период тура.'
  ]
}


const TourPage = () => {

  // useEffect( () => {
  //   window.YandexRotorSettings.isLoaded = true
  // }, [])

  

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
        <div className = "tp-about__container">
          <div className='tp-about'>
              <div className = "tp-about__main">
                  <h2>О туре</h2>
                  {tour.about && tour.about.map( (p, index) => <p key={index}>{p}</p>)}
              </div>
              <div className='tp-about__hit-container'>
                  <InfoFrame price = {tour.price} title = {tour.aboutH3} reference = {tour.reference} description = {tour.details} refSpan = {tour.refSpan} included = {tour.included}/>                
              </div>
          </div>
        </div>
        <div className = 'tp-aux__container'>
          <div className = "tp-aux">
                  <p>Маршруты ски-тура построены таким образом, чтобы показать вам самые впечатляющие зимние пейзажи плато Путорана. В пути гармонично выстроены подъемы, спуски и переходы по снежным просторам.</p>
              </div>
          </div>
        {/* <div className = "tp-accmmdtn">
            <h2 className = "tp-accmmdtn__title">Проживание</h2>
            <p>Комфортабельный глэмпинг из теплых трехслойных палаток с отопителем.</p>
            <p>В глэмпинге располагаются: палатки для проживания, кухня, столовая, мобильная баня, сушилка, туалет.</p>            
        </div> */}
        {/* <div className = 'txt-title light-back'>
            <h2>{txtTitle.title}</h2>
            {txtTitle.text && txtTitle.text.map( (p, index) => <p key = {index}>{p}</p>)}
        </div> */}
 
        <PhotoBlock photos = {tourPhotos} />
        
        <RequestBlock bgImage = {'./img/ski01.jpg'} h2Text = {"Оставить заявку на тур"} h3Text = {"Напишите свои пожелания, мы обязательно свяжемся с вами!"}/>
    </main>
  )
}

export default TourPage