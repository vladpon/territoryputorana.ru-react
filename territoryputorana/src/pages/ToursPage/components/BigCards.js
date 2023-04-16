import React, { useEffect, useState } from 'react'
import './styles.scss'
import { useLocation, useNavigate } from 'react-router-dom'


const BigCards = (props) => {
    const { content } = props
    const location = useLocation();
    const [cardsType, setCardsType] = useState('')
    let navigate = useNavigate()

    useEffect( () => {
        (location.pathname === '/partners') ? setCardsType('big-cards__img_partners') : setCardsType('big-cards__img_other')
    }, [] )

  return (
    <div className = "big-cards">
        { content ? (
            content.map( ( item ) => 
                    {
                        return (
                            <div className = "big-cards__card" key = {item.id} onClick={() => navigate(item.href)}>
                                <div className = {"big-cards__img " + cardsType} >                                    
                                    <img src={item.smallImg} alt="" />
                                </div>
                                <div className = "big-cards__description">
                                    <h3>{item.title}</h3>
                                    {item.description.map( (p, index) => <p key = {index}>{p}</p>)}
                                    <p>
                                    {item.contacts.tel && (<>Контакты<br />т. <a href={`tel:${item.contacts.tel}`}>{item.contacts.tel}</a></>)}
                                    {item.contacts.email && (<><br />e-mail: <a href={`mailto:${item.contacts.email}`}>{item.contacts.email}</a></>)}
                                    {item.contacts.site && (<><br /><a href={`${item.contacts.site}`}>{item.contacts.site}</a></>)}
                                    {item.files && item.files.map( (file, index) => (<a key = {index} href={`${file.src}`} style={{textDecoration: "underline"}} >{file.name}</a>))}
                                    </p>                            
                                    <div className="big-cards__info">
                                        <div className="big-cards__cost">
                                            <span>{item.price}</span>
                                            <span>{item.time}</span>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        )
                    }
                )
            ) : <h2>no content</h2>
        }
    </div>
  )
}

export default BigCards