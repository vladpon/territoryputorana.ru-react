import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const CardsBlock = (props) => {
    const { tours } = props;
    const navigate = useNavigate();


  return (
    <div className="cards-block">
            <div className="cards-block__title">
                <h1><span>Туры</span> на плато Путорана</h1>
                <p>Готовые программы для вашего путешествия и отдыха</p>
            </div>
            <div className="cards-block__card-container card-container">

                {tours ? (
                    tours.map( (tour, index) => {
                        if (index < 6) return (
                        <div className="card-container__card" key = {tour.id} onClick = {() => navigate(tour.href)} >
                            <div className="card-container__bg">
                                <img src={tour.smallImg}></img>
                            </div>
                            <div className="card-container__text-container" >
                                <div className="card-container__top-text">
                                    <div className="card-container__season">{tour.season}</div>
                                    <div className="card-container__title">{tour.title}</div>
                                </div>
                                <div className="card-container__bottom-text">
                                    <div className="card-container__days">{tour.time}</div>
                                    <div className="card-container__price">{tour.price}</div>
                                </div>
                            </div>
                        </div>
                        )
                    })
                ) :
                <h1>No Tours found</h1>}
                
                
            </div>
            <div className="cards-block__link"><Link to = '/tours'> Перейти в каталог туров </Link></div>
        </div>
  )
}

export default CardsBlock