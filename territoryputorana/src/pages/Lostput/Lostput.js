import React from 'react'

import '../TourPage/styles.scss'
import TourPageCover from '../TourPage/components/TourPageCover'
import TourPageAbout from '../TourPage/components/TourPageAbout'
import TourPageAux from '../TourPage/components/TourPageAux'
import TourPageProgram from '../TourPage/components/TourPageProgram'
import TourPageAccmmdtn from '../TourPage/components/TourPageAccmmdtn'
import PhotoBlock from '../TourPage/components/PhotoBlock'
import TextTitle from '../MainPage/components/TextTitle'
import RequestBlock from '../../components/RequestBlock/RequestBlock'
import { ScrollRestoration } from 'react-router-dom'

import tours from '../../data/tours.json'
import MainLogo from '../../components/MainLogo/MainLogo'

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
  return (
    <main className='tour-page'>
        <MainLogo />
        <TourPageCover tour = {tour}/>
        <TourPageAbout tour = {tour}/>
        <TourPageAux/>
        <TourPageProgram tour = {tour}/>
        <TourPageAccmmdtn tour = {tour}/>
        <PhotoBlock photos = {photos}/>
        <TextTitle txtTitle = {txtTitle} />
        <RequestBlock bgImage = {'./img/lostput_req.jpg'} h2Text = {"Оставить заявку на тур"} h3Text = {"Напишите свои пожелания, мы обязательно свяжемся с вами!"}/>
    </main>
  )
}

export default TourPage