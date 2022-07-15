import React, {  } from 'react';
import { AppleButton, PlaystoreButton, PointStar } from '../../../../../assets/images';
import './banner.scss';
import { IntroVid } from '../../../../../assets/videos';
import { WhitePaper } from '../../../../../assets/files';

function Hero() {

  const downloadPdf = () => {
    window.open(WhitePaper);
  }

  return (
    <div className='hero-case'>
      <div className='hero'>
        <div className="underband">
            <video muted={true} playsInline={true} autoPlay={true} src={IntroVid} loop id="myVideo">
                Your browser does not support HTML5 video.
            </video>
        </div>
        <div className='w90 max400 full-button top-space' data-aos='fade-up'>
          <button className='hollow-button-2cw' onClick={downloadPdf}>Download&nbsp;Whitepaper</button>
          <div className='input-divider mt-4 imh full'>
            <img src={ AppleButton } className='store-link' alt="" />
            <span></span>
            <img src={ PlaystoreButton } className='store-link' alt="" />
          </div>
        </div>
      </div>
      <div className='sub-hero py-5'>
        <div className='w20 max85 imh py-4' data-aos='zoom-in'>
          <img src={PointStar} alt="" />
        </div>
        <div className='w90 max900'>
          <h1 className='text-center'>World’s First General-Purpose P2P Crypto Exchange Platform</h1>
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
