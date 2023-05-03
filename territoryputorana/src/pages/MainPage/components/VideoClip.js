import React from 'react'
import './styles.scss'

const VideoClip = (props) => {
    const {src} = props
  return (
    <div className = 'video-clip'>
        <video controls>
            <source src={src}  preload="metadata"></source>
        </video>
    </div>
  )
}

export default VideoClip