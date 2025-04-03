'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

import bgimg1 from '../../../../public/image/image 1.jpg'
import bgimg2 from '../../../../public/image/image 2.jpg'
import bgimg3 from '../../../../public/image/image 2.jpg'




export default function Carosel() {
  return (
    <div className=''>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Slide image={bgimg1}></Slide> </SwiperSlide>
        <SwiperSlide><Slide image={bgimg2}></Slide> </SwiperSlide>
        <SwiperSlide><Slide image={bgimg3}></Slide> </SwiperSlide>
      
      </Swiper>
    </div >
  );
}