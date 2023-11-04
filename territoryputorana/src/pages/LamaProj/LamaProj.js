import React, { useEffect } from 'react'
import TourPageCover from '../TourPage/components/TourPageCover'
import MainLogo from '../../components/MainLogo/MainLogo'
import PhotoBlock from '../TourPage/components/PhotoBlock'
import '../TourPage/components/styles.scss'
import RequestBlockProjects from '../../components/RequestBlockProjects/RequestBlockProjects'
import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom'
import ASection from '../../components/ASection/ASection'

import './styles.scss'

const lamaProj = {
  title: 'Экологический проект "Чисто Лама"',
  bigImg: "./img/lama_cover03.jpg"
}


const photos = [
  { src: "./img/lama_ph_001.jpg"},
  { src: "./img/lama_ph_002.jpg"},
  { src: "./img/lama_ph_003.jpg"},
  { src: "./img/lama_ph_004.jpg"},
  { src: "./img/lamaproj010.jpg"},
  { src: "./img/lama_ph_006.jpg"}
]



const summer23report = [
  {
    description: 
      [
        "В июле, первым делом как позволила погода, мы вывезли мусор, собранный нашей командой волонтеров и неравнодушными соседями-туристами. Мусора набралась целая баржа. И это не может не беспокоить. К сожалению, не все туристы, отдыхающие на плато Путорана понимают значимость элементарных норм для сохранения уникальной природы в первозданной чистоте и красоте."
      ],
    img: "/img/KobGtE9R4no.jpg"
  },
  {
    description: 
      [
        "Во время работ по вывозу мусора, мы с волонтерами обнаружили на охраняемом озере Лама бесхозные браконьерские сети. И их было немало. Только представьте какой вред они уже успели нанести ихтиофауне озера! Все сети были сняты и доставлены в Объединенную дирекцию заповедников Таймыра, которая являются партнером грантового проекта «Чисто Лама», для принятия последующих решений."
      ],
    img: "/img/FWOQHjBjQQQ.jpg"
  },
  {
    description:
    [
      "Иногда природе нужна помощь не только для того, чтобы избавляться от следов пребывания человека, но и для того, чтобы подправить вред, который разными процессами и явлениями природа может принести сама себе. В этом году впервые волонтеры проекта «Чисто Лама» взялись за важнейшую работу по расчистке природной захламленности русел горных рек.",
      "Каждую весну при таянии снега, с мощными подвижками льда горные реки ломают деревья, тащат их по течению. В узких и неглубоких местах, на изгибах рек, сломанные деревья зацепляются, их становится больше и больше. Постепенно в этих местах формируются естественные заторы, которые становятся преградами для беспрепятственного прохода воды из рек в озеро. Как следствие, начинается разлив реки, на которой образовался забор, происходит заболачивание местности, загнивание живых деревьев.",
      "При подаче проекта «Чисто Лама» на конкурс Фонда Президентских грантов, мы уделили отдельное внимание работам по расчистке природных завалов на реках. Дирекция Заповедников Таймыра поддержала наше начинание."
    ],
    img: "/img/SmWC-0B-Jt0.jpg"
  }
]

const LamaProj = () => {

  useEffect( () => {
    window.YandexRotorSettings.isLoaded = true
  }, [])

  const location = useLocation()
  const pathname = location.pathname

  return (
    <main className = 'lama-proj'>
      <Helmet>
        <title>Экологический проект</title>
        <link rel="canonical" href={`https://territoryputorana.ru${pathname}`} />
        <meta name = 'description' content = '«Чисто Лама» - экологический проект АНО «Центр развития туризма «Территория Путорана». Президентский грант 2023 в направлении «Охрана окружающей среды и защита животных». Путоранский заповедник. Волонтеры.' />
      </Helmet>
      <MainLogo />
      <TourPageCover tour = {lamaProj} />
        <div className = "tp-about__container">
            <div className='tp-about'>
                <div className = "tp-about__main">
                    <p>«Чисто Лама» - экологический проект АНО «Центр развития туризма «Территория Путорана» стал победителем Президентского гранта 2023 в направлении «Охрана окружающей среды и защита животных».</p>
                    <p>Наши цели:</p>
                    <ul>
                        <li>сохранить уникальный Путоранский заповедник и территорию озера Лама в первозданной чистоте,</li>
                        <li>снизить неблагоприятное воздействие человека на заповедную природу,</li>
                        <li>продвигать культуру ответственного познавательного и экологического туризма.</li>
                    </ul>
                </div>
                <div className = "tp-about__hit">
                    <span>Мы сформировали команду из увлеченных своим делом активистов «Территории Путорана», специалистов заповедника, волонтеров для уборки и вывоза мусора с заповедной зоны. Грантовая поддержка и привлечение спонсоров позволяет нам обеспечивать команду проекта необходимой техникой и материалами</span>
                </div>
            </div>
        </div>

        <article className='lama-proj__article'>
          <h2>Лето 2023: краткий отчет по проекту</h2>
          {summer23report.map((item, index) => <ASection content = {item.description} img = {item.img} title = '' key = {index}/>)}
        </article>
      <PhotoBlock photos = {photos}/>
      <RequestBlockProjects bgImage = {'./img/lama_req.jpg'} h2Text = {"Стать волонтером или партнером"} h3Text = {"Оставьте заявку и мы обязательно Вам ответим"}/>

    </main>
  )
}

export default LamaProj