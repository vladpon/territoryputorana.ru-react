import React, { useEffect, useState} from 'react'
import './styles.scss'

const isSafari = () => {
    const ua = navigator.userAgent.toLowerCase();
    return ua.indexOf("safari") > -1 && ua.indexOf("chrome") < 0;
}

const Cover = () => {
    const [shouldUseImage, setShouldUseImage] = useState(false);
    const pathToVideo = './img/wf.mp4';
    
    useEffect( () => {
        const vid = document.querySelector('.vid');
        if (isSafari() && vid) {
            const player = vid.children[0];
            if (player) {
                player.controls = false;
                player.playsinline = true;
                player.muted = true;
                player.setAttribute("muted", "");
                player.autoplay = true;

                setTimeout( () => {
                    const promise = player.play();
                    if (promise.then) {
                        promise
                        .then(() => {})
                        .catch(() => {
                            vid.style.display = "none";
                            setShouldUseImage(true);
                        })
                    }
                }, 0)
            }
        }
    }, []);


  return (
    <div className='cover'>
        <div className="cover__bg">
            {shouldUseImage ? 
                (<img src={pathToVideo} alt="Muted Video" />) :  
                (<div className = 'vid' dangerouslySetInnerHTML={{
                    __html:`
                    <video loop muted playsinline autoplay preload="auto"><source src = "${pathToVideo}"></source></video>
                    `
                }} />)}
        </div>
        
        <div className="cover__logo">
            <img src="./img/main_logo.svg"></img>         
        </div>  

    </div>
  )
}

export default Cover