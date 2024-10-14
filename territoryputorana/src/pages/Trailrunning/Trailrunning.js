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
import { useLocation } from 'react-router-dom'
import { getTourById } from '../../api/tours'

import MainLogo from '../../components/MainLogo/MainLogo'
import { Helmet } from 'react-helmet'


import blankTour from '../../data/blanktour.json' 



const txtTitle = {
  title: "Транспорт",
  text: [
    'Трансферы по Норильску будут выполняться на автомобилях или микроавтобусах (в зависимости от количества человек в группе).',
    'Заброска на озеро Лама и обратно будет осуществляться на скоростном закрытом катере на воздушной подушке.',
    'При необходимости на активных дневных маршрутах также будут использоваться судно на воздушной подушке и моторные лодки.'
  ]
}


const Trailrunning = () => {

  // useEffect( () => {
  //   window.YandexRotorSettings.isLoaded = true
  // }, [])

  const [tour, setTour] = useState(blankTour);

  useEffect( () => {
    const getNewTour = async () => {
      const newTour = await getTourById('trailrunning')
      setTour(newTour)
    }
    getNewTour()
}, [])



  const location = useLocation()
  const pathname = location.pathname

  return (
    <main className='tour-page'>
      <Helmet>
        <title>Трейлраннинг кемп</title>
        <link rel="canonical" href={`https://territoryputorana.ru${pathname}`} />
        <meta name = 'description' content = 'Недельный трейлраннинг-кемп на плато Путорана. Беговые маршруты в уникальных природных локациях: горы, каньоны, водопады. Размещение с комфортом класса люкс.' />
      </Helmet>
        <MainLogo />
        <TourPageCover tour = {tour}/>

        <TourPageAbout tour = {tour} varInfoframe = {false}/>


        <TourPageAux/>
        <TourPageProgram tour = {tour}/>
        <TourPageAccmmdtn />
        <PhotoBlock photos = {tour.tourPhoto}/>
        <TextTitle txtTitle = {txtTitle} />
        <RequestBlock bgImage = {'./img/trail_req.jpg'} h2Text = {"Оставить заявку на тур"} h3Text = {"Напишите свои пожелания, мы обязательно свяжемся с вами!"}/>
    </main>
  )
}

export default Trailrunning