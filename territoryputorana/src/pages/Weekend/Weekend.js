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

const tour = tours[1]



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
        <div className = "tp-accmmdtn">
            <h2 className = "tp-accmmdtn__title">Проживание</h2>
            <p>Уютная турбаза на живописном озере Лама:</p>
            <ul>
                <li>Размещение в деревянных домиках по 2-4 человека</li>
                <li>Баня</li>
                <li>Беседка с мангалом для жарки шашлыков</li>
                <li>Снаряжение для рыбалки</li>
            </ul>
        </div>
        <div className = 'txt-title light-back'>
            <h2>{txtTitle.title}</h2>
            {txtTitle.text && txtTitle.text.map( (p, index) => <p key = {index}>{p}</p>)}
        </div>
        
        <RequestBlock bgImage = {'./img/weekend02.jpg'} />
    </main>
  )
}

export default TourPage