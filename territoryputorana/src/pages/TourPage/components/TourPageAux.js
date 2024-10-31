import React from 'react'
import { Link } from 'react-router-dom'

const TourPageAux = (props) => {
  const {title, content} = props
  return (
    <div className = 'tp-aux__container'>
        <div className = "tp-aux">
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    </div>
  )
}

TourPageAux.defaultProps = {
  title: 'Дополнительно',
  content: <p>Вы можете заказать <Link to = '/helitour'>вертолетную экскурсию</Link>, чтобы облететь наиболее живописные и недоступные уголки плато Путорана. Вы увидите высочайшие в России водопады и бездонные каньоны, а возможно, даже встретитесь с путоранским снежным бараном — уникальным животным-эндемиком, обитающим в этих краях.</p>
}

export default TourPageAux