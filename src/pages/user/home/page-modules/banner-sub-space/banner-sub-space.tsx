import React, {  } from 'react';
import { PointStar } from '../../../../../assets/images';
import './banner-sub-space.scss';

function SubSpace() {
  return (
    <div className='sub-hero py-5'>
      <div className='w20 max85 imh py-4' data-aos='zoom-in'>
        <img src={PointStar} alt="" />
      </div>
      <div className='w90 max900'>
        <h1 className='text-center pb-5'>World’s First General-Purpose P2P Crypto Exchange Platform</h1>
        <div className='description-grid-40' data-aos='fade-up'>
          <div className='imh spread-info-front'>
            <img src={PointStar} alt="" />
          </div>
          <div className='spread-info-front'>
            <p className='mb-0 pl-3'>
              Experience the Power of True Decentralization When You Exchange Cypto With Your Peers
            </p>
          </div>
        </div>
        <div className='description-grid-40 py-4' data-aos='fade-up'>
          <div className='imh spread-info-front'>
            <img src={PointStar} alt="" />
          </div>
          <div className='spread-info-front'>
            <p className='mb-0 pl-3'>
              Earn up to 2% cash back in Manilla native token when you use the Manilla Debit Card.
            </p>
          </div>
        </div>
        <div className='description-grid-40 pb-5' data-aos='fade-up'>
          <div className='imh spread-info-front'>
            <img src={PointStar} alt="" />
          </div>
          <div className='spread-info-front'>
            <p className='mb-0 pl-3'>
              Explore & Benefit from Manilla’s Comprehensive Service Suite for Reliability, Security & Speed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubSpace;
