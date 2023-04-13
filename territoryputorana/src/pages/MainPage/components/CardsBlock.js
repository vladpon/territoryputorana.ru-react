import React from 'react'



const CardsBlock = (props) => {
    const { tours } = props;
  return (
    <div class="cards-block">
            <div class="cards-block__title">
                <h1><span>Туры</span> на плато Путорана</h1>
                <p>Готовые программы для вашего путешествия и отдыха</p>
            </div>
            <div class="cards-block__card-container card-container">

                {tours ? (
                    tours.map( (tour, index) => {
                        if (index < 6) return (
                        <div class="card-container__card">
                            <div class="card-container__bg">
                                <img src={tour.smallImg}></img>
                            </div>
                            <div class="card-container__text-container">
                                <div class="card-container__top-text">
                                    <div class="card-container__season">{tour.season}</div>
                                    <div class="card-container__title">{tour.title}</div>
                                </div>
                                <div class="card-container__bottom-text">
                                    <div class="card-container__days">{tour.time}</div>
                                    <div class="card-container__price">{tour.price}</div>
                                </div>
                            </div>
                        </div>
                        )
                    })
                ) :
                <h1>No Tours found</h1>}
                
                
            </div>
            <div class="cards-block__link"><a href="./tours.html"> Перейти в каталог туров </a></div>
        </div>
  )
}

export default CardsBlock