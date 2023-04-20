import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

const MainLogo = (props) => {
  const {logoImg, backgroundColor} = props
  return (
    <div className="main-logo" style = {backgroundColor ? {backgroundColor: backgroundColor, backgroundImage: 'none'} : {backgroundColor: 'none'}}>
        <Link to = "/"><img src={ logoImg ? logoImg : "./img/main_logo.svg"} alt="logo" /></Link>
    </div>
  )
}

export default MainLogo