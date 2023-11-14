import React from 'react'


import './styles.scss'


import MainLogo from '../../components/MainLogo/MainLogo'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom'

const AboutPage = () => {

  const location = useLocation()
  const pathname = location.pathname

  // useEffect( () => {
  //   window.YandexRotorSettings.isLoaded = true
  // }, [])

    useEffect ( () => {
        const VK = window.VK
        VK.Widgets.Group("vk_groups", {mode: 4, width: "auto", height: "800", color3: "4d95be", no_cover: 0}, 219297445);
    }, [])


  return (
    <main className='about-page'>
        <Helmet>
        <title>Авторские туры и экспедиции на Плато Путорана с местным гидом!</title>
        <link rel="canonical" href={`https://territoryputorana.ru${pathname}`} />
        <meta name = 'description' content = 'Популярные авторские туры и экспедиции на Плато Путорана с местным гидом / туроператором смотрите на сайте или узнавайте по телефону 8 (903) 929-93-83. Плато Путорана туры и цены вылет Красноярск, Москва. Мы покажем вам самые известные достопримечательности и места Плато Путорана, где практически не ступала нога человека. Бронируйте туры на Плато Путорана онлайн на сайте.' />
      </Helmet>
        <MainLogo />
        <div className = "about-page__cover">        
            <img className = "about-page__bg" src='./img/anton002.jpg' />
            <div className = "about-page__text">
                <h1>О компании</h1>
            </div>
        </div>   
        <div className = "tp-about__container">
          <div className='tp-about'>
              <div className = "tp-about__main">
                  <h2>ТУРЫ И ЭКСПЕДИЦИИ С МЕСТНЫМ ТУРОПЕРАТОРОМ</h2>
                  <p>Более 10 лет мы занимаемся развитием туризма на плато Путорана. Это наше любимое дело, увлечение и постоянные открытия! Все члены нашей команды родились и выросли на Таймыре, и мы знаем, чем удивить самого искушенного путешественника. Мы покажем вам самые известные достопримечательности и места, где практически не ступала нога человека.</p>
                  <p>Каждый сезон наша команда разрабатывает новые зимние и летние маршруты, уделяя особое внимание вопросам комфорта и безопасности туристов. Мы лично проходим намеченные маршруты, поэтому уверены в них, и с удовольствием рекомендуем своим гостям.</p>
                  <p>Наша цель – создать для вас настоящее приключение, которое подарит самые яркие эмоции и запомнится надолго.</p>
              </div>
              <div className = "tp-about__hit">
                  <h3>Антон Лысов</h3>
                  <p><span>Основатель и руководитель компании «Территория Путорана»</span></p>
                  <p><span>Член Русского географического общества</span></p>
                  <p><span>Организатор проектов «Экспедиции Арктики», «Чисто Лама», «SNOW RIDE Putorana»</span></p>
              </div>
          </div>
       </div> 
       <div className='vk-container'>
            <h2>Наши новости</h2>
            <div id="vk_groups"></div>
       </div>
    </main>
  )
}

export default AboutPage