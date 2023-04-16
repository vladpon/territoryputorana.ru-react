import React from 'react'
import BigCards from '../ToursPage/components/BigCards'
import MainLogo from '../../components/MainLogo/MainLogo'

import tours3d from '../../data/tours3d.json'

import './styles.scss'

const Tours3d = () => {
  return (
    <main className='tours3d-page'>
        <div className = 'tours3d-page__content'>
            <MainLogo />
            <div className="tours3d-page__title">
                <h1>3D Туры</h1>
                <h3>Территории Путорана</h3>
            </div>
            <BigCards content = {tours3d}/>
        </div>
    </main>
  )
}

export default Tours3d