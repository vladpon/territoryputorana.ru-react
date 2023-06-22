import React from 'react'


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

const tour = tours.find(tour => tour.id === 'skitour')



const txtTitle = {
  title: "Транспорт",
  text: [
    'Трансфер до глэмпинга высокопроходимыми машинами на пневмоколесах типа ТРЭКОЛ либо на снегоходах BRP (в зависимости от погодных условий).',
    'Трансфер из аэропорта и в аэропорт комфортабельными автобусами.',
    'Сопровождение гидом на весь период тура.'
  ]
}


const TourPage = () => {
  return (
    <main className='tour-page'>
        <MainLogo />
        <TourPageCover tour = {tour}/>
        <TourPageAbout tour = {tour}/>
        <TourPageProgram tour = {tour}/>
        <div className = "tp-accmmdtn">
            <h2 className = "tp-accmmdtn__title">Проживание</h2>
            <p>Комфортабельный глэмпинг из теплых трехслойных палаток с отопителем.</p>
            <p>В глэмпинге располагаются: палатки для проживания, кухня, столовая, мобильная баня, сушилка, туалет.</p>            
        </div>
        <div className = 'txt-title light-back'>
            <h2>{txtTitle.title}</h2>
            {txtTitle.text && txtTitle.text.map( (p, index) => <p key = {index}>{p}</p>)}
        </div>
        
        <RequestBlock bgImage = {'./img/ski01.jpg'} h2Text = {"Оставить заявку на тур"} h3Text = {"Напишите свои пожелания, мы обязательно свяжемся с вами!"}/>
    </main>
  )
}

export default TourPage