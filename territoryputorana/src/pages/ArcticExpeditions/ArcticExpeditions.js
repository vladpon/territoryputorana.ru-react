import React, { useEffect } from 'react'

import { Helmet } from 'react-helmet'
import MainLogo from '../../components/MainLogo/MainLogo'

import './styles.scss'
import WideCards from '../../components/WideCards/WideCards'

import expeditions from '../../data/expeditions.json'
import TourPageCover from '../TourPage/components/TourPageCover'
import { useLocation } from 'react-router-dom'
import WhiteTextBlock from '../../components/WhiteTextBlock/WhiteTextBlock'

const content = expeditions.map( (item) => {
    // let {small_description, ...obj} = {description: item.small_description, ...item}
    let obj = {
        description: item.small_description,
        id: item.id,
        title: item.title,
        href: item.href,
        img: item.smallImg,
        pale: item.period
    }
    return obj
})

const coverImg = './img/DSC00308.jpg'

const coverData = {
  title: 'Исследовательский проект',
  bigImg: coverImg
}

const ArcticExpeditions = () => {

  const location = useLocation()
  const pathname = location.pathname

  // useEffect( () => {
  //   window.YandexRotorSettings.isLoaded = true
  // }, [])

  return (
    <main className='page-container'>
      <Helmet>
        <title>Экспедиции Арктики</title>
        <link rel="canonical" href={`https://territoryputorana.ru${pathname}`} />
        <meta name = 'description' content = 'Экспедиции Арктики – разработка маршрутов экологического и познавательного туризма на плато Путорана. Объединенная дирекция заповедников Таймыра. Путоранский заповедник. Территория Путорана.' />
      </Helmet>
      <TourPageCover tour = {coverData}/>
      <MainLogo logoImg = './img/arcticLogo3.svg' backgroundColor = '#fff'/>

      <WhiteTextBlock 
        title = 'Как появляются новые туристические маршруты?'
        text = {[
          'В любом проекте все начинается с идеи, она может возникнуть из природных особенностей, краеведческого исследования или научной гипотезы. Изучаются карты и документы, составляется план, несколько пилотных вылазок и большая экспедиция, в результате которой прокладывается маршрут, отмечаются точки притяжения, видовые локации и интересные туристические объекты.',
          'Целью нашего проекта «Экспедиции Арктики» является разработка маршрутов экологического и познавательного туризма в буферной зоне заповедника «Путоранский». Наша задача соблюсти баланс между природохранной деятельностью и развитием туристической индустрии на уникальной арктической территории плато Путорана.',
          'Мы благодарим наших партнеров - объединенную дирекцию «Заповедников Таймыра» и «Клуб исследователей Таймыра – за поддержку и сотрудничество при организации и проведении экспедиций.'
        ]}
        />
      
      <div className = 'page-container__content'>            
          <div className="page-container__title">
              <h1>Экспедиции Арктики</h1>
              <h3>исследовательский проект</h3>
          </div>
          <WideCards content = {content}/>
      </div>
    </main>
  )
}

export default ArcticExpeditions