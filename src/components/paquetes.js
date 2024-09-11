import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import paquete1 from '../multimedia/paquete 1.png';
import paquete2 from '../multimedia/paquete 2.png';

export default function Paquetes() {
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
            <img loading='lazy'
              className='flayer'
              src={paquete1}
              alt='...'
              onClick={() => handleImageClick(paquete1)}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='contenedor'>
            <img loading='lazy'
              className='flayer'
              src={paquete2}
              alt='...'
              onClick={() => handleImageClick(paquete2)}
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