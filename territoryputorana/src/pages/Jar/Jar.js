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
import { Link } from 'react-router-dom'

import tours from '../../data/tours.json'
import MainLogo from '../../components/MainLogo/MainLogo'
import { Helmet } from 'react-helmet'
import InfoFrame from '../../components/InfoFrame/InfoFrame'
import { getTourById } from '../../api/tours'

// const tour = tours.find(tour => tour.id === 'jar')
import blankTour from '../../data/blanktour.json' 

const txtTitle = {
  title: "Транспорт",
  text: [
    'Трансферы по Норильску будут выполняться на автомобилях или микроавтобусах (в зависимости от количества человек в группе). Заброска на озеро Лама и обратно будет осуществляться на скоростном закрытом катере на воздушной подушке. На активных дневных маршрутах также будут использоваться судно на воздушной подушке и моторные лодки.'
  ]
}


const TourPage = () => {

  const [tour, setTour] = useState(blankTour);

  // useEffect( () => {
  //   window.YandexRotorSettings.isLoaded = true
  // }, [])

  useEffect( () => {
    const getNewTour = async () => {
      const newTour = await getTourById('jar')
      setTour(newTour)
    }
    getNewTour()
}, [])

  const location = useLocation()
  const pathname = location.pathname

  return (
    <main className='tour-page'>
      <Helmet>
        <title>Усадьба Жар. Птица</title>
        <link rel="canonical" href={`https://territoryputorana.ru${pathname}`} />
        <meta name = 'description' content = 'Озеро Лама – самое знаменитое озеро плато Путорана. Комфорт и сервис класса люкс. Гастрономическое сопровождение. Вертолетные экскурсии. Водные прогулки. Радиальные маршруты.' />
      </Helmet>
        <MainLogo />
        <TourPageCover tour = {tour}/>
        <TourPageAbout tour = {tour} varInfoframe = {false}/>

        {/* <div className = "tp-about__container">
          <div className='tp-about'>
              <div className = "tp-about__main">
                  <h2>О туре</h2>
                  {tour.about && tour.about.map( (p, index) => <p key={index}>{p}</p>)}
              </div>
              <div className='tp-about__hit-container'>
                  <InfoFrame price = {tour.price} title = {tour.detailsTitle} reference = {tour.reference} refSpan = {tour.refSpan} description = {tour.details} included = {tour.included} clothes = {tour.clothes}/>
                  
              </div>
            </div>
        </div> */}


        <div className = 'tp-aux__container'>
        <div className = "tp-aux">
                <h2>Во время отдыха мы можем организовать для вас:</h2>
                <ul>
                    <li>водно-пешие экскурсии по достопримечательностям и потрясающим видовым локациям плато Путорана,</li>
                    <li><Link to = '/helitour'>вертолетные экскурсии</Link> в Путоранский заповедник,</li>
                    <li>гастрономический ужин из адаптированных блюд национальной северной кухни с олениной и северной рыбой,</li>
                    <li>пикник на горной вершине или возле водопада,</li>
                    <li>рыбалку.</li>
                </ul>
            </div>
        </div>
        <PhotoBlock photos = {tour.tourPhoto}/>
        <TextTitle txtTitle = {txtTitle} />
        <RequestBlock bgImage = {'./img/jar_req.jpg'} h2Text = {"Оставить заявку на тур"} h3Text = {"Напишите свои пожелания, мы обязательно свяжемся с вами!"}/>
    </main>
  )
}

export default TourPage