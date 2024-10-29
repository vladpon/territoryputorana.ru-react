import React, { useEffect, useState } from 'react'
import './styles.scss'
import Cover from './components/Cover'
import TextWord from './components/TextWord'
import CardsBlock from './components/CardsBlock'
import TextOneImage from './components/TextOneImage'
import TextFewImages from './components/TextFewImages'
import TextOneImage2 from './components/TextOneImage2'
import RequestBlock from '../../components/RequestBlock/RequestBlock'
import VideoClip from './components/VideoClip'

import blankTours from '../../data/tours.json'
import { Link, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import { getTours } from '../../api/tours'
// import NewsBlock from './components/NewsBlock'


const textWord = {
  text: 'Плато Путорана — одно из самых удивительных мест России и объект Всемирного наследия ЮНЕСКО. Край бездонных каньонов, уникальных гор без вершин и тысячи озер. Здесь бурные реки, срываясь со скал, образуют высочайшие в России водопады. Здесь нет дорог, и не ходят поезда. Побывать в этих труднодоступных местах посчастливилось совсем небольшому числу людей. Но чем сложнее добраться, тем сильнее восторг от покорения!',
  word: 'путорана'
}



const textOneImage = {
  title_h2: 'Территория Путорана',
  title_h3: 'Покори Север с нами!',
  text: [
    'Туры на плато Путорана - Более 10 лет мы занимаемся развитием туризма на плато Путорана. Это наше любимое дело, увлечение и постоянные открытия! Все члены нашей команды родились и выросли на Таймыре, и мы знаем, чем удивить самого искушенного путешественника. Мы покажем вам самые известные достопримечательности и места, где практически не ступала нога человека.',
    'Каждый сезон наша команда разрабатывает новые зимние и летние маршруты, уделяя особое внимание вопросам комфорта и безопасности туристов. Мы лично проходим намеченные маршруты, поэтому уверены в них, и с удовольствием рекомендуем своим гостям.',
    'Нашa цель – создать для вас настоящее приключение, которое подарит самые яркие эмоции и запомнится надолго.',
    'Антон Лысов',
    'Основатель и руководитель компании «Территория Путорана»'
  ],
  img: "./img/anton.jpg"
}

const textFewImages = {
  photo: [
    './img/mp_sr001.jpg',
    './img/mp_sr002.jpg',
    './img/mp_sr003.jpg',
    './img/mp_sr004.jpg'
  ],
  title_h2: 'SNOW RIDE Putorana',
  title_h3: 'Снегоходная гонка за полярным кругом!',
  text: 'Когда везде зимний сезон заканчивается, у нас в Заполярье он только начинается! С 2022 года в марте-апреле «Территория Путорана» совместно с «Лама тур» организует снегоходную гонку в предгорье знаменитого ущелья Красные камни.'
}






const Main = () => {

  const [tours, setTours] = useState(blankTours)

  const navigate = useNavigate();
  const location = useLocation()
  const pathname = location.pathname
  
  useEffect( ()=> {
    getTours().then(res => res.json()).then(setTours)
  }, [])

  return (
    <main className='main-page'>      

      <Helmet>
        <link rel="canonical" href={`https://territoryputorana.ru${pathname}`} />
        <title>Плато Путорана Туры | Цены на туры 2023 – 2024 | Плато Путорана маршруты и туры</title>
        <meta name="description" content="Плато Путорана Туры - Цена – Туристические маршруты на Плато Путорана смотрите на сайте или узнавайте по телефону 8 (903) 929-93-83. Плато Путорана туры и цены на 2023 – 2024 год вылет на Плато из Красноярска или Москвы. Бронируйте туры на Плато Путорана онлайн на сайте."/>
      </Helmet>
      <Cover />
      {/* <NewsBlock /> */}
      <TextWord text = {textWord.text} word = {textWord.word} />
      <CardsBlock tours = {tours}/>
      <TextOneImage textOneImage = {textOneImage}/>

      <div className="cards-block">
            <div className="cards-block__title">
                <h2><span>Туры</span> партнеров</h2>
            </div>
            <div className="cards-block__card-container">
                <div className="card-container__card" onClick={() => navigate('/partners#weekend')}>
                    <div className="card-container__bg">
                        <img src='./img/gorybezvershin.jpg'></img>
                    </div>
                    <div className="card-container__text-container" >
                        <div className="card-container__top-text">
                            <div className="card-container__title">Горы без вершин</div>
                        </div>
                        <div className="card-container__bottom-text">
                            {/* <div className="card-container__days">Пт-пн</div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="cards-block__link"><Link to = '/partners'> Перейти к турам партнеров </Link></div>
        </div>

      <VideoClip src = './img/main.mp4#t=0.001' h2Text = 'Покори Север с нами!'/>
      <TextFewImages textFewImages = {textFewImages} />
      <TextOneImage2 />
      <RequestBlock bgImage = {'./img/main_opt.jpg'} h2Text = {'Есть вопросы?'} h3Text = {"Оставьте заявку и мы обязательно свяжемся с вами!"} />
    </main>
  )
}

export default Main