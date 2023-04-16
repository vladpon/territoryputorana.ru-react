import React from 'react'

import './styles.scss'
import TourPageCover from './components/TourPageCover'
import TourPageAbout from './components/TourPageAbout'

const TourPage = () => {
  return (
    <main className='tour-page'>
        <TourPageCover />
        <TourPageAbout />
    </main>
  )
}

export default TourPage