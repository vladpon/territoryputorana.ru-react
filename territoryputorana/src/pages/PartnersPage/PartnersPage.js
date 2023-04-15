import React from 'react'
import MainLogo from '../../components/MainLogo/MainLogo'
import BigCards from '../ToursPage/components/BigCards'

import './styles.scss'

import partners from '../../data/partners.json'


const PartnersPage = () => {
  return (
    <main className='partners-page'>
        <div className = 'partners-page__content'>
            <MainLogo />
            <div className="partners-page__title">
                <h1>Партнеры</h1>
                <h3>Территории Путорана</h3>
            </div>
            <BigCards content = {partners}/>
        </div>
    </main>
  )
}

export default PartnersPage