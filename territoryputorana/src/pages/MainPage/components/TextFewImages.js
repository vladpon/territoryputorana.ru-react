import React from 'react'

const TextFewImages = (props) => {
    const {textFewImages} = props

  return (
    <div className = "txt-fimg">
        <div className = "txt-fimg__ph-container">
            { textFewImages.photo ? (
                textFewImages.photo.map( (photo, index) => <div className = "txt-fimg__photo" key = {index}><img src={photo} /></div>
                )
            ) : <h3>no photo found</h3>
            }                
        </div>
        <div className="txt-fimg__text">
            <h2>{textFewImages.title_h2}</h2>
            <h3>{textFewImages.title_h3}</h3>
            <p>{textFewImages.text}</p>
        </div>
    </div>
  )
}

export default TextFewImages