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
  title: "Обеспечение тура",
  text: [
    'Для перевозки участников скитура к месту расположения базового лагеря мы используем вездеходы Север-Трак. Гости размещаются в благоустроенном гостевом доме на усадьбе «Жар. Птица», где созданы все необходимые для комфортного отдыха условия, в том числе баня и био-туалет. Приготовление еды может осуществляться участниками скитура самостоятельно либо с привлечением нашего повара. Хозяйственный работник отвечает за постоянный порядок и уют в базовом лагере. Для обеспечения безопасности и экстренной эвакуации в лагере находится дежурный снегоход, организована спутниковая связь.'
  ]
}


const Skilama = () => {

  // useEffect( () => {
  //   window.YandexRotorSettings.isLoaded = true
  // }, [])


  const [tour, setTour] = useState(blankTour);

  const location = useLocation()
  const pathname = location.pathname

  useEffect( () => {
      const getNewTour = async () => {
        const newTour = await getTourById('skilama')
        setTour(newTour)
      }
      getNewTour()
  }, [])

  return (
    <main className='tour-page'>
      <Helmet>
        <title>Скитур долина озера Лама</title>
        <link rel="canonical" href={`https://territoryputorana.ru${pathname}`} />
        <meta name = 'description' content = '' />
      </Helmet>
        <MainLogo />
        <TourPageCover tour = {tour}/>
        <TourPageAbout tour = {tour} varInfoframe = {false}/>\
        <TourPageProgram tour = {tour}/>
        <PhotoBlock photos = {tour.tourPhoto}/>
        <TextTitle txtTitle = {txtTitle} />
        <RequestBlock bgImage = {'./img/skilama/skilama_req.jpg'} h2Text = {"Оставить заявку на тур"} h3Text = {"Заполните форму, и мы ответим Вам в ближайшее время!"}/>
    </main>
  )
}

export default Skilama