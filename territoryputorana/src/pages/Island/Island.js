import React from 'react'
import './styles.scss'
import { Helmet } from 'react-helmet'

const Island = () => {
  return (
    <main className='island-page'>
      <Helmet>
            <title>3d Палаточный лагерь</title>
            <meta name = 'description' content = 'Виртуальная прогулка по палаточному лагерю на озере Лама. Вы можете увидеть живописное место, в котором расположен лагерь, планировку и оснащение лагеря.' />
      </Helmet>
        <iframe src='../../island.html'></iframe>
    </main>
  )
}

export default Island