import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer__logo-container'>
            <Link to = '/' className = 'footer__logo'>
                <img src='./img/main_logo.svg'></img>
            </Link>
            <Link to = '/' className = 'footer__logo'>
                <img src='./img/arctic_logo.svg'></img>
            </Link>
            <Link to = '/' className = 'footer__logo'>
                <img src='./img/sr_logo.svg'></img>
            </Link>
        </div>
        <div className='footer__contacts'>
            <span>Связаться с нами</span>
            <a href="tel:+79039299383"><span>+7 (903) 929-93-83</span></a>
            <div class="footer__icons">
                <a href="https://vk.cc/cmIUok"><img class="footer__icon" src="./img/vk_ico.png"></img></a>
                <a href="https://wa.me/79039299383"><img class="footer__icon" src="./img/wa_ico.png"></img></a>
                <a href="https://t.me/lysov_anton"><img class="footer__icon" src="./img/tlgrm_ico.png"></img></a>
            </div> 
        </div>
    </div>
  )
}

export default Footer