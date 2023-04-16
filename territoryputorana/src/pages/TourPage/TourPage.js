import React from 'react'

import './styles.scss'
import TourPageCover from './components/TourPageCover'
import TourPageAbout from './components/TourPageAbout'
import TourPageAux from './components/TourPageAux'
import TourPageProgram from './components/TourPageProgram'
import TourPageAccmmdtn from './components/TourPageAccmmdtn'

const TourPage = () => {
  return (
    <main className='tour-page'>
        <TourPageCover />
        <TourPageAbout />
        <TourPageAux />
        <TourPageProgram />
        <TourPageAccmmdtn />
    </main>
  )
}

export default TourPage