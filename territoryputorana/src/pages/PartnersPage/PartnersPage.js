import React from 'react'
import BigCards from '../ToursPage/components/BigCards'

import './styles.scss'

import partners from '../../data/partners.json'


const PartnersPage = () => {
  return (
    <main className='partners-page'>
        <div className = 'partners-page__content'>
            <div className="partners-page__title">
                <h1>Партнеры</h1>
                <h3>Территории Путорана</h3>
            </div>
            <BigCards content = {partners} sections = {['Туры и походы', 'Гостиницы']}/>
        </div>
    </main>
  )
}

export default PartnersPage