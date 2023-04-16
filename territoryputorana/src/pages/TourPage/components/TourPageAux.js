import React from 'react'
import { Link } from 'react-router-dom'

const TourPageAux = () => {
  return (
    <div className = 'tp-aux__container'>
    <div class="tp-aux">
            <h2>Дополнительно</h2>
            <p>Вы можете заказать <Link to = '/helicopter'>вертолетную экскурсию</Link>, чтобы облететь наиболее живописные и недоступные уголки плато Путорана. Вы увидите высочайшие в России водопады и бездонные каньоны, а возможно, даже встретитесь с путоранским снежным бараном — уникальным животным-эндемиком, обитающим в этих краях.</p>
        </div>
    </div>
  )
}

export default TourPageAux