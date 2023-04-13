import React from 'react'

const CardsBlock = () => {
  return (
    <div class="cards-block">
            <div class="cards-block__title">
                <h1><span>Туры</span> на плато Путорана</h1>
                <p>Готовые программы для вашего путешествия и отдыха</p>
            </div>
            <div class="cards-block__card-container card-container">
                <div class="card-container__card">
                    <div class="card-container__bg"></div>
                    <div class="card-container__text-container">
                        <div class="card-container__top-text">
                            <div class="card-container__season">лето</div>
                            <div class="card-container__title">Затерянный мир Плато Путорана</div>
                        </div>
                        <div class="card-container__bottom-text">
                            <div class="card-container__days">8 дней/7 ночей</div>
                            <div class="card-container__price">от 230 000</div>
                        </div>
                    </div>
                </div>                
            </div>
            <div class="cards-block__link"><a href="./tours.html"> Перейти в каталог туров </a></div>
        </div>
  )
}

export default CardsBlock