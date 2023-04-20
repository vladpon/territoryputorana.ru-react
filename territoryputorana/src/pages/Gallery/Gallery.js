import React from 'react'
import { useState } from 'react'
import '../TourPage/components/styles.scss'

import './styles.scss'

const photos = [
    './img/glr/img (1).jpg',
    './img/glr/img (2).jpg',
    './img/glr/img (3).jpg',
    './img/glr/img (4).jpg',
    './img/glr/img (5).jpg',
    './img/glr/img (6).jpg',
    './img/glr/img (8).jpg',
    './img/glr/img (9).jpg',
    './img/glr/img (10).jpg',
    './img/glr/img (11).jpg',
    './img/glr/img (12).jpg',
    './img/glr/img (13).jpg',
    './img/glr/img (14).jpg',
    './img/glr/img (15).jpg',
    './img/glr/img (16).jpg',
    './img/glr/img (17).jpg',
    './img/glr/img (18).jpg',
    './img/glr/img (19).jpg',
    './img/glr/img (20).jpg',
    './img/glr/img (21).jpg',
    './img/glr/img (22).jpg',   
    './img/glr/img (23).jpg',
    './img/glr/img (24).jpg',
    './img/glr/img (25).jpg',
    './img/glr/img (26).jpg',
    './img/glr/img (27).jpg',
    './img/glr/img (28).jpg'
]

const Gallery = () => {
    const [showPhoto, setShowPhoto] = useState(false)
    const [photo, setPhoto] = useState('')

    const zoomOn = (src) => {
        const body = document.body;
        body.classList.add('lock');
        setShowPhoto(true)
        setPhoto(src)
    }

    const zoomOff = () => {
        setShowPhoto(false)
        const body = document.body;
        body.classList.remove('lock');
    }


  return (
    <main className = 'gallery'>
        {showPhoto && <div className = 'gallery__big-photo' onClick = {() => zoomOff()}><img src = {photo} /></div>}
        {photos && photos.map( (photo, index) => <div className = 'gallery__img' onClick={() => zoomOn(photo)} key = {index}><img src={photo} ></img></div>)}
    </main>
  )
}

export default Gallery