import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer__logo-container'>
            <Link to = '/' className = 'footer__logo'>
                <img src='https://territoryputorana.ru/img/main_logo.svg'></img>
            </Link>
            <Link to = '/arcticexpeditions' className = 'footer__logo'>
                <img src='https://territoryputorana.ru/img/arctic_logo.svg'></img>
            </Link>
            <Link to = '/sr' className = 'footer__logo'>
                <img src='https://territoryputorana.ru/img/sr_logo.svg'></img>
            </Link>
        </div>
        <div className='footer__contacts'>
            <span>Связаться с нами</span>
            <a href="tel:+79039299383"><span>+7 (903) 929-93-83</span></a>
            <div className="footer__icons">
                <a href="https://vk.cc/cmIUok"><img className="footer__icon" src="https://territoryputorana.ru/img/vk_ico.png"></img></a>
                <a href="https://wa.me/79039299383"><img className="footer__icon" src="https://territoryputorana.ru/img/wa_ico.png"></img></a>
                <a href="https://t.me/territoryputorana"><img className="footer__icon" src="https://territoryputorana.ru/img/tlgrm_ico.png"></img></a>
            </div>
            <div className='footer__privacy'>
                <a href = 'https://territoryputorana.ru/privacy'>Политика конфиденциальности</a>
                <span>РТО 025757</span>
            </div>
        </div>
    </footer>
  )
}

export default Footer