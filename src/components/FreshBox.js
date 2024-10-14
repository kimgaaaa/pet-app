import React, {useState} from 'react';
import './FreshBox.scss';
import Card from './Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import data from '../data'
import {Link} from 'react-router-dom'

const FreshBox = () => {
    let [petdata] = useState(data)
    return (
        <div className='freshboxWrap'>
            <h2>Hello Fresh Box</h2>
            <p>We save you serious time</p>
            <div className="freshslider">
            <Swiper className='Freshboxswiper'
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={4}
            Navigation
            Pagination={{type:'fraction'}}
            loop={true}
            autoplay={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div className="freshList">
                        <Link to="">
                            <div className="imgBox">
                                <img src={process.env.PUBLIC_URL+'./img/img01.jpg'} alt="" />
                            </div>
                            <div className="textBox"><p>titleBox</p></div>
                            <div className="proceBox"><p>priceBox</p></div>
                            <div className="numberBox"><p>numbereBox</p></div>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="freshList">
                        <Link to="">
                            <div className="imgBox">
                                <img src={process.env.PUBLIC_URL+'./img/img02.jpg'} alt="" />
                            </div>
                            <div className="textBox">titleBox</div>
                            <div className="priceBox">priceBox</div>
                            <div className="numberBox">numbereBox</div>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="freshList">
                        <Link to="">
                            <div className="imgBox">
                                <img src={process.env.PUBLIC_URL+'./img/img03.jpg'} alt="" />
                            </div>
                            <div className="textBox">titleBox</div>
                            <div className="priceBox">priceBox</div>
                            <div className="numberBox">numbereBox</div>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="freshList">
                        <Link to="">
                            <div className="imgBox">
                                <img src={process.env.PUBLIC_URL+'./img/img04.jpg'} alt="" />
                            </div>
                            <div className="textBox">titleBox</div>
                            <div className="priceBox">priceBox</div>
                            <div className="numberBox">numbereBox</div>
                        </Link>
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>
        </div>
    );
};

export default FreshBox;