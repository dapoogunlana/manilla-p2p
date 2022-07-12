import React, {  } from 'react';
import { Carousel } from '../../../../../components/block-components/carousel';
import { imageSlide } from './banner-data';
import './banner.scss';

function Hero() {
  return (
    <div className='hero-case'>
    <Carousel.Effects
      loop
      autoPlay
      delay={6000}
      freeMode={false}
      slidesPerView={1}
      spaceBetween={0}
      fade
      pauseOnMouseEnter={false}
      disableOnInteraction={false}
      data={imageSlide}
    />
      {/* <div className='hero banner-1'>
        <div className='header-spacer'></div>
        <div className='hero-spread'>
          <div className='text-content'>
            <h3>
              Explore & Benefit from Manilla’s Comprehensive e-Service Suite for Reliability, Security & Speed.
            </h3>

            <div className='max300'>
              <button className='solid-button-2c px-4 my-3' data-aos="zoom-out" data-aos-delay="900">Post Trade</button>
              <div className='info-grid'>
                <img src={AppleButton} alt="" data-aos="fade-up" />
                <span></span>
                <img src={PlaystoreButton} alt="" data-aos="fade-up" data-aos-delay="300" />
              </div>
            </div>
          </div>
          <div className='image'>
            <div className='img-holder' data-aos="fade-in">
              <img src={BannerImg1} alt="" />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Hero;
