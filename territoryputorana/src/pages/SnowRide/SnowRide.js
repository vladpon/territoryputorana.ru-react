import React, { useEffect } from 'react'
import TourPageCover from '../TourPage/components/TourPageCover'
import MainLogo from '../../components/MainLogo/MainLogo'
import PhotoBlock from '../TourPage/components/PhotoBlock'
import '../TourPage/components/styles.scss'
import RequestBlockProjects from '../../components/RequestBlockProjects/RequestBlockProjects'
import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom'

const snowRide = {
  title: "Снегоходная гонка за полярным кругом",
  bigImg: "./img/sr_cover001.jpg"
}


const photos = [
  { path: "./img/sr_ph001.jpg", alt: ""},
  { path: "./img/sr_ph003.jpg", alt: ""},
  { path: "./img/sr_ph004.jpg", alt: ""},
  { path: "./img/sr_010.jpg", alt: ""},
  { path: "./img/sr_ph006.jpg", alt: ""},
  { path: "./img/sr_011.jpg", alt: ""}
]

const SnowRide = () => {

  const location = useLocation()
  const pathname = location.pathname

  // useEffect( () => {
  //   window.YandexRotorSettings.isLoaded = true
  // }, [])



  return (
    <main className = 'snow-ride'>
      <Helmet>
        <title>Snow Ride</title>
        <link rel="canonical" href={`https://territoryputorana.ru${pathname}`} />
        <meta name = 'description' content = 'Ежегодная снегоходная гонка и фестиваль зимних активностей «SNOW RIDE Putorana». Норильск, ущелье Красные камни.' />
      </Helmet>
      <MainLogo logoImg = './img/sr_logo2024.svg' backgroundColor = '#fff'/>
      <TourPageCover tour = {snowRide} />
      <div className = 'tp-program__container'>
        <div className = "tp-program"> 
          <div className = "tp-program__day">
            <div className = "tp-program__text">
                <p>С 2022 года каждую весну «Территория Путорана» совместно «Лама-Тур» проводят ежегодную снегоходную гонку и фестиваль зимних активностей «SNOW RIDE Putorana».</p>
                <p><b>Место проведения:</b> лайда в районе ущелья «Красные камни»<br />
                    <b>Место сбора участников и гостей: </b> район Талнах, нижняя дорога на «Красные камни»</p>
                <p>В программе фестиваля: захватывающая гонка на снегоходах, выставка высокопроходимой техники, весёлый ведущий с музыкой и конкурсами для зрителей, сноутюбинг, а также дополнительная трасса для гонщиков помладше и просто желающих прокатиться на снегоходе. Для самых маленьких «гонщиков» мы организуем катание в упряжке на ездовых собаках, а также катание на надувном банане за снегоходом.</p>
                <p>Соревновательная программа разбита на категории, в каждой три призовых места:</p>
                <ul>
                  <li>утилитарный снегоход,</li>
                  <li>горный снегоход,</li>
                  <li>сноубайк.</li>
                </ul>
                <p>Итого девять победителей - лучших снегоходчиков Норильска!</p>
            </div>
            <div className="tp-program__img">
                <img src='./img/sr_001a.jpg' />
            </div>
          </div>
        </div>
      </div>
      <div className = 'tp-aux__container'>
          <div className = "tp-aux">
              <p>Заявки на участие принимаются в электронном виде по утверждённой форме (приложение к положению) на электронную почту: <a href = 'mailto:Snowrideputorana@yandex.ru'>Snowrideputorana@yandex.ru</a></p>
              <p>Следите за объявлением приёма заявок в наших социальных сетях</p>
          </div>
      </div>
      <div className = "tp-accmmdtn">
            <h2 className = "tp-accmmdtn__title">Основные требования к участникам:</h2>            
            <ul>
                <li>К соревнованиям допускаются снегоходы производства любых стран и марок</li>
                <li>Участник обязан иметь при себе оригинал действующего страхового полиса (застраховаться можно в офисе АльфаСтрахование по адресу: Ленинский пр-т, д. 7, вид спорта: снегоходный спорт, страховой полис должен быть действителен на 01.04.2023 или полис РЕСО)</li>
                <li>Участник обязан иметь минимальный набор средств защиты - шлем, очки, перчатки</li>
                <li>Участник должен не младше 18 лет</li>
                <li>Участник должен уплатить стартовый взнос в размере 1500 рублей и зарегистрироваться на мероприятие, подав заявку</li>               
            </ul>
      </div>
      <div className = 'tp-aux__container'>
          <div className = "tp-aux">
              <p>Скачать и ознакомиться с положением о любительских соревнованиях по снегоходному Кросс-Кантри можно по <a href='https://disk.yandex.ru/i/01VpjPb-iZMZSA'>ссылке.</a></p>
          </div>
      </div>
      <PhotoBlock photos = {photos}/>
      <div className = 'txt-title'>
        <p>Благодарим наших друзей и партнеров за поддержку снегоходной гонки и фестиваля зимних активностей «SNOW RIDE Putorana»</p>
        <ul>
          <li>грантовая программа Норникеля «Мир Новых возможностей»</li>
          <li>группа компаний «Жар. Птица»</li>
          <li>группа компаний «Арктур»</li>
          <li>магазин «Экстрим»</li>
          <li>магазин «Крепеж центр»</li>
          <li>магазин «Авто-дело»</li>
          <li>компания «Питкофф»</li>
          <li>BURGER RING</li>
          <li>развлекательный центр «Арена игр»</li>
          <li>магазин «YOKOHAMA»</li>
          <li>магазин «Спортландия»</li>
          <li>рекламно-производственная компания «Планета Голливуд»</li>
        </ul>
        <img src='./img/sr_partners.jpg' />
      </div>
      <RequestBlockProjects bgImage = {'./img/sr_req.jpg'} h2Text = {"Стать участником или партнером"} h3Text = {"Оставьте заявку и мы обязательно Вам ответим"}/>

    </main>
  )
}

export default SnowRide