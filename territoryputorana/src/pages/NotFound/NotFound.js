import React, { useEffect } from 'react'
import './styles.scss'
import MainLogo from '../../components/MainLogo/MainLogo'
import { Link, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const NotFound = () => {
    const location = useLocation();

    // useEffect( () => {
    //   window.YandexRotorSettings.isLoaded = true
    // }, [])



  return (
    <main className='notfound-page'>
      <Helmet>
        <title>404 — Страница не найдена</title>
        <meta name = 'description' content='К сожалению, запрашиваемая Вами страница не найдена.'></meta>
        <link rel = 'canonical' href='https://territoryputorana.ru/NotFound' />
      </Helmet>
        <img src='https://territoryputorana.ru/img/warn.jpg' />
        <h1>Запрашиваемая Вами страница не существует или находится в разработке</h1>
        <h2><Link to = '/'>На главную</Link></h2>
        <MainLogo />
    </main>
  )
}

export default NotFound