import React from 'react'



const TextWord = (props) => {
    const { text, word } = props


  return (
    <div class="text-word">
            <div class="text-word__word"><span>{word}</span></div>
            <div class="text-word__text"><p>{text}</p></div>
    </div>
  )
}

export default TextWord