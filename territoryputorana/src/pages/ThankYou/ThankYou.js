import React from 'react'

import './styles.scss'
import MainLogo from '../../components/MainLogo/MainLogo'
import { Link } from 'react-router-dom'

const ThankYou = () => {
  return (
    <div className='thankyou-page'>
        <MainLogo />
        <>
            <h3>Ваша заявка успешно отправлена.</h3>
            <h3>Мы свяжемся с Вами в самое ближайшее время.</h3>
            <h3><Link to = '/'>На главную</Link></h3>
        </>
    </div>
  )
}

export default ThankYou