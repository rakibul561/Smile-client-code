'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import Slide from './Slide'

export default function Carosel() {
  const bgimg1 = 'https://i.ibb.co/GvfyS3L5/search-engine-optimization-7843974-1280.jpg'
  const bgimg2 = 'https://i.ibb.co/GvfyS3L5/search-engine-optimization-7843974-1280.jpg'

  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        onSlideChange={(swiper) => {
          setCurrentIndex(swiper.realIndex) // ✅ loop on থাকলে realIndex ইউজ করো
        }}
      >
        <SwiperSlide>
          <Slide image={bgimg1} slideKey={currentIndex} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide image={bgimg2} slideKey={currentIndex} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
