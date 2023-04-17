import React from 'react'

const TourPageAbout = () => {
  return (
    <div className = "tp-about__container">
        <div className='tp-about'>
            <div className = "tp-about__main">
                <h2>О туре</h2>
                <p>Многие туристы, мечтая о путешествии на плато Путорана, не рассматривают длительные переходы с рюкзаками и не готовы жить в палатках без привычных удобств. При этом им очень хочется увидеть самые впечатляющие природные локации заполярного края. </p>
                    <p>Специально для таких путешественников мы подготовили комфортный тур по наиболее эффектным видовым локациям, которые, по нашему мнению, входят в топ потрясающих мест плато Путорана. Вас ждут уникальные горы без вершин, кристально-чистые ледниковые озера и горные реки, срывающиеся со скал бурными водопадами.</p>
                    <p>В летний период вы сможете наблюдать северное чудо - полярный день, солнце не будет уходить за горизонт ни на одну минуту. А с конца августа на плато Путорана есть вероятность увидеть северное сияние.
                </p>
            </div>
            <div className = "tp-about__hit">
                <h3>Хит!</h3>
                <p><span>Время проведения:</span><span> июнь - сентябрь</span></p>
                <p><span>Размер группы:</span><span> от 10 человек</span></p>
                <p><span>Продолжительность:</span><span> 8 дней / 7 ночей</span></p>
                <p><span>Проживание:</span><span> 6 ночей – благоустроенная усадьба на озере Лама. 1 ночь – гостиница в Норильске</span></p>
                <p><span>Уровень:</span><span> легкий, можно путешествовать с детьми</span></p>            
                <span className = "tp-about__price">от 230&nbsp;000&nbsp;руб./чел.*</span><br />
                <span className = 'tp-about__note'>*cтоимость зависит от выбранного варианта питания и дополнительных услуг</span>
            </div>
        </div>
    </div>
  )
}

export default TourPageAbout