import React from 'react'
import TourPageCover from '../TourPage/components/TourPageCover'
import MainLogo from '../../components/MainLogo/MainLogo'
import PhotoBlock from '../TourPage/components/PhotoBlock'
import '../TourPage/components/styles.scss'
import RequestBlockProjects from '../../components/RequestBlockProjects/RequestBlockProjects'

const lamaProj = {
  title: "Экологический проект",
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

const LamaProj = () => {
  return (
    <main className = 'lama-proj'>
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
      <PhotoBlock photos = {photos}/>
      <RequestBlockProjects bgImage = {'./img/lama_req.jpg'} h2Text = {"Стать волонтером или партнером"} h3Text = {"Оставьте заявку и мы обязательно Вам ответим"}/>

    </main>
  )
}

export default LamaProj