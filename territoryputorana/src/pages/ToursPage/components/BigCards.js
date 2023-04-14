import React from 'react'
import './styles.scss'


const BigCards = (props) => {
    const { content } = props
  return (
    <div className = "big-cards">
        { content ? (
            content.map( ( item ) => 
                    {
                        return (
                            <div className = "big-cards__card" key = {item.id}>
                                <div className = "big-cards__img">
                                    <img src={item.smallImg} alt="" />
                                </div>
                                <div className = "big-cards__description">
                                    <h3>{item.title}</h3>
                                    {item.description.map( (p, index) => <p key = {index}>{p}</p>)}
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