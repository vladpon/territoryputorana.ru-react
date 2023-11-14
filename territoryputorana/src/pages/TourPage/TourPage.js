import React, { useEffect } from 'react'

import './styles.scss'
import TourPageCover from './components/TourPageCover'
import TourPageAbout from './components/TourPageAbout'
import TourPageAux from './components/TourPageAux'
import TourPageProgram from './components/TourPageProgram'
import TourPageAccmmdtn from './components/TourPageAccmmdtn'
import PhotoBlock from './components/PhotoBlock'
import TextTitle from '../MainPage/components/TextTitle'
import RequestBlock from '../../components/RequestBlock/RequestBlock'

import tours from '../../data/tours.json'

const tour = tours[0]

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

  // useEffect( () => {
  //   window.YandexRotorSettings.isLoaded = true
  // }, [])


  return (
    <main className='tour-page'>
        <TourPageCover tour = {tour}/>
        <TourPageAbout tour = {tour}/>
        <TourPageAux/>
        <TourPageProgram tour = {tour}/>
        <TourPageAccmmdtn tour = {tour}/>
        <PhotoBlock photos = {photos}/>
        <TextTitle txtTitle = {txtTitle} />
        <RequestBlock backgroundImage = {'./img/lostput_req.jpg'} />
    </main>
  )
}

export default TourPage