import React, {  } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import { AppleButton, BannerImg1, PlaystoreButton } from '../../../../../assets/images';
import './banner.scss';

function Hero() {
  return (
    <div className='hero-case'>
      <div className='hero banner-1'>
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
            {/* <img src={BannerImg1} alt="" /> */}
            <div className='img-holder' data-aos="fade-in">
              <img src={BannerImg1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
