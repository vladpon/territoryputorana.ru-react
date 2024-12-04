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
import { getTourById } from '../../api/tours'

import MainLogo from '../../components/MainLogo/MainLogo'
import { Helmet } from 'react-helmet'

import blankTour from '../../data/blanktour.json' 



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

  useEffect( () => {
      const getNewTour = async () => {
        const newTour = await getTourById('lostput')
        setTour(newTour)
      }
      getNewTour()
  }, [])

  return (
    <main className='tour-page'>
      <Helmet>
        <title>Затерянный мир плато Путорана</title>
        <link rel="canonical" href={`https://territoryputorana.ru${pathname}`} />
        <meta name = 'description' content = 'Динамичный недельный тур на плато Путорана. Размещение с комфортом класса люкс. Трекинговые маршруты, каньоны, водопады. Водные прогулки. Вертолетные экскурсии. Гастрономический туризм.' />
      </Helmet>
        <MainLogo />
        <TourPageCover tour = {tour}/>
        <TourPageAbout tour = {tour} varInfoframe = {true}/>\
        <TourPageAux/>
        <TourPageProgram tour = {tour}/>
        <TourPageAccmmdtn />
        <PhotoBlock photos = {tour.tourPhoto}/>
        <TextTitle txtTitle = {txtTitle} />
        <RequestBlock bgImage = {'./img/lostputreq.jpg'} h2Text = {"Оставить заявку на тур"} h3Text = {"Заполните форму, и мы ответим Вам в ближайшее время!"}/>
    </main>
  )
}

export default Lostput