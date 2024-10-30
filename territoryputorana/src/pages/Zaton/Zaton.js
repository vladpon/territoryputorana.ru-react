import React, { useEffect } from 'react'
import MainLogo from '../../components/MainLogo/MainLogo'
import TourPageCover from '../TourPage/components/TourPageCover'

import './styles.scss'
import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom'
import TextTitle from '../MainPage/components/TextTitle'
import PhotoBlock from '../TourPage/components/PhotoBlock'
import RequestBlockProjects from '../../components/RequestBlockProjects/RequestBlockProjects'

const zaton = {
    title: 'Краеведческая экспедиция «Затон-Через»',
    bigImg: './img/zaton_cover.jpg'
}

const txtTitle = {
    title: "",
    text: [
      'На историческом фото - место зимовки кораблей и барж у поселка Через. Мы точно установили это место с фотографии и совершили там тестовое погружение.',
      'Дальнейший план нашей работы направлен на то, чтобы изучить артефакты и исторические свидетельства, определить, можно ли использовать какие-то строения для организации пунктов остановки туристических групп, какие краеведческие экскурсии можно организовать с посещением этой местности. А также составить план экологической очистки природной территории от оставленного промышленного мусора.',
      'В этом и есть главная цель нашего проекта «Экспедиции Арктики».'
    ]
  }

  const photos = [
    { path: "./img/zaton1.jpg", alt: ""},
    { path: "./img/zaton2.jpg", alt: ""},
    { path: "./img/zaton3.jpg", alt: ""},
    { path: "./img/zaton4.jpg", alt: ""},
    { path: "./img/zaton5.jpg", alt: ""},
    { path: "./img/zaton7.jpg", alt: ""}
  ]

const Zaton = () => {

  const location = useLocation()
  const pathname = location.pathname

  // useEffect( () => {
  //   window.YandexRotorSettings.isLoaded = true
  // }, [])


  return (
    <main>
        <Helmet>
            <title>Краеведческая экспедиция</title>
            <link rel="canonical" href={`https://territoryputorana.ru${pathname}`} />
            <meta name = 'description' content = 'Урочище Через — земля предков местного населения — через эту местность проходил путь купцов за пушниной и многие северные экспедиции.' />
        </Helmet>
        <MainLogo logoImg = './img/arcticLogo3.svg' backgroundColor = '#fff'/>
        <TourPageCover tour = {zaton} />
        <div className = 'tp-aux__container'>
          <div className = "tp-aux">
              <p>Совместно с «Клубом исследователей Таймыра» и «Лама-Тур», мы организовали новую экспедицию и уже осуществили ее первый ознакомительных этап.</p>
              <p>На этот раз в центре нашего внимания место, где располагался поселок Затон (урочище Через). Место это находится в 35 километрах от Норильска, примерно, в четверти пути от Норильска до озера Лама, на стыке реки Норильской и Талой.</p>
              <p>Урочище Через — земля предков местного населения — через эту местность проходил путь купцов за пушниной и многие северные экспедиции. Рыбный участок и поселок Через — рыболовецкое звено лагподразделения норильского комбината в послевоенные годы. А в 60-е уже поселок Затон, на базе которого был развернут зенитно-ракетный комплес ПВО. В 80-е история Затона оборвалась…</p>
              <p>Совершенно необъяснимо, как поселок с развитой инфраструктурой, сыгравший не последнюю роль в истории развития Норильского промышленного района, был просто вычеркнут из памяти и заброшен.</p>
              <p>На фото вы можете увидеть, что осталось на месте когда-то процветающего поселка. Информации о нем также практически никакой не осталось. Тем интереснее по крохам искать упоминания Затона «Через» - урочища, посёлка, ремонтной базы судов и воинской части - в различных источниках и восстанавливать историю.</p>
          </div>
      </div>
      <div className = 'txt-title'>
        <img src='./img/zaton8.jpg'></img>
        {txtTitle.text && txtTitle.text.map( (p, index) => <p key = {index}>{p}</p>)}
      </div>
      <PhotoBlock photos = {photos}/>
      {/* <RequestBlockProjects bgImage = {'./img/zaton_footer.jpg'} h2Text = {"Стать волонтером или партнером"} h3Text = {"Оставьте заявку и мы обязательно Вам ответим!"}/> */}
    </main>
  )
}

export default Zaton