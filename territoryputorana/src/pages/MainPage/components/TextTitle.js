import React from 'react'

const TextTitle = (props) => {
   const { txtTitle } = props
  return (
    <div className = 'txt-title'>
        <h2>{txtTitle.title}</h2>
        {txtTitle.text && txtTitle.text.map( (p, index) => <p key = {index}>{p}</p>)}
    </div>
  )
}

export default TextTitle