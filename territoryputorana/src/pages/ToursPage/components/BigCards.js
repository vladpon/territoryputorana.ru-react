import React, { useEffect, useState } from 'react'
import './styles.scss'
import { useLocation, useNavigate } from 'react-router-dom'


const BigCards = (props) => {
    const { content,  sections} = props
    const [filteredContent, setFilteredContent] = useState(content)
    const location = useLocation();
    const [cardsType, setCardsType] = useState('')
    let navigate = useNavigate()
    
    const [activeSections, setActiveSections] = useState([])

    useEffect( () => {
        (location.pathname === '/partners') ? setCardsType('big-cards__img_partners') : setCardsType('big-cards__img_other')
        if(sections) setActiveSections(sections[0])
    }, [] )

    useEffect( () => {
        if(sections) {
                setFilteredContent(content.filter( (item) => activeSections.includes(item.section)))
                }        
    }, [activeSections])


    const handleSectionButton = (section) => 
        // (activeSections.includes(section)) ? setActiveSections(activeSections.filter( item => item !== section))
        //     : setActiveSections([...activeSections, section])
        setActiveSections(section)



  return (
    <div className = "big-cards">
        {sections ? (
                        <div className='big-cards__sections'>
                            {sections.map((section) => (
                                <button  key={section} onClick={() => handleSectionButton(section)} className = {activeSections.includes(section) ? 'active main-button' : 'main-button'}>{section}</button>
                                )
                                )
                            }
                        </div>) : <></>}
        { content ? (
            filteredContent.map( ( item ) => 
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
                                    {item.contacts.wa && (<><a href={`https://wa.me/${item.contacts.wa}`}>{'whatsapp: '+item.contacts.wa}</a></>)}
                                    {item.contacts.address && (<><br />{`${item.contacts.address}`}</>)}
                                    {item.files && item.files.map( (file, index) => (<a className = 'big-cards__filelink' key = {index} href={`${file.src}`} style={{textDecoration: "underline"}} >{file.name}</a>))}
                                    </p>
                                    <div className="big-cards__info">
                                        <div className="big-cards__cost">
                                            <span>{item.price}</span>
                                            <span>{item.time}</span>
                                        </div>
                                        {(item.varPrice !== "") && (
                                            <div className='big-cards__cost'>
                                                <span>{item.varPrice}</span>
                                                <span>{item.varTime}</span>
                                            </div>
                                        )}


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