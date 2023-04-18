import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom'


import './styles.scss'
import MENU from './menu.json'



const Header = (props) => {
  const { headerBackgroundColor, headerLinkColor } = props
  const [menuActive, setMenuActive] = useState(false)
  const location = useLocation();
  const [pageClass, setPageClass] = useState('')


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
              <NavLink to = {menuItem.href} className = {`menu__link ${pageClass}`}>{menuItem.title}</NavLink>
              {menuItem.items && renderSubMenu(menuItem.items)}
            </li>     
            )
          }
        </ul>
      </nav>
  )}
  
  
  const renderBurgerMenu = (MENU) => {
    return (
      <div className='burger-menu' >
        <ul>
        {MENU.map( (menuItem) => <li key={menuItem.id} >
                                      <Link to = { menuItem.href } onClick={() => setMenuActive(false)}>{ menuItem.title } </Link>
                                      {menuItem.items && (<ul>{menuItem.items.map( (subMenuItem) => <li key = {subMenuItem.id}><Link to = {subMenuItem.href} onClick={() => setMenuActive(false)}>{subMenuItem.title}</Link></li>)}</ul>)}
                                    </li> 
                                )}                
        </ul>
      </div>
    )
  }

  
 

  useEffect( () => 
  {    
    console.log('constrtuctor')
    const burger = document.querySelector('.header__burger');
    const burgerMenu = document.querySelector('.burger-menu');
    const main = document.querySelector('main');
    const body = document.body;    

    const destructor = () => {
      console.log('destructor')  
      main && main.removeEventListener('click', clickHandler)
    }

    const clickHandler = () => {
      console.log('click on main')
      setMenuActive(false)
    }

    if(menuActive) {
      console.log('menuActive true')
      burgerMenu.classList.add('active');
      body.classList.add('lock');
      burger.classList.add('active');
      setTimeout(() => main && main.addEventListener('click', clickHandler), 500);
    } else {
      console.log('menuActive false')
      burgerMenu.classList.remove('active');
      body.classList.remove('lock');
      burger.classList.remove('active');
    }
    return destructor
    
  }, [menuActive])

  useEffect( () => {
    switch(location.pathname) {
      case '/':
        setPageClass('main-page')
        break
      case '/Lama3d':
        setPageClass('tour3d')
        break;
      case '/tourpage':
        setPageClass('tour-page-class')
        break;
      case '/about':
        setPageClass('tour-page-class')
        break;
      case '/lostput':
        setPageClass('tour-page-class')
        break;
      case '/weekend':
        setPageClass('tour-page-class')
        break;
      case '/camping':
        setPageClass('tour-page-class')
        break;
      case '/skitour':
        setPageClass('tour-page-class')
        break;
      default:
        setPageClass('other-page')
    }  
  }, [location])


  return (    
    <header className = {`header ${pageClass}`}>
      <div className='header__body'>

        
        <div className = {`header__burger ${pageClass}`} onClick={ () => menuActive ? setMenuActive(false) : setMenuActive(true) }>
          <span></span>
        </div>
        { renderMainMenu(MENU) }
        { renderBurgerMenu(MENU) }
        <div className = {`header__contacts ${pageClass}`}>
          <a href="tel:+79039299383">+7 (903) 929-93-83</a>
          <div className = "header__icons">
              <a href="https://vk.cc/cmIUok"><img className = "header__icon" src="./img/vk_ico.png"></img></a>
              <a href="https://wa.me/79039299383"><img className = "header__icon" src="./img/wa_ico.png"></img></a>
              <a href="https://t.me/lysov_anton"><img className = "header__icon" src="./img/tlgrm_ico.png"></img></a>
          </div>                  
        </div>  
        <div className = {`header__home ${pageClass}`}>
          <Link to = '/' onClick={() => setMenuActive(false)}>
              <img src='./img/home.png'></img>
            </Link>
          </div>      
      </div>
    </header>
  )
}

export default Header