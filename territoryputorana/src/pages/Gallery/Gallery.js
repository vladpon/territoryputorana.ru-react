import React, { useEffect } from 'react'
import { useState } from 'react'
// import '../TourPage/components/styles.scss'
import './styles.scss'

import PhotoBlock from './PhotoBlock';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

// const photos1 = [
//     { 
//         id: '001',
//         src: './img/glr/hiking001.jpg',
//         tag: 'hiking'
//     },
//     { 
//         id: '002',
//         src: './img/glr/hiking002.jpg',
//         tag: 'hiking'
//     },
//     { 
//         id: '003',
//         src: './img/glr/hiking003.jpg',
//         tag: 'hiking'
//     },
//     { 
//         id: '004',
//         src: './img/glr/hiking004.jpg',
//         tag: 'hiking'
//     },
//     { 
//         id: '005',
//         src: './img/glr/hiking005.jpg',
//         tag: 'hiking'
//     },
//     { 
//         id: '006',
//         src: './img/glr/hiking006.jpg',
//         tag: 'hiking'
//     },
//     { 
//         id: '007',
//         src: './img/glr/hiking007.jpg',
//         tag: 'hiking'
//     },
//     { 
//         id: '008',
//         src: './img/glr/hiking008.jpg',
//         tag: 'hiking'
//     }
// ]

const mountain = [
    {
        id: 1,
        src: './img/glr/Горы001.jpg',
        tn: './img/glr/Горы001_tn.jpg',
        description: '',
        alt: ''
    },
    {
        id: 2,
        src: './img/glr/Горы002.jpg',
        tn: './img/glr/Горы002_tn.jpg',
        description: '',
        alt: ''
    },
    {
        id: 3,
        src: './img/glr/Горы003.jpg',
        tn: './img/glr/Горы003_tn.jpg',
        description: '',
        alt: ''
    },
    {
        id: 4,
        src: './img/glr/Горы004.jpg',
        tn: './img/glr/Горы004_tn.jpg',
        description: '',
        alt: ''
    },
    {
        id: 7,
        src: './img/glr/phito_mountains_01.jpg',
        tn: './img/glr/phito_mountains_tn1.jpg',
        description: '',
        alt: ''
    },
    {
        id: 8,
        src: './img/glr/phito_mountains_02.jpg',
        tn: './img/glr/phito_mountains_tn2.jpg',
        description: '',
        alt: ''
    },
    {
        id: 9,
        src: './img/glr/phito_mountains_03.jpg',
        tn: './img/glr/phito_mountains_tn3.jpg',
        description: '',
        alt: ''
    },
    {
        id: 10,
        src: './img/glr/phito_mountains_04.jpg',
        tn: './img/glr/phito_mountains_tn4.jpg',
        description: '',
        alt: ''
    },
    {
        id: 11,
        src: './img/glr/phito_mountains_05.jpg',
        tn: './img/glr/phito_mountains_tn5.jpg',
        description: '',
        alt: ''
    },
    {
        id: 12,
        src: './img/glr/phito_mountains_06.jpg',
        tn: './img/glr/phito_mountains_tn6.jpg',
        description: '',
        alt: ''
    }
]


const waterfalls = [
    {
        id: 2,
        src: './img/glr/Водопады002.jpg',
        tn: './img/glr/Водопады002_tn.jpg',
        description: '',
        alt: ''
    },
    {
        id: 4,
        src: './img/glr/Водопады004.jpg',
        tn: './img/glr/Водопады004_tn.jpg',
        description: '',
        alt: ''
    },
    {
        id: 5,
        src: './img/glr/Водопады005.jpg',
        tn: './img/glr/Водопады005_tn.jpg',
        description: '',
        alt: ''
    },
    {
        id: 6,
        src: './img/glr/Водопады006.jpg',
        tn: './img/glr/Водопады006_tn.jpg',
        description: '',
        alt: ''
    },
    {
        id: 7,
        src: './img/glr/Водопады007.jpg',
        tn: './img/glr/Водопады007_tn.jpg',
        description: '',
        alt: ''
    },
    {
        id: 8,
        src: './img/glr/Водопады008.jpg',
        tn: './img/glr/Водопады008_tn.jpg',
        description: '',
        alt: ''
    },
    {
        id: 9,
        src: './img/glr/Водопады009.jpg',
        tn: './img/glr/Водопады009_tn.jpg',
        description: '',
        alt: ''
    },
    {
        id: 10,
        src: './img/glr/photo_waterfalls_01.jpg',
        tn: './img/glr/photo_waterfalls_tn1.jpg',
        description: '',
        alt: ''
    },
    {
        id: 11,
        src: './img/glr/photo_waterfalls_02.jpg',
        tn: './img/glr/photo_waterfalls_tn2.jpg',
        description: '',
        alt: ''
    },
    {
        id: 12,
        src: './img/glr/photo_waterfalls_03.jpg',
        tn: './img/glr/photo_waterfalls_tn3.jpg',
        description: '',
        alt: ''
    },
    {
        id: 13,
        src: './img/glr/photo_waterfalls_04.jpg',
        tn: './img/glr/photo_waterfalls_tn4.jpg',
        description: '',
        alt: ''
    },
    {
        id: 14,
        src: './img/glr/photo_waterfalls_05.jpg',
        tn: './img/glr/photo_waterfalls_tn5.jpg',
        description: '',
        alt: ''
    },
    {
        id: 15,
        src: './img/glr/photo_waterfalls_06.jpg',
        tn: './img/glr/photo_waterfalls_tn6.jpg',
        description: '',
        alt: ''
    },
    {
        id: 16,
        src: './img/glr/photo_waterfalls_07.jpg',
        tn: './img/glr/photo_waterfalls_tn7.jpg',
        description: '',
        alt: ''
    },

    
]

