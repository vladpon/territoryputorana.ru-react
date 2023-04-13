import React from 'react'
import Header from '../../components/Header/Header'
import './styles.scss'

const Lama3d = () => {
  return (
    <div className='lama3d-page'>
        <Header />
        <iframe src='../../lama.html'></iframe>
    </div>
  )
}

export default Lama3d