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
                                    {(item.bold || item.pale) &&
                                    <div className="wide-cards__bottom">
                                        <div className="wide-cards__bold">
                                            <span>{item.bold}</span>                                            
                                        </div>
                                        <div className='wide-cards__pale'>
                                            <span>{item.pale}</span>
                                        </div>
                                    </div>}
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