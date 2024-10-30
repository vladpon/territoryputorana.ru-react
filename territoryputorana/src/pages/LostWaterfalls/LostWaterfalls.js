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

import tours from '../../data/tours.json'
import MainLogo from '../../components/MainLogo/MainLogo'

import '../TourPage/components/styles.scss'
import '../MainPage/components/styles.scss'
import { Helmet } from 'react-helmet'
import InfoFrame from '../../components/InfoFrame/InfoFrame'
import { Link, useLocation } from 'react-router-dom'
import { getTourById } from '../../api/tours'


import blankTour from '../../data/blanktour.json' 
// const tour = tours.find(tour => tour.id === 'lostwaterfalls')



const txtTitle = {
  title: "Транспорт",
  text: [
    "Трансферы по Норильску будут выполняться на автомобилях или микроавтобусах вип-класса",
    "Заброска на плато Путорана на вертолете Ми 8.",
    "Водные экскурсии и возвращение в Норильск будут осуществляться на скоростном закрытом судне на воздушной подушке.",
    "Вертолетные экскурсии будут проводиться на вертолете ВО 105 или Еврокоптер (вместимость — до 4 пассажиров)."
  ]
}



const LostWaterfalls = () => {

  const [tour, setTour] = useState(blankTour);

  const location = useLocation()
  const pathname = location.pathname

  useEffect( () => {
    const getNewTour = async () => {
      const newTour = await getTourById('lostwaterfalls')
      setTour(newTour)
    }
    getNewTour()
}, [])

  // useEffect( () => {
  //   window.YandexRotorSettings.isLoaded = true
  // }, [])

  return (
    <main className='tour-page'>
      <Helmet>
        <title>VIP-тур</title>
        <link rel="canonical" href={`https://territoryputorana.ru${pathname}`} />
        <meta name = 'description' content = 'Исследуйте с нами заповедный мир плато Путорана!' />
      </Helmet>
        <MainLogo />
        <TourPageCover tour = {tour}/>
        <TourPageAbout tour = {tour} varInfoframe = {true} />

        {/* <div className = "tp-about__container">
          <div className='tp-about'>
              <div className = "tp-about__main">
                  <h2>О туре</h2>
                  {tour.about && tour.about.map( (p, index) => <p key={index}>{p}</p>)}
              </div>
              <div className='tp-about__hit-container'>
                  <InfoFrame price = {tour.price} title = {tour.aboutH3} reference = {tour.reference} refSpan = {tour.refSpan} description = {tour.details} included = {tour.included} clothes = {tour.clothes}/>
                  <InfoFrame title = {tour.varAboutH3} description = {tour.varDetails} />
              </div>
            </div>
        </div> */}


        <TourPageProgram tour = {tour}/>

        <div className = "tp-accmmdtn">
            <h2 className = "tp-accmmdtn__title">Проживание</h2>
            <p>На усадьбе <b><u><Link to = '/jar'>«Жар. Птица»</Link></u></b> созданы все условия для того, чтобы вы могли насладиться красотами северной природы, не лишая себя привычного сервиса и комфорта:</p>
            <ul>
                <li>Комфортабельные гостевые дома для одно- и двухместного размещения, с душем и санузлом</li>
                <li>Баня с просторной комнатой отдыха и купелью с кристально чистой речной водой на террасе</li>
                <li>Беседка-барбекю</li>
                <li>Спутниковое телевидение, телефон и интернет</li>
                <li>Снаряжение для сапбординга, пакрафтинга, рыбалки</li>
            </ul>
        </div>

        <PhotoBlock photos = {tour.tourPhoto}/>
        <div className = 'txt-title light-back'>
            <h2>{txtTitle.title}</h2>
            {txtTitle.text && txtTitle.text.map( (p, index) => <p key = {index}>{p}</p>)}
        </div>

        {/* <div className = "tp-accmmdtn">
            <p><h3>Включено в стоимость</h3></p>
            <ul>
                <li>размещение на базе отдыха на озере Лама (2 ночи) и в гостинице в Норильске (1 ночь)</li>
                <li>трехразовое питание от шеф-повара с блюдами национальной кухни и винной картой (в день 1)</li>
                <li>фрахт вертолета Ми-8 в день 1 (5 часов летного времени); вертолета BO-105 в дни 2 и 3 (10 часов летного времени)</li>
                <li>трансферы из аэропорта Норильска на вертолетную площадку и из гостиницы в аэропорт</li>
                <li>транспортное обслуживание по программе (судно на воздушной подушке «Нептун 23»)</li>
                <li>услуги гида и профессионального шеф-повара</li>
                <li>аренда гидроциклов, пакрафтов и сапбордов </li>
                <li>аренда рыболовного инвентаря (спиннинг, катушка, леска, блесна)</li>
                <li>оформление разрешения на посещение Путоранского заповедника</li>
            </ul>
            <br />
            <p><h3>Оплатить дополнительно</h3></p>
            <ul>
              <li>авиабилеты в Норильск (от 30 000 руб./чел. в обе стороны)</li>
              <li>ужин в заключительный день</li>
              <li>алкогольные напитки в меню (по согласованию с группой)</li>
            </ul>
        </div> */}

        
        <RequestBlock bgImage = {'./img/heli_footer.jpg'}  h2Text = {"Оставить заявку на тур"} h3Text = {"Напишите свои пожелания, мы обязательно свяжемся с вами!"}/>
    </main>
  )
}

export default LostWaterfalls