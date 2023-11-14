import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import './styles.scss'
import { Helmet } from 'react-helmet'

const Lama3d = () => {

  // useEffect( () => {
  //   window.YandexRotorSettings.isLoaded = true
  // }, [])

  return (
    <main className='lama3d-page'>
      <Helmet>
            <title>3d Жар.Птица</title>
            <meta name = 'description' content = 'Виртуальная прогулка по усадьбе «Жар. Птица» на озере Лама. Вы можете заглянуть во все домики усадьбы, в беседку и баню, полюбоваться живописным берегом и открывающимся видом на «горы без вершин».' />
        </Helmet>
        <iframe src='../../lama.html'></iframe>
    </main>
  )
}

export default Lama3d