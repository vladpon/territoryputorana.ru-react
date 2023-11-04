import React, { useEffect } from 'react'
import MainLogo from '../../components/MainLogo/MainLogo'
import BigCards from '../ToursPage/components/BigCards'

import './styles.scss'

import projects from '../../data/projects.json'
import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom'


const ProjectsPage = () => {

  useEffect( () => {
    window.YandexRotorSettings.isLoaded = true
  }, [])


  const location = useLocation()
  const pathname = location.pathname

  return (
    <main className='projects-page'>
      <Helmet>
        <title>Проекты</title>
        <link rel="canonical" href={`https://territoryputorana.ru${pathname}`} />
        <meta name = 'description' content = 'Экспедиции по плато Путорана и Таймыру до Карского моря. Снегоходная гонка. Экологический проект – сохранение первозданной природы Арктики.' />
      </Helmet>
        <div className = 'projects-page__content'>
            <MainLogo />
            <div className="projects-page__title">
                <h1>Проекты</h1>
                <h3>Территории Путорана</h3>
            </div>
            <BigCards content = {projects}/>
        </div>
    </main>
  )
}

export default ProjectsPage