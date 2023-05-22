import React from 'react'
import './styles.scss'
import MainLogo from '../../components/MainLogo/MainLogo'
import { Link, useLocation } from 'react-router-dom'

const NotFound = () => {
    const location = useLocation();

  return (
    <main className='notfound-page'>
        <img src='https://territoryputorana.ru/img/warn.jpg' />
        <h1>Запрашиваемая Вами страница не существует или находится в разработке</h1>
        <h2><Link to = '/'>На главную</Link></h2>
        <MainLogo />
    </main>
  )
}

export default NotFound