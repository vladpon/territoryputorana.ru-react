import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import './styles.scss'
import MENU from './menu.json'


const renderMainMenu  = (MENU) => {
  
  const renderSubMenu = (items) => {
    const subMenu = items.map((subMenuItem) => 
      <li className = "sub-menu__link" key = {subMenuItem.id}>
        <Link to = {subMenuItem.href}>{subMenuItem.title}</Link>
      </li>
    )
    return (
      <ul className ="menu__sub-menu sub-menu">
        {subMenu}
      </ul>
    )
  }
  return (
    <nav className='header__menu menu'>
      <ul className='menu__list'>
        {MENU.map((menuItem) => 
          <li key = {menuItem.id}>
            <Link to = {menuItem.href} className = "menu__link">{menuItem.title}</Link>
            {menuItem.items && renderSubMenu(menuItem.items)}
          </li>     
          )
        }
      </ul>
    </nav>
)}


const renderBurgerMenu = (MENU) => {
  return (
    <div className='burger-menu'>
      <ul>
      {MENU.map( (menuItem) => <li key={menuItem.id}>
                                    <Link to = { menuItem.href } >{ menuItem.title } </Link>
                                    {menuItem.items && (<ul>{menuItem.items.map( (subMenuItem) => <li key = {subMenuItem.id}><Link to = {subMenuItem.href}>{subMenuItem.title}</Link></li>)}</ul>)}
                                  </li> 
                              )}                
      </ul>
    </div>
  )
}

const Header = (props) => {
  const { headerBackgroundColor } = props
  const [menuActive, setMenuActive] = useState(false)

  useEffect( () => 
  {
    const burger = document.querySelector('.header__burger');
    const burgerMenu = document.querySelector('.burger-menu');
    const body = document.body;
    
    burgerMenu.classList.toggle('active');
    body.classList.toggle('lock');
    burger.classList.toggle('active');
  }, [menuActive])



  return (
    <header className='header' style = {{backgroundColor: headerBackgroundColor}}>
      <div className='header__body'>
        
        <div className='header__burger' onClick={ () => menuActive ? setMenuActive(false) : setMenuActive(true) }>
          <span></span>
        </div>        
        { renderMainMenu(MENU) }
        { renderBurgerMenu(MENU) }
        <div className = "header__contacts">
          <a href="tel:+79039299383"><span>+7 (903) 929-93-83</span></a>
          <div className = "header__icons">
              <a href="https://vk.cc/cmIUok"><img className = "header__icon" src="./img/vk_ico.png"></img></a>
              <a href="https://wa.me/79039299383"><img className = "header__icon" src="./img/wa_ico.png"></img></a>
              <a href="https://t.me/lysov_anton"><img className = "header__icon" src="./img/tlgrm_ico.png"></img></a>
          </div>                  
        </div>  
        <div className='header__home'>
          <Link to = '/'>
              <img src='./img/home.png'></img>
            </Link>
          </div>      
      </div>
    </header>
  )
}

export default Header