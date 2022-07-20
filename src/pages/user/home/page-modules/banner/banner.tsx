import React, {  } from 'react';
import { AppleButton, PlaystoreButton } from '../../../../../assets/images';
import './banner.scss';
import { WebIntroVid } from '../../../../../assets/videos';
import { WhitePaper } from '../../../../../assets/files';

function Hero() {

  const downloadPdf = () => {
    window.open(WhitePaper);
  }

  return (
    <div className='hero-case'>
      <div className='hero'>
        <div className="underband">
            <video muted={true} playsInline={true} autoPlay={true} src={WebIntroVid} loop id="myVideo">
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
    </div>
  );
}

export default Hero;