const lamaLake = [
    {
        id: 1,
        src: './img/glr/photo_lama_01.jpg',
        tn: './img/glr/photo_lama_tn1.jpg',
        description: '',
        alt: ''
    },
    {
        id: 2,
        src: './img/glr/photo_lama_02.jpg',
        tn: './img/glr/photo_lama_tn2.jpg',
        description: '',
        alt: ''
    },
    {
        id: 3,
        src: './img/glr/photo_lama_03.jpg',
        tn: './img/glr/photo_lama_tn3.jpg',
        description: '',
        alt: ''
    },
    {
        id: 4,
        src: './img/glr/photo_lama_04.jpg',
        tn: './img/glr/photo_lama_tn4.jpg',
        description: '',
        alt: ''
    },
    {
        id: 5,
        src: './img/glr/photo_lama_05.jpg',
        tn: './img/glr/photo_lama_tn5.jpg',
        description: '',
        alt: ''
    },
    {
        id: 6,
        src: './img/glr/photo_lama_06.jpg',
        tn: './img/glr/photo_lama_tn6.jpg',
        description: '',
        alt: ''
    },
    {
        id: 7,
        src: './img/glr/photo_lama_07.jpg',
        tn: './img/glr/photo_lama_tn7.jpg',
        description: '',
        alt: ''
    },
    {
        id: 8,
        src: './img/glr/photo_lama_08.jpg',
        tn: './img/glr/photo_lama_tn8.jpg',
        description: '',
        alt: ''
    },
    {
        id: 9,
        src: './img/glr/photo_lama_09.jpg',
        tn: './img/glr/photo_lama_tn9.jpg',
        description: '',
        alt: ''
    }
]

