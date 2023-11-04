import React, { useEffect } from 'react'
import MainLogo from '../../components/MainLogo/MainLogo'
import TourPageCover from '../TourPage/components/TourPageCover'

import './styles.scss'
import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom'

const arctic = {
    title: 'По следам толсторога',
    bigImg: './img/arctic_cover.jpg'
}

const routes = [
    {
        title: "Лыжный зимний маршрут",
        pic: [
            "./img/arctic001a.jpg",
            "./img/arctic001.jpg"
        ],
        text: 'Проходит по долинам рек Норильская, Талая, Лама, озер Мелкое и Лама с подъемом к обзорным точкам с потрясающими видами на трапповый рельеф плато Путорана.'
    },
    {
        title: "Снегохоный зимний маршрут",
        pic: [
            "./img/arctic002a.jpg",
            "./img/arctic002.jpg"
        ],
        text: 'Проходит по долинам рек Норильская, Талая, Глубокая, Лама, Дынкенда, Муксун и озер Мелкое, Лама, Глубокое, Капчук, Собачье. Захватывает горный рельеф плато Путорана со множеством обзорных точек и впечатляющих локаций.'
    },
    {
        title: "Водно-пеший летний маршрут",
        pic: [
            "./img/arctic003a.jpg",
            "./img/arctic003.jpg"
        ],
        text: 'Водная часть маршрута проходит по основным водным артериям плато Путорана. Современное судно на воздушной подушке сделает эту часть путешествия увлекательной и комфортной. Пешие маршруты позволяют увидеть самые эффектные локации плато и познакомиться с природой Арктики.'
    },
    {
        title: "Трейлраннинг летние маршруты",
        pic: [
            "./img/arctic004a.jpg",
            "./img/arctic004.jpg"
        ],
        text: 'Впервые в этом году на озере Лама будет организован трейлраннинг кемп с проживанием на комфортабельной базе. У вас есть уникальная возможность стать первыми покорителями беговых маршрутов плато Путорана. На этих бескрайних просторах вы сможете прокачать свою спортивную форму и воплотить заветную мечту об освоении Арктики!'
    }
]

const Tolstorog = () => {

    useEffect( () => {
        window.YandexRotorSettings.isLoaded = true
      }, [])

    const location = useLocation()
  const pathname = location.pathname


  return (
    <main>
        <Helmet>
            <title>Исследовательский проект</title>
            <link rel="canonical" href={`https://territoryputorana.ru${pathname}`} />
            <meta name = 'description' content = 'Экспедиции Арктики – разработка маршрутов экологического и познавательного туризма на плато Путорана. Объединенная дирекция заповедников Таймыра. Путоранский заповедник. Территория Путорана.' />
        </Helmet>
        <MainLogo logoImg = './img/arcticLogo3.svg' backgroundColor = '#fff'/>
        <TourPageCover tour = {arctic} />
        <div className = 'tp-aux__container'>
          <div className = "tp-aux">
              <p>Много ли на Земле осталось мест, где практически не ступала нога человека?</p>
              <p>Плато Путорана – одно из таких мест. Заповедная арктическая земля с 2010 года является объектом всемирного культурного наследия ЮНЕСКО и требует к себе особенно бережного отношения. В 2022 году для разработки маршрутов экологического и познавательного туризма команда «Территории Путорана» совместно с Объединенной дирекцией заповедников Таймыра организовала зимнюю и летнюю экспедиции «По следам толсторога». Проект получил поддержку грантовой программы «Мир Новых Возможностей» Норникеля.</p>
              <p>В общей сложности участниками экспедиции на снегоходах было пройдено более 500 километров по снежной пустыне. Удалось обследовать на предмет проходимости и безопасности значительную заповедной территории плато Путорана. А в результате, подготовить новые впечатляющие туристические зимние и летние маршруты, подходящие для разного вида активностей. Зимой по ним можно проехать на снегоходах или пройти на лыжах. Летом отправиться в водно-пеший тур или заняться трейлраннингом на просторах плато Путорана.</p>
              <p>Важно отметить, что все маршруты выстраивались таким образом, влияние человека на окружающую среду было минимальным, и при этом туристы смогли увидеть и прочувствовать всю красоту и силу арктической природы</p>
              <p>Сейчас специалисты «Территории Путорана» работают над сертификацией новых маршрутов, чтобы ими смогли пользоваться все желающие жители и гости Большого Норильска.</p>
          </div>
      </div>
      <div className = "arctic-routes">
            <h1>Маршруты</h1>
            {routes && routes.map( (route, index) => {
                return (
                <div className = "arctic-routes__route" key = {index}>
                    <div className="arctic-routes__img">
                        {route.pic && route.pic.map( (img, index) => <img src={img} key = {index} />)}
                    </div>
                    <div className = "arctic-routes__text">
                        <h3>{route.title}</h3>
                        <p>Проходит по долинам рек Норильская, Талая, Лама, озер Мелкое и Лама с подъемом к обзорным точкам с потрясающими видами на трапповый рельеф плато Путорана.</p>                   
                    </div>                
                </div>
                )
                }
            )}
             
        </div>
        <div className='tolstorog'>
            <h2>Живой символ проекта</h2>
            <div className="tolstorog__content">
                <div className="tolstorog__img">
                    <img src="./img/tolstorog.jpg" />
                </div>   
                <div className='tolstorog__text'>
                    <p>Символом экологического туризма на плато Путорана стал путоранский снежный баран – как его еще называют, толсторог. Уникальное животное-эндемик занесено в Красные книги Красноярского края и России.</p>
                    <p>Толсторог обитает в этих краях около 12 тысяч лет, и на данный момент его численность достоверно неизвестна. По данным мониторинга 2016–2020 гг. учеными сделан неутешительный вывод, что численность снежных баранов на всей территории заповедника «Путоранский» не превышает 500 особей и находится на стабильном критически низком уровне.</p>
                    <p>Экологический туризм призван привлечь внимание к необходимости сохранить первозданную природу Арктики, ее уникальную флору и фауну. Все разработанные в ходе экспедиции «По следам толсторога» туристические маршруты и точки наблюдения выбраны по принципу бережного отношения к природе, таким образом, чтобы люди не вторгались в естественную среду обитания животных и не нарушали естественный уклад их жизни.</p>
                </div>
                             
            </div>
        </div>
    </main>
  )
}

export default Tolstorog