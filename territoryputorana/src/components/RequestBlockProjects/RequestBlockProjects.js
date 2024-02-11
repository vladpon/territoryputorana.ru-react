import React, { useEffect } from 'react'
import './styles.scss'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'




const RequestBlockProjects = (props) => {
    const { bgImage, h2Text, h3Text } = props
    const styleString = '.req-block::before{background-image: url(' + bgImage + ');}'

    const token = '5861006903:AAFry8owUoELNl7R6zg8d0zzAhvJaXm1e4Y';
    const chatId = '-641195533';
    const testChatId = '-979763403'

    const [ipName, setIpName]  = useState('');
    const [ipEmail, setIpEmail] = useState('');
    const [ipTel, setIpTel] = useState('');
    const [ipProject, setIpProject] = useState('')
    const [ipText, setIpText] = useState('');
    const [showThankYou, setShowThankYou] = useState(false);

    


    const handleSubmit = (e) => {

      let url = 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=' + chatId + '&parse_mode=html&text='

      if (ipName === 'TEST') {
          url = 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=' + testChatId + '&parse_mode=html&text='
      }

      e.preventDefault()
      if (ipName === '') {
        alert('Введите Ваше имя')
        return
      }
      if (ipTel === '') {
        alert('Введите Ваш телефон')
        return
      }
      if (ipProject === '') {
        alert('Выберите тур')
        return
      }

      const query = url + '<b>Имя:</b> ' + ipName + '%0A<b>e-mail:</b> ' + ipEmail  + '%0A<b>Телефон:</b> ' + ipTel + '%0A<b>Выбранный проект:</b> ' + ipProject + '%0A<b>Дополнительная информация:</b> ' + ipText

      setShowThankYou(true)
      fetch(query)
    }

    const thankYou = (name) => {
      return (
        <div className='thankyou'>
          <div className='thankyou__close' onClick={() => setShowThankYou(false)}></div>
          <div className='thankyou__text'>
            <h3>Спасибо, {name}! </h3> <br/>
            <h3>Скоро с Вами свяжется наш менеджер.</h3></div>
        </div>
      )
    }


  return (
    <div className = "req-block">
        {/* {showThankYou && thankYou(ipName)} */}
        {showThankYou && <Navigate to = '/thankyou' />} 
        <div className = "req-block__text">
            <h2>{h2Text}</h2>
            <h3>{h3Text}</h3>
        </div>
        <form name = 'request__form' action = "#">
            <input type="text" required  name="name" placeholder="Имя" value = {ipName} onChange={ (e) => setIpName(e.target.value)} />
            <input type="email" name="email" placeholder="e-mail" value = {ipEmail} onChange={ (e) => setIpEmail(e.target.value)} />
            <input type="tel" required  name="tel" placeholder="Телефон" value = {ipTel} onChange={ (e) => setIpTel(e.target.value)} />
            <select name ="project-select" onChange={ (e) => setIpProject(e.target.value)}>
              <option disabled selected = "selected">В каком проекте вы хотите принять участие?</option>
              <option value="Snow Ride Putorana">Snow Ride Putorana</option>     
              <option value="Чисто Лама">Чисто Лама</option>           
            </select>
            <textarea name="text" placeholder="Дополнительная информация и вопросы" rows="5" value = {ipText} onChange={ (e) => setIpText(e.target.value)} />
            <button onClick={(e) => handleSubmit(e)}>Отправить</button>
            <label>Нажимая кнопку "Отправить", вы соглашаетесь с <a href = 'https://territoryputorana.ru/privacy'>обработкой персональных данных</a></label>
        </form>
        <style>{styleString}</style>
    </div>
    
  )
}

export default RequestBlockProjects