import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

const MainLogo = () => {
  return (
    <div className="main-logo">
        <Link to = "/"><img src="./img/main_logo.svg" alt="logo" /></Link>
    </div>
  )
}

export default MainLogo