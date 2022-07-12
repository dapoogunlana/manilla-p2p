import React, {  } from 'react';
import { Carousel } from '../../../../../components/block-components/carousel';
import { AppleButtonWhite, PlaystoreButtonWhite, PointStar } from '../../../../../assets/images';
import './banner.scss';

function Hero() {

  return (
    <div className='hero-case'>
      <div className='hero'>
        <div className='center-info-col'>
          <div className='w90 max900 text-center my-5' data-aos='zoom-in'>
            <h1>World’s First General-Purpose P2P Crypto Exchange Platform</h1>
          </div>
          <div className='w90 max300' data-aos='fade-up'>
            <button className='solid-button-2c w100'>Download Whitepaper</button>
            <div className='input-divider mt-4'>
              <img src={ AppleButtonWhite } alt="" />
              <span></span>
              <img src={ PlaystoreButtonWhite } alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className='sub-hero py-5'>
        <div className='w20 max85 imh py-4' data-aos='zoom-in'>
          <img src={PointStar} alt="" />
        </div>
        <div className='w90 max900'>
          <div className='description-grid-40' data-aos='fade-up'>
            <div className='imh spread-info-front'>
              <img src={PointStar} alt="" />
            </div>
            <div className='spread-info-front'>
              <p className='mb-0 pl-3'>
                Explore & Benefit from Manilla’s Comprehensive e-Service Suite for Reliability, Security & Speed.
              </p>
            </div>
          </div>
          <div className='description-grid-40 py-4' data-aos='fade-up'>
            <div className='imh spread-info-front'>
              <img src={PointStar} alt="" />
            </div>
            <div className='spread-info-front'>
              <p className='mb-0 pl-3'>
                Earn up to 2% cash back in Manilla native token when you use the Manilla Debit Card across multiple merchants location worldwide.
              </p>
            </div>
          </div>
          <div className='description-grid-40 pb-5' data-aos='fade-up'>
            <div className='imh spread-info-front'>
              <img src={PointStar} alt="" />
            </div>
            <div className='spread-info-front'>
              <p className='mb-0 pl-3'>
                Explore & Benefit from Manilla’s Comprehensive e-Service Suite for Reliability, Security & Speed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
