import React, { useEffect, useState } from 'react'




const PhotoBlock = (props) => {
    const { photos } = props

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
    <div className = 'pb'>
       {showPhoto && <div className = 'pb__big-photo' onClick = {() => zoomOff()}><img src = {photo} /></div>}
        <div className = 'pb__container'>
            {photos && photos.map( (photo, index) => <div className = 'pb__img' key = {index}><img src={photo.path} alt = {photo.alt} onClick={() => zoomOn(photo.path)} /></div>)}
        </div>
    </div>
  )
}

export default PhotoBlock