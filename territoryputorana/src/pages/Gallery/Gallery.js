import React from 'react'
import { useState } from 'react'
import '../TourPage/components/styles.scss'
import './styles.scss'

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import PhotoAlbum from 'react-photo-album'

const photos = [
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


    const [index, setIndex] = React.useState(-1);

  return (
    <main className = 'gallery'>
        {showPhoto && <div className = 'gallery__big-photo' onClick = {() => zoomOff()}><img src = {photo} /></div>}
        {!photos && photos.map( (photo, index) => <div className = 'gallery__img' onClick={() => zoomOn(photo.src)} key = {index}><img src={photo.src} ></img></div>)}
        <PhotoAlbum
            layout="rows"
            photos={photos}
            targetRowHeight={150}
            onClick={({ index }) => setIndex(index)}
        />

        <Lightbox
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            slides={photos}
        />
    </main>
  )
}

export default Gallery