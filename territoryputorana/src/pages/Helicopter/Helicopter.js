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

import tours from '../../data/tours.json'
import MainLogo from '../../components/MainLogo/MainLogo'

import '../TourPage/components/styles.scss'
import '../MainPage/components/styles.scss'

const tour = tours.find(tour => tour.id === 'helicopter')



const txtTitle = {
  title: "Транспорт",
  text: [
    'В зависимости от размера группы, места старта и маршрута экскурсия может проводиться на вертолете Ми-8 МТВ (вместимость — 9 пассажиров), на вертолете Во 105 или «Еврокоптере» (вместимость — до 4 пассажиров).'
  ]
}

const photos = [
    { src: "./img/heli_ph01.jpg"},
    { src: "./img/heli_ph02.jpg"},
    { src: "./img/heli_ph03.jpg"},
    { src: "./img/heli_ph04.jpg"},
    { src: "./img/heli_ph05.jpg"},
    { src: "./img/heli_ph06.jpg"}
  ]


const TourPage = () => {
  return (
    <main className='tour-page'>
        <MainLogo />
        <TourPageCover tour = {tour}/>
        <TourPageAbout tour = {tour}/>
        <TourPageAux/>
        <TourPageProgram tour = {tour}/>           
        <PhotoBlock photos = {photos}/>     
        <div className = 'txt-title'>
            <h2>{txtTitle.title}</h2>
            {txtTitle.text && txtTitle.text.map( (p, index) => <p key = {index}>{p}</p>)}
        </div>        
        <RequestBlock bgImage = {'./img/heli_req.jpg'} />
    </main>
  )
}

export default TourPage