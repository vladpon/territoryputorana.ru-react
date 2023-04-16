import React from 'react'
import './styles.scss'
import MainLogo from '../../components/MainLogo/MainLogo'
import { useLocation } from 'react-router-dom'

const NotFound = () => {
    const location = useLocation();

  return (
    <main className='notfound-page'>
        <img src='./img/warn.jpg' />
        <h1>Запрашиваемая Вами страница <i>{location.pathname}</i> не существует или находится в разработке</h1>
        <MainLogo />
    </main>
  )
}

export default NotFound