import React from 'react'
import MainLogo from '../../components/MainLogo/MainLogo'
import BigCards from '../ToursPage/components/BigCards'

import './styles.scss'

import projects from '../../data/projects.json'


const ProjectsPage = () => {
  return (
    <main className='projects-page'>
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