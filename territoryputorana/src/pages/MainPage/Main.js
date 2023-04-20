import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import './styles.scss'
import Cover from './components/Cover'
import TextWord from './components/TextWord'
import CardsBlock from './components/CardsBlock'
import TextOneImage from './components/TextOneImage'
import TextFewImages from './components/TextFewImages'
import TextOneImage2 from './components/TextOneImage2'
import RequestBlock from '../../components/RequestBlock/RequestBlock'

import tours from '../../data/tours.json'

const textWord = {
  text: 'Плато Путорана — одно из самых удивительных мест России и объект Всемирного наследия ЮНЕСКО. Край бездонных каньонов, уникальных гор без вершин и тысячи озер. Здесь бурные реки, срываясь со скал, образуют высочайшие в России водопады. Здесь нет дорог, и не ходят поезда. Побывать в этих труднодоступных местах посчастливилось совсем небольшому числу людей. Но чем сложнее добраться, тем сильнее восторг от покорения!',
  word: 'путорана'
}



const textOneImage = {
  title_h2: 'Территория Путорана',
  title_h3: 'Покори Север с нами!',
  text: [
    'Более 10 лет мы занимаемся развитием туризма на плато Путорана. Это наше любимое дело, увлечение и постоянные открытия! Все члены нашей команды родились и выросли на Таймыре, и мы знаем, чем удивить самого искушенного путешественника. Мы покажем вам самые известные достопримечательности и места, где практически не ступала нога человека.',
    'Каждый сезон наша команда разрабатывает новые зимние и летние маршруты, уделяя особое внимание вопросам комфорта и безопасности туристов. Мы лично проходим намеченные маршруты, поэтому уверены в них, и с удовольствием рекомендуем своим гостям.',
    'Нашa цель – создать для вас настоящее приключение, которое подарит самые яркие эмоции и запомнится надолго.',
    'Антон Лысов',
    'Основатель и руководитель компании «Территория Путорана»'
  ],
  img: "./img/lysov.jpg"
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
  return (
    <main className='main-page'>
      <Cover />
      <TextWord text = {textWord.text} word = {textWord.word} />
      <CardsBlock tours = {tours}/>
      <TextOneImage textOneImage = {textOneImage}/>
      <TextFewImages textFewImages = {textFewImages} />
      <TextOneImage2 />
      <RequestBlock bgImage = {'./img/main_opt.jpg'} h2Text = {'Есть вопросы?'} h3Text = {"Оставьте заявку и мы обязательно свяжемся с вами!"} />
    </main>
  )
}

export default Main