import React, { useEffect } from 'react'
import { useState } from 'react'
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import './styles.scss'

import MainLogo from '../../components/MainLogo/MainLogo'

const createPhotoArr = (section, length) => {
    let photoArr = []
    for (let x = 1; x <= length; x++) {
        let item = {
            id: {x},
            src: `./img/glr/${section}${x.toLocaleString('ru-RU', {minimumIntegerDigits: 3})}.jpg`,
        }
        photoArr.push(item)
    }
    return photoArr
}

const createTnArr = (section, length) => {
    console.log(length)
    let tnArr = []
    for (let x = 1; x <= length; x++) {
        let item = {
            id: {x},
            src: `./img/glr/tn/${section}${x.toLocaleString('ru-RU', {minimumIntegerDigits: 3})}_tn.jpg`,
        }
        tnArr.push(item)
    }
    return tnArr
}

const PhotoBlock = (props) => {
    const {section, length, title} = props

    const [index, setIndex] = useState(-1);
    const [photos, setPhotos] = useState([])
    const [tns, setTns] = useState([])

    useEffect( () => {
        setPhotos(createPhotoArr(section, length))
        setTns(createTnArr(section, length))
    }, [])


    return (<div className='gallery__block'>
            <MainLogo />
                <div className='gallery__title'><h2>{title}</h2></div>
                <div className='gallery__photo-container'>                
                    {tns && tns.map( (photo, index) => 
                    {
                        if(index < 6) {
                            return <div className='gallery__photo' key = {index} onClick = {() => setIndex(index)}><img src = {photo.src} /></div>
                        }
                        else return
                    })}
                </div>
                <Lightbox
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                slides={photos}
            />
            </div>)
}


export default PhotoBlock