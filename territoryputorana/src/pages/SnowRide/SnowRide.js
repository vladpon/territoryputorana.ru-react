import React from 'react'
import TourPageCover from '../TourPage/components/TourPageCover'
import MainLogo from '../../components/MainLogo/MainLogo'
import PhotoBlock from '../TourPage/components/PhotoBlock'
import '../TourPage/components/styles.scss'
import RequestBlock from '../../components/RequestBlock/RequestBlock'

const snowRide = {
  title: "Снегоходная гонка за полярным кругом",
  bigImg: "./img/sr_cover.jpg"
}


const photos = [
  { src: "./img/sr_ph001.jpg"},
  { src: "./img/sr_ph003.jpg"},
  { src: "./img/sr_ph004.jpg"},
  { src: "./img/sr_ph005.jpg"},
  { src: "./img/sr_ph006.jpg"},
  { src: "./img/sr_ph007.jpg"}
]

const SnowRide = () => {
  return (
    <main className = 'snow-ride'>
      <MainLogo logoImg = './img/sr_logo.png'/>
      <TourPageCover tour = {snowRide} />
      <div className = 'tp-program__container'>
        <div className = "tp-program">
          <div className = "tp-program__day">
            <div className = "tp-program__text">
                <p>«Территория Путорана» совместно «ЛамаТур» проводят ежегодный снегоходный фестиваль «SNOW RIDE Putorana».</p>
                <p>Первый фестиваль состоялся в марте 2022 года и получил массу положительных отзывов от участников и гостей. В этом году мы расширили категории участников и продумали активную программу для болельщиков.</p>
                <p><b>Даты проведения:</b> 22 апреля 2023 года<br />
                    <b>Место проведения:</b> лайда в районе ущелья «Красные камни»<br />
                    <b>Место сбора:</b> район Талнах, нижняя дорога на «Красные камни»</p>
                <p>Вас ждут захватывающая гонка, выставка высокопроходимой техники, горячий чай и каша, музыка, весёлый ведущий, сноутюбинг, а также дополнительная трасса для гонщиков помладше и просто желающих прокатиться на снегоходе. А самых маленьких «гонщиков» прокатят в упряжке ездовые собаки.</p>
                <p>Соревновательная программа разбита на категории, в каждой три призовых места:</p>
                <ul>
                  <li>утилитарный снегоход,</li>
                  <li>горный снегоход,</li>
                  <li>сноубайк.</li>
                </ul>
                <p>Итого девять победителей - лучших снегоходчиков Норильска!</p>
            </div>
            <div className="tp-program__img">
                <img src='./img/sr_001.jpg' />
            </div>
          </div>
        </div>
      </div>
      <div className = 'tp-aux__container'>
          <div className = "tp-aux">
              <p>Заявки на участие принимаются до 25.03.2023 в электронном виде по утверждённой форме (приложение к положению) на электронную почту: <a href = 'mailto:Snowrideputorana@yandex.ru'>Snowrideputorana@yandex.ru</a></p>
          </div>
      </div>
      <div className = "tp-accmmdtn">
            <h2 className = "tp-accmmdtn__title">Основные требования к участникам:</h2>            
            <ul>
                <li>К соревнованиям допускаются снегоходы производства любых стран и марок</li>
                <li>Участник обязан иметь при себе оригинал действующего страхового полиса (застраховаться можно в офисе АльфаСтрахование по адресу: Ленинский пр-т, д. 7, вид спорта: снегоходный спорт, страховой полис должен быть действителен на 01.04.2023 или полис РЕСО)</li>
                <li>Участник обязан иметь минимальный набор средств защиты - шлем, очки, перчатки</li>
                <li>Участник должен не младше 18 лет</li>
                <li>Участник должен уплатить стартовый взнос в размере 1000 рублей и зарегистрироваться на мероприятие, подав заявку</li>               
            </ul>
      </div>
      <div className = 'tp-aux__container'>
          <div className = "tp-aux">
              <p>Скачать и ознакомиться с положением о любительских соревнованиях по снегоходному Кросс-Кантри можно по <a href='https://disk.yandex.ru/d/zb6Tw4D-1zrtmg'>ссылке.</a></p>
          </div>
      </div>
      <PhotoBlock photos = {photos}/>
      <div className = 'txt-title'>
        <p>Хотим поблагодарить наших друзей и партнеров за поддержку снегоходного фестиваля «SNOW RIDE Putorana 2023»</p>
        <ul>
          <li>группа компаний «Жар. Птица»</li>
          <li>группа компаний «Арктур»</li>
          <li>загородный комплекс «Горизонт»</li>
          <li>магазин «Экстрим»</li>
          <li>магазин «Крепеж центр»</li>
          <li>магазин «Спортландия»</li>
        </ul>
        <img src='./img/sr_partners.jpg' />
      </div>
      <RequestBlock bgImage = {'./img/sr_req.jpg'} h2Text = {"Стать участником или партнером"} h3Text = {"Оставьте заявку и мы обязательно Вам ответим"}/>

    </main>
  )
}

export default SnowRide