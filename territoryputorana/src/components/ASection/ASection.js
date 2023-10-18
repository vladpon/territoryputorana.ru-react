import React, { useEffect } from 'react'

import './styles.scss'

const ASection = (props) => {
    const {content, img, title = ""} = props


  return (
    <section className='asection'>
        <div className='asection__text'>
            {title && <h3>{title}</h3>}
        {content.map( (p, index) => <p key = {index}>{p}</p>)}
        </div>  
        <div className='asection__img'>
            <img src={img}></img>
        </div> 
    </section>
  )
}

export default ASection