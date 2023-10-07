import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";


import './styles.scss'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';


const FeedBackPage = () => {


  const location = useLocation()
  const pathname = location.pathname


  return (
    <main className='fb-page'>
      <Helmet>
            <title>Отзывы</title>
            <link rel="canonical" href={`https://territoryputorana.ru${pathname}`} />
            <meta name = 'description' content = 'Мы будем рады, если Вы поделитесь своими впечатлениями о путешествии на плато Путорана с нами. Ваш отзыв будет очень полезен для тех, кто собирается в тур.' />
      </Helmet>
        <div className='fb-page__fb fb'>        
            <Swiper navigation={true} modules={[Navigation]} className="fb__photo">
              <SwiperSlide><img src='./img/fb002.jpg'></img></SwiperSlide>
              <SwiperSlide><img src='./img/fb001.jpg'></img></SwiperSlide>
              <SwiperSlide><img src='./img/fb003.jpg'></img></SwiperSlide>
              <SwiperSlide><img src='./img/fb004.jpg'></img></SwiperSlide>
              <SwiperSlide><img src='./img/fb005.jpg'></img></SwiperSlide>
              <SwiperSlide><img src='./img/fb006.jpg'></img></SwiperSlide>
              <SwiperSlide><img src='./img/fb007.jpg'></img></SwiperSlide>
            </Swiper>
                      
            <div className='fb__text'>
                <p>Дважды посчастливилось побывать на плато Путорана😍 Ребята в команде «Территории» настоящие фанаты своего дела, столько интересных мест, историй, секретных фото-локаций. Отдельный восторг полярный день☀ Фото озера с небольшим эффектом тумана снято в 2 часа ночи😉 И усадьба «Жар. Птица» полностью отвечает сказочному названию. Комфорт хорошего отеля, свежие, чистые простыни и удобная кровать, блинчики по утрам и настоящая таймырская шурпа на ужин, а какая баня - мы точно не ожидали, что в этих недоступных местах могут быть условия настолько высокого уровня. Честно говоря, отправляясь в тур, мы были готовы к походным условиям. Сейчас у меня мечта в следующей раз погонять по Ламе на сапе, заглянуть в прозрачную гладь озера.</p>
                <span className='fb__author'>Юлия Сотникова</span>
            </div>
        </div>
        
    </main>
  )
}

export default FeedBackPage