import React from 'react'

import './styles.scss'


import MainLogo from '../../components/MainLogo/MainLogo'

const AboutPage = () => {
  return (
    <main className='about-page'>
        <MainLogo />
        <div className = "about-page__cover">        
            <img className = "about-page__bg" src='./img/lysov_vert.jpg' />        
            <div className = "about-page__text">
                <h1>О компании</h1>                
            </div>
        </div>    
    </main>
  )
}

export default AboutPage