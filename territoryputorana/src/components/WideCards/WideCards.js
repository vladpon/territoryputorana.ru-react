import React, { useEffect, useState } from 'react'
import './styles.scss'
import { useLocation, useNavigate } from 'react-router-dom'


const WideCards = (props) => {
    const { content,  sections} = props

    const [filteredContent, setFilteredContent] = useState(content)
    const [cardsType, setCardsType] = useState('')
    const [activeSections, setActiveSections] = useState([])

    const location = useLocation();
    
    let navigate = useNavigate()
    
    

    // useEffect( () => {
    //     ((location.pathname === '/partners') || (location.pathname === '/heliski')) ? setCardsType('big-cards__img_partners') : setCardsType('big-cards__img_other')
    //     if(sections) setActiveSections(sections[0])
    // }, [] )

    useEffect( () => {
        if(sections) {
                setFilteredContent(content.filter( (item) => activeSections.includes(item.section)))
                }        
    }, [activeSections])



  return (
    <div className = "wide-cards">
        {sections ? (
                        <div className='wide-cards__sections'>
                            {sections.map((section) => (
                                <button  key={section} onClick={() => setActiveSections(section)} className = {activeSections.includes(section) ? 'active main-button' : 'main-button'}>{section}</button>
                                )
                                )
                            }
                        </div>) : <></>}
        { content ? (
            filteredContent.map( ( item ) => 
                    {
                        return (
                            <div className = "wide-cards__card" key = {item.id} onClick={() => navigate(item.href)}>
                                <div className = {"wide-cards__img " + cardsType} >                                    
                                    <img src={item.img} alt="" />
                                </div>
                                <div className = "wide-cards__description">
                                    {console.log(item)}
                                    <h3>{item.title}</h3>
                                    {item.description.map( (p, index) => <p key = {index}>{p}</p>)}
                                    {/* <p>
                                    {item.contacts.tel && (<>Контакты<br />т. <a href={`tel:${item.contacts.tel}`}>{item.contacts.tel}</a></>)}
                                    {item.contacts.email && (<><br />e-mail: <a href={`mailto:${item.contacts.email}`}>{item.contacts.email}</a></>)}
                                    {item.contacts.site && (<><br /><a href={`${item.contacts.site}`}>{item.contacts.site}</a></>)}
                                    {item.contacts.wa && (<><a href={`https://wa.me/${item.contacts.wa}`}>{'whatsapp: '+item.contacts.wa}</a></>)}
                                    {item.contacts.address && (<><br />{`${item.contacts.address}`}</>)}
                                    {item.files && item.files.map( (file, index) => (<a className = 'wide-cards__filelink' key = {index} href={`${file.src}`} style={{textDecoration: "underline"}} >{file.name}</a>))}
                                    </p> */}
                                    <div className="wide-cards__info">
                                        {/* <div className="wide-cards__cost">
                                            <span>{item.price}</span>
                                            <span>{item.time}</span>
                                        </div> */}
                                        {/* {(item.varPrice !== "") && (
                                            <div className='wide-cards__cost'>
                                                <span>{item.varPrice}</span>
                                                <span>{item.varTime}</span>
                                            </div>
                                        )} */}


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

export default WideCards