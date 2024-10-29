import React,{useContext} from 'react';
import { DataContext } from '../App';
import { useParams } from 'react-router-dom';
import './aboutpage1.scss'

const AboutPage1 = () => {
    let {id} = useParams();
    const {petdata} = useContext(DataContext);
    return (
        <div className='aboutPageWrap'>
            <h2>상세페이지</h2>
            <div className='aboutWrap'>
                <div className="aboutPageImgWrap">
                    <img src={petdata[id].img} alt={petdata[id].title} />
                </div>
                <div className="aboutPageTextWrap">
                    <div className="title">{petdata[id].title}</div>
                    <div className="price">{petdata[id].price}</div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage1;