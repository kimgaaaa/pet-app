import React, {useState} from 'react';
import './New.scss';
import Card1 from './Card1.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
/* import data from '../data/data' */
import data1 from '../data/data1';


const New = () => {
    let [adddata] = useState(data1)
    return (
        <div className='wrap'>
            <div className='NewboxWrap'>
                <h2>Location</h2>
                <p>Location is</p>
                <div className="newslider">
                <Swiper className='newboxswiper'
                modules={[Navigation, Autoplay]}
                spaceBetween={5}
                slidesPerView={6}
                navigation
                loop={true}
                autoplay={{
                    delay:0,
                    disableOnInteraction: false,
                }}
                speed={5000}
                loopAdditionalSlides={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        adddata.map((data1, i) => {
                            return (
                                <SwiperSlide key={i}>
                                    <Card1 data={data1} i={i}/>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                </div>
            </div>

        </div>
    );

    
};

export default New;