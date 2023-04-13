import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import './styles.scss'
import Cover from './components/Cover'
import TextWord from './components/TextWord'
import CardsBlock from './components/CardsBlock'

const textWord = {
  text: 'Плато Путорана — одно из самых удивительных мест России и объект Всемирного наследия ЮНЕСКО. Край бездонных каньонов, уникальных гор без вершин и тысячи озер. Здесь бурные реки, срываясь со скал, образуют высочайшие в России водопады. Здесь нет дорог, и не ходят поезда. Побывать в этих труднодоступных местах посчастливилось совсем небольшому числу людей. Но чем сложнее добраться, тем сильнее восторг от покорения!',
  word: 'путорана'
}

const tours = [
  {
    id: '001',
    title: 'Затерянный мир Плато Путорана',
    season: 'лето',
    time: '8 дней / 7 ночей',
    price: 'от 230 000',
    bigImg: '',
    smallImg: './img/mp_lostput.jpg',
    optImg: '',
    tourPhoto: []
  },
  {
    id: '002',
    title: 'Тур выходного дня',
    season: 'лето',
    time: 'пт-вс',
    price: 'от 35 000',
    bigImg: '',
    smallImg: './img/mp_weekend.jpg',
    optImg: '',
    tourPhoto: []
  },
  {
    id: '003',
    title: 'Палаточный лагерь',
    season: 'лето',
    time: 'от 1 дня',
    price: 'от 10 000',
    bigImg: '',
    smallImg: './img/mp_camp.jpg',
    optImg: '',
    tourPhoto: []
  },
  {
    id: '004',
    title: 'Ски-тур',
    season: 'весна',
    time: '7 дней / 6 ночей',
    price: 'от 160 000',
    bigImg: '',
    smallImg: './img/mp_skitour.jpg',
    optImg: '',
    tourPhoto: []
  },
  {
    id: '005',
    title: 'Трейлраннинг кемп',
    season: 'лето',
    time: '8 дней / 7 ночей',
    price: 'от 230 000',
    bigImg: '',
    smallImg: './img/mp_trailrunning.jpg',
    optImg: '',
    tourPhoto: []
  },  
  {
    id: '006',
    title: 'Вертолетные экскурсии',
    season: 'всесезонный',
    time: '',
    price: 'от 200 000* руб.',
    bigImg: '',
    smallImg: './img/mp_heli.jpg',
    optImg: '',
    tourPhoto: []
  }
]

const Main = () => {
  return (
    <div className='main-page'>
      <Header headerBackgroundColor = 'rgba(100, 100, 100, 0.5)'/>
      <Cover />
      <TextWord text = {textWord.text} word = {textWord.word} />
      <CardsBlock tours = {tours}/>
      <Footer />
    </div>
  )
}

export default Main