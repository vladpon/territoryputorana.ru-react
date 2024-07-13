import React from 'react'
import './styles.scss';

const InfoFrame = (props) => {
    const {price, title, reference, description, included, clothes} = props
  return (
            
        <div className = "infoframe">
                <h3>{title}</h3>
                {<div dangerouslySetInnerHTML={{__html: description}} />}
                <span className = "infoframe__price">{price}</span><br />
                {reference && (
                    <div className='infoframe__note'><span>*{reference}</span></div>
                )}
                {included && <div className = 'infoframe__note infoframe__note_included' >
                        <span>*Что включено?</span>
                        <div className='infoframe__modal display-switch'>
                            <div className = 'modal__text' dangerouslySetInnerHTML={{__html: included}}></div>
                        </div>
                    </div>}
                {clothes && <details>
                                <summary className = 'infoframe__note infoframe__note_included'><span>*Рекомендации по одежде и снаряжению</span></summary>
                                <div className = 'modal__text' dangerouslySetInnerHTML={{__html: clothes}}></div>
                            </details>}
                    
        </div>
  )
}

export default InfoFrame