const jarPtica = [
    {
        id: 1,
        src: './img/glr/photo_jar_01.jpg',
        tn: './img/glr/photo_jar_tn1.jpg',
        description: '',
        alt: ''
    },
    {
        id: 2,
        src: './img/glr/photo_jar_02.jpg',
        tn: './img/glr/photo_jar_tn2.jpg',
        description: '',
        alt: ''
    },
    {
        id: 3,
        src: './img/glr/photo_jar_03.jpg',
        tn: './img/glr/photo_jar_tn3.jpg',
        description: '',
        alt: ''
    },
    {
        id: 4,
        src: './img/glr/photo_jar_04.jpg',
        tn: './img/glr/photo_jar_tn4.jpg',
        description: '',
        alt: ''
    },
    {
        id: 5,
        src: './img/glr/photo_jar_05.jpg',
        tn: './img/glr/photo_jar_tn5.jpg',
        description: '',
        alt: ''
    },
    {
        id: 6,
        src: './img/glr/photo_jar_06.jpg',
        tn: './img/glr/photo_jar_tn6.jpg',
        description: '',
        alt: ''
    },
    {
        id: 7,
        src: './img/glr/photo_jar_07.jpg',
        tn: './img/glr/photo_jar_tn7.jpg',
        description: '',
        alt: ''
    },
    {
        id: 8,
        src: './img/glr/photo_jar_08.jpg',
        tn: './img/glr/photo_jar_tn8.jpg',
        description: '',
        alt: ''
    },
    {
        id: 9,
        src: './img/glr/photo_jar_09.jpg',
        tn: './img/glr/photo_jar_tn9.jpg',
        description: '',
        alt: ''
    },
    {
        id: 10,
        src: './img/glr/photo_jar_10.jpg',
        tn: './img/glr/photo_jar_tn10.jpg',
        description: '',
        alt: ''
    },
    {
        id: 11,
        src: './img/glr/photo_jar_11.jpg',
        tn: './img/glr/photo_jar_tn11.jpg',
        description: '',
        alt: ''
    },
    {
        id: 12,
        src: './img/glr/photo_jar_12.jpg',
        tn: './img/glr/photo_jar_tn12.jpg',
        description: '',
        alt: ''
    },
    {
        id: 13,
        src: './img/glr/photo_jar_13.jpg',
        tn: './img/glr/photo_jar_tn13.jpg',
        description: '',
        alt: ''
    },
    {
        id: 14,
        src: './img/glr/photo_jar_14.jpg',
        tn: './img/glr/photo_jar_tn14.jpg',
        description: '',
        alt: ''
    },
    {
        id: 15,
        src: './img/glr/photo_jar_15.jpg',
        tn: './img/glr/photo_jar_tn15.jpg',
        description: '',
        alt: ''
    },
    {
        id: 16,
        src: './img/glr/photo_jar_16.jpg',
        tn: './img/glr/photo_jar_tn16.jpg',
        description: '',
        alt: ''
    },
    {
        id: 17,
        src: './img/glr/photo_jar_17.jpg',
        tn: './img/glr/photo_jar_tn17.jpg',
        description: '',
        alt: ''
    },
    {
        id: 18,
        src: './img/glr/photo_jar_18.jpg',
        tn: './img/glr/photo_jar_tn18.jpg',
        description: '',
        alt: ''
    },
    {
        id: 19,
        src: './img/glr/photo_jar_19.jpg',
        tn: './img/glr/photo_jar_tn19.jpg',
        description: '',
        alt: ''
    },
   
]

const tundra = [
    {
        id: 1,
        src: './img/glr/Тундра001.jpg',
        tn: './img/glr/Тундра001_tn.jpg',
        description: '',
        alt: ''
    },
    {
        id: 2,
        src: './img/glr/Тундра002.jpg',
        tn: './img/glr/Тундра002_tn.jpg',
        description: '',
        alt: ''
    },
    {
        id: 3,
        src: './img/glr/Тундра003.jpg',
        tn: './img/glr/Тундра003_tn.jpg',
        description: '',
        alt: ''
    },
    {
        id: 4,
        src: './img/glr/Тундра004.jpg',
        tn: './img/glr/Тундра004_tn.jpg',
        description: '',
        alt: ''
    },
    {
        id: 5,
        src: './img/glr/Тундра005.jpg',
        tn: './img/glr/Тундра005_tn.jpg',
        description: '',
        alt: ''
    },
    {
        id: 6,
        src: './img/glr/Тундра006.jpg',
        tn: './img/glr/Тундра006_tn.jpg',
        description: '',
        alt: ''
    },
    {
        id: 7,
        src: './img/glr/Тундра007.jpg',
        tn: './img/glr/Тундра007_tn.jpg',
        description: '',
        alt: ''
    },
    {
        id: 8,
        src: './img/glr/Тундра008.jpg',
        tn: './img/glr/Тундра008_tn.jpg',
        description: '',
        alt: ''
    },
]



const Gallery = () => {    

    // useEffect( () => {
    //     window.YandexRotorSettings.isLoaded = true
    //   }, [])

    const location = useLocation()
    const pathname = location.pathname

  return (
    <main className = 'gallery'>
        <Helmet>
            <title>Галерея</title>
            <link rel="canonical" href={`https://territoryputorana.ru${pathname}`} />
            <meta name = 'description' content = 'Плато Путорана. Озеро Лама. Таймыр. Водопады плато Путорана.' />
        </Helmet>

        <PhotoBlock arrPhotos = {mountain} title = 'Горы и каньоны' />
        <PhotoBlock arrPhotos = {waterfalls} title = 'Водопады' />
        <PhotoBlock arrPhotos = {lamaLake} title = 'Озеро Лама' />
        <PhotoBlock arrPhotos = {jarPtica} title = 'Усадьба "Жар.Птица"' />
        <PhotoBlock arrPhotos = {tundra} title = 'Тундра' />
    </main>
  )
}

export default Gallery