import React from 'react';
import Pic1 from '../data/hero1.jpg';
import Pic2 from '../data/hero2.jpg';
import Pic3 from '../data/hero3.jpg';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Heroboxcontent from './Heroboxcontent';

const Herobox = () => {
  return (
    <Swiper
    id="home"
    spaceBetween={0}
    centeredSlides={true}   
    autoplay={{
      delay: 4000,
      disableOnInteraction: false,
    }}
    modules={[Autoplay, ]}
    className='swiper'
  >
  <SwiperSlide className='swipersslide'>
  <div className="hero min-h-screen py-0" style={{ backgroundImage: `url(${Pic1})`}}>
    <Heroboxcontent />
  </div>
  </SwiperSlide>
  <SwiperSlide className='swipersslide'>
  <div className="hero min-h-screen" style={{ backgroundImage: `url(${Pic2})`}}>
    <Heroboxcontent />
  </div>
  </SwiperSlide>
  <SwiperSlide className='swipersslide'>
  <div className="hero min-h-screen" style={{ backgroundImage: `url(${Pic3})`}}>
  <Heroboxcontent />
  </div>
  </SwiperSlide>
  </Swiper>
  )
}

export default Herobox