import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import bebida1 from '../multimedia/bebida 1.png';
import bebida2 from '../multimedia/bebida 2.png';
import bebida3 from '../multimedia/bebida 3.png';

export default function Bebidas() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleImageClick = (src) => {
    setSelectedImage(src);
    setIsFullscreen(true);
  };

  const handleCloseFullscreen = () => {
    setIsFullscreen(false);
    setSelectedImage('');
  };

  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >

        <SwiperSlide>
          <div className='contenedor'>
            <img
              loading='lazy'
              className='flayer'
              src={bebida1}
              alt='...'
              onClick={() => handleImageClick(bebida1)}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='contenedor'>
            <img
              loading='lazy'
              className='flayer'
              src={bebida2}
              alt='...'
              onClick={() => handleImageClick(bebida2)}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='contenedor'>
            <img
              loading='lazy'
              className='flayer'
              src={bebida3}
              alt='...'
              onClick={() => handleImageClick(bebida3)}
            />
          </div>
        </SwiperSlide>
    

      </Swiper>

      {isFullscreen && (
        <div className="fullscreen-overlay" onClick={handleCloseFullscreen}>
          <img loading='lazy' src={selectedImage} alt="Fullscreen" className="fullscreen-image" />
        </div>
      )}
    </>
  );
}