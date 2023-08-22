import React from 'react'
import './styles.scss'
import { Helmet } from 'react-helmet'

const Locations = () => {
  return (
    <main className='locations-page'>
      <Helmet>
            <title>3d Наши локации</title>
            <meta name = 'description' content = 'Виртуальное путешествие по природным локациям плато Путорана, которые посещают наши гости во время туров. Озеро Лама, озеро Капчу, гора Фестивальная и другие' />
      </Helmet>
        <iframe src='../../locations.html'></iframe>
    </main>
  )
}

export default Locations