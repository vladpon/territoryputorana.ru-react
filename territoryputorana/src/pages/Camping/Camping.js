import React from 'react'
import { Link } from 'react-router-dom'

import TourPageCover from '../TourPage/components/TourPageCover'
import TourPageAbout from '../TourPage/components/TourPageAbout'
import TourPageAux from '../TourPage/components/TourPageAux'
import TourPageProgram from '../TourPage/components/TourPageProgram'
import TourPageAccmmdtn from '../TourPage/components/TourPageAccmmdtn'
import PhotoBlock from '../TourPage/components/PhotoBlock'
import TextTitle from '../MainPage/components/TextTitle'
import RequestBlock from '../../components/RequestBlock/RequestBlock'
import MainLogo from '../../components/MainLogo/MainLogo'

import tours from '../../data/tours.json'


import '../TourPage/components/styles.scss'
import '../MainPage/components/styles.scss'
import '../TourPage/styles.scss'

const tour = tours[2]

const photos = [
    { src: "./img/camp_ph01.jpg"},
    { src: "./img/camp_ph02.jpg"},
    { src: "./img/camp_ph03.jpg"}
  ]

const txtTitle = {
  title: "Транспорт",
  text: [
    'Транспортное обслуживание не включено в программу проживания. Мы можем организовать для вас:',
    'Трансферы по Норильску будут выполняться на автомобилях или микроавтобусах (в зависимости от количества человек в группе).',
    'заброску на озеро Лама и обратно на скоростном закрытом катере на воздушной подушке.'
  ]
}


const TourPage = () => {
  return (
    <main className='tour-page'>
        <MainLogo />
        <TourPageCover tour = {tour}/>
        <TourPageAbout tour = {tour}/>
        <div className = 'tp-aux__container'>
        <div className = "tp-aux">
                <h2>Дополнительно мы можем организовать для вас:</h2>
                <ul>
                  <li>Пешие и водно-пешие радиальные походы в сопровождении профессионального гида-инструктора к самым эффектным видовым локациям — водопадам и горным вершинам.</li>
                  <li>Вертолетные экскурсии.</li>
                  <li>Комплексное питание в кемпинге.</li>
                </ul>
            </div>
        </div>
        <div className = "tp-accmmdtn">
            <h2 className = "tp-accmmdtn__title">Проживание</h2>
            <p>В кемпинге созданы все условия для комфортного размещения туристов:</p>
            <ul>
                <li>Палатки для проживания с раскладушками и спальниками</li>
                <li>Кают-компания с кухней</li>
                <li>Мобильная баня</li>
                <li>Биотуалет</li>
                <li>Палатка-сушилка для снаряжения</li>
            </ul>
        </div>
        <PhotoBlock photos = {photos}/>
        <div className = 'txt-title'>
            <h2>{txtTitle.title}</h2>
            {txtTitle.text && txtTitle.text.map( (p, index) => <p key = {index}>{p}</p>)}
        </div>
        
        <RequestBlock bgImage = {'./img/camp_req.jpg'} h2Text = {"Оставить заявку на тур"} h3Text = {"Напишите свои пожелания, мы обязательно свяжемся с вами!"}/>
    </main>
  )
}

export default TourPage