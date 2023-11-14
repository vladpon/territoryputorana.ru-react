import React, { useEffect } from 'react'

import '../TourPage/styles.scss'
import TourPageCover from '../TourPage/components/TourPageCover'
import TourPageAbout from '../TourPage/components/TourPageAbout'
import TourPageAux from '../TourPage/components/TourPageAux'
import TourPageProgram from '../TourPage/components/TourPageProgram'
import TourPageAccmmdtn from '../TourPage/components/TourPageAccmmdtn'
import PhotoBlock from '../TourPage/components/PhotoBlock'
import TextTitle from '../MainPage/components/TextTitle'
import RequestBlock from '../../components/RequestBlock/RequestBlock'
import InfoFrame from '../../components/InfoFrame/InfoFrame'

import tours from '../../data/tours.json'
import MainLogo from '../../components/MainLogo/MainLogo'
import { Helmet } from 'react-helmet'
import BigCards from '../ToursPage/components/BigCards'
import { useLocation } from 'react-router-dom'

const tour = tours.find(tour => tour.id === 'heliski')

const severgrandHotel = [
  {
    "id": "severgrand",
    "title": "Севергранд",
    "season": "",
    "time": "",
    "price": "",
    "bigImg": "",
    "smallImg": "./img/severgrand_logo03.svg",
    "optImg": "",
    "description": [
        "Новый отель 3* в центре Норильска. Комфортные номера с дизайнерским ремонтом: стандарт, стандарт Superior, Junior Suite, Luxe. Сервис  премиум-уровня и теплое арктическое гостеприимство."
        ],
    "tourPhoto": [],
    "contacts": {
        "tel": "+73919457038",
        "email": "hotel@severgrand.ru",
        "site": "https://severgrand.ru"
    },
    "href": "",
    "section": "Гостиницы"
  }
]

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


const TourPage = () => {

  const location = useLocation()
  const pathname = location.pathname

  // useEffect( () => {
  //   window.YandexRotorSettings.isLoaded = true
  // }, [])

  return (
    <main className='tour-page'>
      <Helmet>
        <title>Хели-ски</title>
        <link rel="canonical" href={`https://territoryputorana.ru${pathname}`} />
        <meta name = 'description' content = 'Высокий уровень безопасности и комфорта. Маневренный вертолет. Сертифицированные горные гиды-инструкторы.' />
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
                  {/* <h2>Дополнительно</h2> */}
                  <p><b>Перепады высот:</b> 400 м — 800 м за один спуск</p>
                  <p><b>Зона катания:</b> преимущественно альпийский рельеф</p>
                  <p><b>Калькуляция летного времени: </b> поминутная, время считается от начала вращения винта и прекращается с его остановкой.</p>
              </div>
          </div>
        <TourPageProgram tour = {tour}/>
        <div className = "tp-accmmdtn">
            <h2 className = "tp-accmmdtn__title">Открыто бронирование: февраль-июнь 2024 </h2>
            <p><b>для организованных (частных) групп</b> </p>
        </div>
        <div className = 'partners-page__content'>
          <BigCards content = {severgrandHotel}/>
        </div>
        
        <RequestBlock bgImage = {'./img/helireqback.JPG'} h2Text = {"Оставить заявку на тур"} h3Text = {"Напишите свои пожелания, мы обязательно свяжемся с вами!"}/>
    </main>
  )
}

export default TourPage