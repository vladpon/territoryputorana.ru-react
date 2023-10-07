import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import './styles.scss'

const WhiteTextBlock = ( props ) => {

    const { title, text, backColor = '#4d95be'} = props


  return (
    <div className = 'white-text-block__container' style = {{backgroundColor: backColor}}>
        <div className = "white-text-block">
            <h2>{title}</h2>
            {text.map ( (p, index) => <p key = {index}>{p}</p>)}
        </div>
    </div>
  )
}

export default WhiteTextBlock