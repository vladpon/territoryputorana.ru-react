import React from 'react'

const TextOneImage2 = () => {
  return (
    <div className='bg-container'>
        <div className = "txt-oimg2">
            <div className = "txt-oimg2__title">
                <h2>Чисто Лама</h2>
                <h3>Экологический проект</h3>
            </div>
            <div className="txt-oimg2__content">
                <p>Победитель Президентского гранта 2023 в направлении «Охрана окружающей среды и защита животных».
                    Мы сформировали команду из увлеченных своим делом активистов «Территории Путорана», специалистов заповедника, волонтеров для уборки и вывоза мусора с заповедной зоны. Грантовая поддержка и привлечение спонсоров позволяет нам обеспечивать команду проекта необходимой техникой и материалами.
                    </p>
                <div className="txt-oimg2__img">
                    <img src="./img/mp_lama.jpg" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default TextOneImage2