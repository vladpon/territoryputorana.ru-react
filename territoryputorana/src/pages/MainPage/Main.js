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

const Main = () => {
  return (
    <div className='main-page'>
      <Header headerBackgroundColor = 'rgba(100, 100, 100, 0.5)'/>
      <Cover />
      <TextWord text = {textWord.text} word = {textWord.word} />
      <CardsBlock />
      <Footer />
    </div>
  )
}

export default Main