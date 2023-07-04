import React, { useEffect } from 'react'
import './styles.scss'
import { useState } from 'react'




const RequestBlock = (props) => {
    const { bgImage, h2Text, h3Text } = props
    const styleString = '.req-block::before{background-image: url(' + bgImage + ');}'

    const token = '5861006903:AAFry8owUoELNl7R6zg8d0zzAhvJaXm1e4Y';
    const chatId = '-641195533';
    const chat2Id = '-993753426';

    const [ipName, setIpName]  = useState('');
    const [ipEmail, setIpEmail] = useState('');
    const [ipTel, setIpTel] = useState('');
    const [ipTour, setIpTour] = useState('')
    const [ipCount, setIpCount] = useState('')
    const [ipText, setIpText] = useState('');
    const [showThankYou, setShowThankYou] = useState(false);

    


    const handleSubmit = (e) => {

      const url = (ipTour === 'Палаточный кемпинг на озере Лама') ? 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=' + chat2Id + '&parse_mode=html&text=' :
      'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=' + chatId + '&parse_mode=html&text='

      e.preventDefault()
      if (ipName === '') {
        alert('Введите Ваше имя')
        return
      }
      if (ipTel === '') {
        alert('Введите Ваш телефон')
        return
      }
      if (ipTour === '') {
        alert('Выберите тур')
        return
      }
      if (ipCount === '') {
        alert('Введите количество участников')
        return
      }
      const query = url + '<b>Имя:</b> ' + ipName + '%0A<b>e-mail:</b> ' + ipEmail  + '%0A<b>Телефон:</b> ' + ipTel + '%0A<b>Выбранный тур:</b> ' + ipTour + '%0A<b>Количество участников:</b> ' + ipCount + '%0A<b>Дополнительная информация:</b> ' + ipText
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
        {showThankYou && thankYou(ipName)}
        <div className = "req-block__text">
            <h2>{h2Text}</h2>
            <h3>{h3Text}</h3>
        </div>
        <form name = 'request__form' action = "#">
            <input type="text" required  name="name" placeholder="Имя" value = {ipName} onChange={ (e) => setIpName(e.target.value)} />
            <input type="email" name="email" placeholder="e-mail" value = {ipEmail} onChange={ (e) => setIpEmail(e.target.value)} />
            <input type="tel" required  name="tel" placeholder="Телефон" value = {ipTel} onChange={ (e) => setIpTel(e.target.value)} />
            <select name ="tour-select" onChange={ (e) => setIpTour(e.target.value)}>
              <option disabled selected = "selected">Какой тур Вас интересует</option>
              <option value="Затерянный мир плато Путорана">Затерянный мир плато Путорана</option>
              <option value="Палаточный кемпинг на озере Лама">Палаточный кемпинг на озере Лама</option>
              <option value="Ски-тур">Ски-тур</option>
              <option value="Трейлраннинг кемп">Трейлраннинг кемп</option>
              <option value="Вертолетная экскурсия">Вертолетная экскурсия</option>
              <option value="Усадьба Жар. Птица">Усадьба Жар. Птица</option>
            </select>
            <input type="text" required  name="count" placeholder="Количество участников в Вашей группе" value = {ipCount} onChange={ (e) => setIpCount(e.target.value)} />
            <textarea name="text" placeholder="Дополнительная информация и вопросы" rows="5" value = {ipText} onChange={ (e) => setIpText(e.target.value)} />
            <button onClick={(e) => handleSubmit(e)}>Отправить</button>
        </form>
        <style>{styleString}</style>
    </div>
    
  )
}

export default RequestBlock