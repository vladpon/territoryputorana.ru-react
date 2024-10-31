import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../TourPage/styles.scss'

import TourPageCover from '../TourPage/components/TourPageCover'
import TourPageAbout from '../TourPage/components/TourPageAbout'
import TourPageAux from '../TourPage/components/TourPageAux'
import MainLogo from '../../components/MainLogo/MainLogo'
import TourPageProgram from '../TourPage/components/TourPageProgram'
import TourPageAccmmdtn from '../TourPage/components/TourPageAccmmdtn'
import PhotoBlock from '../TourPage/components/PhotoBlock'
import TextTitle from '../MainPage/components/TextTitle'
import RequestBlock from '../../components/RequestBlock/RequestBlock'


// import { getTourByTourId } from '../../api/tours'
import { getTourById } from '../../api/tours'
// 

import { Helmet } from 'react-helmet'

import blankTour from '../../data/blanktour.json' 



const txtTitle = {
  title: "Транспорт",
  text: [
    'Трансферы по Норильску будут выполняться на автомобилях или микроавтобусах (в зависимости от количества человек в группе).',
    'Заброска на озеро Лама и обратно будет осуществляться на скоростном закрытом катере на воздушной подушке. На активных дневных маршрутах также будут использоваться судно на воздушной подушке и моторные лодки.'
  ]
}


const PutoranaTrails = () => {


  const [tour, setTour] = useState(blankTour);

  const location = useLocation()
  const pathname = location.pathname

  useEffect( () => {
      const getNewTour = async () => {
        const newTour = await getTourById('putoranatrails')
        setTour(newTour)
      }
      getNewTour()
  }, [])

  return (
    <main className='tour-page'>
      <Helmet>
        <title>Тропами Путорана | Активный треккинг: приключения в дикой природе | Туры на плато Путорана</title>
        <link rel="canonical" href={`https://territoryputorana.ru${pathname}`} />
        <meta name = 'description' content = 'Тропами Путорана | Активный треккинг: приключения в дикой природе | Туры на плато Путорана | Ежедневные радиальные выходы Размер группы: 12 человек Продолжительность: 8 дней / 7 ночей Проживание: 6 ночей – благоустроенная усадьба на озере Лама. 1 ночь – гостиница в Норильске Уровень: хорошая спортивная форма Стоимость за группу: 3 300 000 руб. от 275 000 руб/чел.' />
      </Helmet>
        <MainLogo />
        <TourPageCover tour = {tour}/>
        <TourPageAbout tour = {tour} varInfoframe = {false}/>\
        <TourPageAux title = 'Дополнительно' content = {<p>За дополнительную плату вы можете заказать <Link to = '/helitour'>вертолетную экскурсию</Link>, чтобы облететь наиболее живописные и недоступные уголки плато Путорана. Вы увидите высочайшие в России водопады, над которыми часто образуется радуга, и каньоны — такие глубокие, что на дне запросто можно спрятать Эйфелеву башню.</p>}/>
        <TourPageProgram tour = {tour}/>
        <TourPageAccmmdtn />
        <PhotoBlock photos = {tour.tourPhoto}/>
        <TextTitle txtTitle = {txtTitle} />
        <RequestBlock bgImage = {'./img/putoranatrails_req.jpg'} h2Text = {"Оставить заявку на тур"} h3Text = {"Оставьте заявку и мы обязательно Вам ответим"}/>
    </main>
  )
}

export default PutoranaTrails