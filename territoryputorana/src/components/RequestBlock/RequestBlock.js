import React from 'react'
import './styles.scss'

const RequestBlock = (props) => {
    const { backgroundImage } = props
    const styleString = '.req-block::before{background-image: url(' + backgroundImage + ');}'

  return (    
    <div className = "req-block" >
        <div className = "req-block__text">
            <h2>Есть вопросы?</h2>
            <h3>Оставьте заявку и мы обязательно свяжемся с вами!</h3>
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