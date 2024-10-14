import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './mainslider.css'

const MainSlider = () => {
    return (
        <div className='mainSlider'>
        <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={
            {
                delay:2500,
                disableOnInteraction:false,
            }
        }
        loop
        navigation
        pagination={{clickable:true}}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
        <SwiperSlide><img src={process.env.PUBLIC_URL+'./img/slider01.jpg'} alt="" /></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL+'./img/slider02.png'} alt="" /></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL+'./img/slider03.jpg'} alt="" /></SwiperSlide>

       </Swiper>

   </div>
    );
};

export default MainSlider;