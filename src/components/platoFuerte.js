import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import fuerte1 from '../multimedia/plato fuerte 1.png';
import fuerte2 from '../multimedia/plato fuerte 2.png';
import fuerte3 from '../multimedia/plato fuerte 3.png';
import fuerte4 from '../multimedia/plato fuerte 4.png';
import fuerte5 from '../multimedia/plato fuerte 5.png';


export default function PlatoFuerte() {
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
              src={fuerte1}
              alt='...'
              onClick={() => handleImageClick(fuerte1)}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='contenedor'>
            <img loading='lazy'
              className='flayer'
              src={fuerte2}
              alt='...'
              onClick={() => handleImageClick(fuerte2)}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='contenedor'>
            <img loading='lazy'
              className='flayer'
              src={fuerte3}
              alt='...'
              onClick={() => handleImageClick(fuerte3)}
            />
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className='contenedor'>
            <img loading='lazy'
              className='flayer'
              src={fuerte4}
              alt='...'
              onClick={() => handleImageClick(fuerte4)}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='contenedor'>
            <img loading='lazy'
              className='flayer'
              src={fuerte5}
              alt='...'
              onClick={() => handleImageClick(fuerte5)}
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