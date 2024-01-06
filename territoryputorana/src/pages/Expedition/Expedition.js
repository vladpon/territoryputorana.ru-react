
import tours from '../../data/tours.json'


import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom'
import MainLogo from '../../components/MainLogo/MainLogo'



import TourPageCover from '../TourPage/components/TourPageCover'
import InfoFrame from '../../components/InfoFrame/InfoFrame'
import TextTitle from '../MainPage/components/TextTitle'
import PhotoBlock from '../TourPage/components/PhotoBlock'
import RequestBlock from '../../components/RequestBlock/RequestBlock'
import TourPageProgram from '../TourPage/components/TourPageProgram'

import './styles.scss'


const txtTitle = {
    title: "Транспорт",
    text: [
        "Заброска на озеро Лама и обратно осуществляется на скоростном катере или судне на воздушной подушке"
    ]
}

const photos = [
    { src: "./img/photo1699212158.jpeg" },
    { src: "./img/photo1699212158 (1).jpeg" },
    { src: "./img/photo1699212158 (2).jpeg" },
    { src: "./img/photo1699212158 (3).jpeg" },
    { src: "./img/1335f6f2-1e10-48b6-8d1c-d5c7d6620fd6.jpg" },
    { src: "./img/photo1699212266.jpeg" }
]

const Expedition = (props) => {

    const {tour} = props

    const location = useLocation()
    const pathname = location.pathname

    const [tourData, setTourData] = useState(tour)

    useEffect( () => {
        setTourData(tours.find(tour => tour.id === 'expedition'))
    }, [])


    return (
    <main className='tour-page'>
        <Helmet>
        <title>Экспедиция выходного дня</title>
        <link rel="canonical" href={`https://territoryputorana.ru${pathname}`} />
        <meta name = 'description' content = '' />
        </Helmet>
        <MainLogo />
        <TourPageCover tour = {tourData}/>
        <div className = "tp-about__container">
          <div className='tp-about'>
              <div className = "tp-about__main">
                  <h2>О туре</h2>
                  {tourData.about && tourData.about.map( (p, index) => <p key={index}>{p}</p>)}
              </div>
              <div className='tp-about__hit-container'>
                  <InfoFrame price = {tourData.price} title = {tourData.detailsTitle} reference = {tourData.reference} refSpan = {tourData.refSpan} description = {tourData.details} included = {tourData.included}/>
              </div>
            </div>
        </div>
        <TextTitle txtTitle = {txtTitle} />
        <div className = 'tp-aux__container'>
          <div className = "tp-aux">
                  <p>Безопасность участников экспедиции выходного дня обеспечивается на всех уровнях, включая регистрацию в МЧС, сопровождение группы опытным гидом-проводником, постоянная спутниковая и радио-связь.</p>
              </div>
        </div>
        {/* <div className = 'tp-program__container'>
            <div className = "tp-program">
                {tourData.tourProgram.days && tourData.tourProgram.days.map( (day) => {
                        return <div className = "tp-program__day" key = {day.dayTitle}>
                                    <div className = "tp-program__text">
                                        <h3>{day.dayTitle}</h3>
                                        {day.dayDesc && day.dayDesc.map( (p, index) => <p key = {index}>{p}</p>)}
                                    </div>
                                    <div className="tp-program__img">
                                        <img src={day.dayImg} />
                                    </div>
                                </div>   
                    })}   
            </div>
        </div> */}

        <TourPageProgram tour = {tourData}/>
        <PhotoBlock photos = {photos}/>
        <RequestBlock bgImage = {'/img/photo1699212266.jpeg'}  h2Text = {"Оставить заявку на тур"} h3Text = {"Напишите свои пожелания, мы обязательно свяжемся с вами!"}/>
    </main>
    )
    }

    Expedition.defaultProps = {
    tour: {
        id: "",
        href : "",
        title: "",
        time: "",
        season: "",
        detailsTitle: "",
        details: "",
        included: "",
        price: "",
        description: [],
        bigImg: "",
        smallImg: "",
        about : [],
        tourProgram: {
            begin: "",
            days: [{}]
        }
    }
}

export default Expedition