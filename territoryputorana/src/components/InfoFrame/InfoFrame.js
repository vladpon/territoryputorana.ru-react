import React from 'react'
import './styles.scss';

const InfoFrame = (props) => {
    const {price, title, reference, description, refSpan} = props
  return (
            
        <div className = "infoframe">
                <h3>{title}</h3>
                {<div dangerouslySetInnerHTML={{__html: description}} />}
                <span className = "infoframe__price">{price}</span><br />
                {refSpan && <span className = 'infoframe__note' >*{refSpan}</span>}
                {reference && (
                    <div className='infoframe__modal display-switch'>
                        <div className = 'modal__text' dangerouslySetInnerHTML={{__html: reference}}></div>
                    </div>
                )}
        </div>
  )
}

export default InfoFrame