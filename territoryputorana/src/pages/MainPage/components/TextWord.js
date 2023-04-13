import React from 'react'



const TextWord = (props) => {
    const { text, word } = props


  return (
    <div className="text-word">
            <div className="text-word__word"><span>{word}</span></div>
            <div className="text-word__text"><p>{text}</p></div>
    </div>
  )
}

export default TextWord