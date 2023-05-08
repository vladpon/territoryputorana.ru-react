import React from 'react'
import './styles.scss'

const VideoClip = (props) => {
    const {src, h2Text} = props
  return (
    <div className = 'video-clip'>
        <h2>{h2Text}</h2>
        <video controls>
            <source src={src}  preload="metadata"></source>
        </video>
    </div>
  )
}

export default VideoClip