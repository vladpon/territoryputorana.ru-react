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
    description: [
      'Динамичный недельный тур с трекинговыми маршрутами к каньонам и водопадам, восхождением на вершину плато, водными прогулками и рыбалкой. Дополнительно вы можете заказать вертолетную экскурсию и посетить самые недоступные места, от которых захватывает дух. В свободное время вы будете отдыхать и восстанавливать силы на уединенной благоустроенной усадьбе на берегу живописного озера Лама.'
      ],
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
    <div className='main-page'>
      {/* <Header headerBackgroundColor = 'rgba(100, 100, 100, 0.5)'/> */}
      <Cover />
      <TextWord text = {textWord.text} word = {textWord.word} />
      <CardsBlock tours = {tours}/>
      <TextOneImage textOneImage = {textOneImage}/>
      <TextFewImages textFewImages = {textFewImages} />
      <TextOneImage2 />
      <RequestBlock backgroundImage = {'./img/main_opt.jpg'}/>
    </div>
  )
}

export default Main