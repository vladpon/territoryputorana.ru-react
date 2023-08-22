import React from 'react'
import { useState } from 'react'
import '../TourPage/components/styles.scss'
import './styles.scss'

import PhotoBlock from './PhotoBlock';
import { Helmet } from 'react-helmet';

const photos1 = [
    { 
        id: '001',
        src: './img/glr/hiking001.jpg',
        tag: 'hiking'
    },
    { 
        id: '002',
        src: './img/glr/hiking002.jpg',
        tag: 'hiking'
    },
    { 
        id: '003',
        src: './img/glr/hiking003.jpg',
        tag: 'hiking'
    },
    { 
        id: '004',
        src: './img/glr/hiking004.jpg',
        tag: 'hiking'
    },
    { 
        id: '005',
        src: './img/glr/hiking005.jpg',
        tag: 'hiking'
    },
    { 
        id: '006',
        src: './img/glr/hiking006.jpg',
        tag: 'hiking'
    },
    { 
        id: '007',
        src: './img/glr/hiking007.jpg',
        tag: 'hiking'
    },
    { 
        id: '008',
        src: './img/glr/hiking008.jpg',
        tag: 'hiking'
    }
]



const Gallery = () => {    

  return (
    <main className = 'gallery'>
        <Helmet>
            <title>Галерея</title>
            <meta name = 'description' content = 'Плато Путорана. Озеро Лама. Таймыр. Водопады плато Путорана.' />
        </Helmet>
        <PhotoBlock section = 'hiking' length = {33} title = {'Пешие маршруты'}/> 
        <PhotoBlock section = 'lamalake' length = {26} title = {'Озеро Лама'}/> 
        <PhotoBlock section = 'waterfall' length = {17} title = {'Водопады'}/> 
    </main>
  )
}

export default Gallery