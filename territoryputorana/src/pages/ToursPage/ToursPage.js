import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import MainLogo from '../../components/MainLogo/MainLogo'
import BigCards from './components/BigCards'

import './styles.scss'

import tours from '../../data/tours.json'


const ToursPage = () => {
  return (
    <div className='tours-page'>
        {/* <Header headerLinkColor = {'#000'}/> */}
        <div className = 'tours-page__content'>
            <MainLogo />
            <div className="tours-page__title">
                <h1>туры</h1>
                <h3>на Плато Путорана</h3>
            </div>
            <BigCards content = {tours}/>
        </div>
    </div>
  )
}

export default ToursPage