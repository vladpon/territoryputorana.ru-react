import React from 'react'
import './styles.scss'

const RequestBlock = (props) => {
    const { backgroundImage, h2Text, h3Text } = props
    const styleString = '.req-block::before{background-image: url(' + backgroundImage + ');}'

  return (    
    <div className = "req-block">
        <div className = "req-block__text">
            <h2>{h2Text}</h2>
            <h3>{h3Text}</h3>
        </div>
        <form name = 'request__form' action = "#">
            <input type="text" name="name" placeholder="Имя" />
            <input type="email" name="email" placeholder="e-mail" />
            <textarea name="text" placeholder="Сообщение" rows="10"></textarea>
            <button>Отправить</button>
        </form>
        <style>{styleString}</style>
    </div>
    
  )
}

export default RequestBlock