'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import Slide from './Slide'

export default function Carosel() {
  const bgimg1 = 'https://i.ibb.co.com/gbwWcFsD/image-2.jpg'
  const bgimg2 = 'https://i.ibb.co.com/JRzf8dW0/image-1.jpg '

 // একই image দিলে সব slide একরকম দেখায়

  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Slide image={bgimg1} /></SwiperSlide>
        <SwiperSlide><Slide image={bgimg2} /></SwiperSlide>
        {/* <SwiperSlide><Slide image={bgimg3} /></SwiperSlide> */}
      </Swiper>
    </div>
  )
}
