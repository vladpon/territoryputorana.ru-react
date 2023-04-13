import React from 'react'



const TextOneImage = (props) => {
    const { textOneImage } = props
    return (
        <div className='bg-container'>
            <div className="txt-oimg">
                <div className="txt-oimg__text-block">
                    <div className="txt-oimg__title">
                        <h2>{textOneImage.title_h2}</h2>
                        <h3>{textOneImage.title_h3}</h3>
                    </div>
                    <div className="txt-oimg__text">
                        {textOneImage.text.map( (p, index) => <p key = {index}>{p}</p>)}
                    </div>
                </div>
                <div className="txt-oimg__img">
                    <img src={textOneImage.img} />
                </div>
            </div>
        </div>
    )
}

export default TextOneImage