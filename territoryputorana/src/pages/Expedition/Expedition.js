
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


const txtTitle = {
    title: "Транспорт",
    text: [
        "Заброска на озеро Лама и обратно осуществляется на скоросном катере или судне на воздушной подушке"
    ]
}

const photos = [
    { src: "./img/photo1699212158.jpeg" },
    { src: "./img/photo1699212158 (1).jpeg" },
    { src: "./img/photo1699212158 (2).jpeg" },
    { src: "./img/photo1699212158 (3).jpeg" },
    { src: "./img/photo1699212158 (4).jpeg" },
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
        about : []
    }
}

export default Expedition