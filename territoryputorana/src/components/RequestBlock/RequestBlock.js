import React, { useEffect } from 'react'
import './styles.scss'
import { useState } from 'react'




const RequestBlock = (props) => {
    const { bgImage, h2Text, h3Text } = props
    const styleString = '.req-block::before{background-image: url(' + bgImage + ');}'

    const token = '5861006903:AAFry8owUoELNl7R6zg8d0zzAhvJaXm1e4Y';
    const chatId = '-641195533';

    const [ipName, setIpName]  = useState('');
    const [ipEmail, setIpEmail] = useState('');
    const [ipText, setIpText] = useState('');

    const url = 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=' + chatId + '&parse_mode=html&text='

    useEffect(() => {
      console.log('ipName:', ipName)
      console.log('ipEmail:', ipEmail)
      console.log('ipText:', ipText)
    },[ipName, ipEmail, ipText])

    const handleSubmit = (e) => {
      e.preventDefault()
      const query = url + '<b>Имя:</b> ' + ipName + '%0A<b>e-mail:</b> ' + ipEmail + '%0A<b>Сообщение:</b> ' + ipText
      fetch(query)
    }


  return (
    <div className = "req-block">
        <div className = "req-block__text">
            <h2>{h2Text}</h2>
            <h3>{h3Text}</h3>
        </div>
        <form name = 'request__form' action = "#">
            <input type="text" name="name" placeholder="Имя" value = {ipName} onChange={ (e) => setIpName(e.target.value)} />
            <input type="email" name="email" placeholder="e-mail" value = {ipEmail} onChange={ (e) => setIpEmail(e.target.value)} />
            <textarea name="text" placeholder="Сообщение" rows="10" value = {ipText} onChange={ (e) => setIpText(e.target.value)} />
            <button onClick={(e) => handleSubmit(e)}>Отправить</button>
        </form>
        <style>{styleString}</style>
    </div>
    
  )
}

export default RequestBlock