import React, {useState} from 'react';
import './FreshBox.scss';
import Card from './Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
/* import data from '../data/data' */
import data from '../data/data';


const FreshBox = () => {
    let [petdata] = useState(data)
    return (
        <div className='wrap'>
            <div className='freshboxWrap'>
                <h2>Hello Fresh Box</h2>
                <p>We save you serious time</p>
                <div className="freshslider">
                <Swiper className='freshboxswiper'
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={4}
                navigation
                pagination={{type:'fraction'}}
                loop={true}
                autoplay={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        petdata.map((data, i) => {
                            return (
                                <SwiperSlide>
                                    <Card data={data} key={i} i={i}/>
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

export default FreshBox;