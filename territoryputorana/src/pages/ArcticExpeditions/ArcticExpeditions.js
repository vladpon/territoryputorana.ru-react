import React from 'react'

import { Helmet } from 'react-helmet'
import MainLogo from '../../components/MainLogo/MainLogo'

import './styles.scss'
import WideCards from '../../components/WideCards/WideCards'

import expeditions from '../../data/expeditions.json'

const content = expeditions.map( (item) => {
    // let {small_description, ...obj} = {description: item.small_description, ...item}
    let obj = {
        description: item.small_description,
        id: item.id,
        title: item.title,
        href: item.href,
        img: item.smallImg
    }
    return obj
})

const ArcticExpeditions = () => {
  return (
    <main className='tours-page'>
      <Helmet>
        <title>Экспедиции Арктики</title>
        <meta name = 'description' content = 'Экспедиции Арктики – разработка маршрутов экологического и познавательного туризма на плато Путорана. Объединенная дирекция заповедников Таймыра. Путоранский заповедник. Территория Путорана.' />
      </Helmet>
        <div className = 'tours-page__content'>
            <MainLogo />
            <div className="tours-page__title">
                <h1>Экспедиции Арктики</h1>
                <h3>исследовательский проект</h3>
            </div>
            <WideCards content = {content}/>
        </div>
    </main>
  )
}

export default ArcticExpeditions