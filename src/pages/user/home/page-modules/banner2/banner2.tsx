import React, {  } from 'react';
import {
  AppleButtonWhite,
  PlaystoreButtonWhite,
  CommingSoon,
  PhoneHand,
  topPartnerKirobo,
  topPartnerReloadly,
  topPartnerSayfer,
  topPartnerSumsub,
  topPartnerChainanalysis,
  topPartnerFireblocks,
  topPartnerHacken,
} from '../../../../../assets/images';
import './banner2.scss';
import { WhitePaper } from '../../../../../assets/files';
import Marquee from 'react-fast-marquee';

function Hero2() {

  const downloadPdf = () => {
    window.open(WhitePaper);
  }

  return (
    <div className='hero2-case'>
      <div className='hero2 pt-5'>
          <div className='imh absolute-hand' data-aos='fade-left' data-aos-delay='500'>
            <img src={PhoneHand} alt="" />
          </div>
        <div className='w96 max600 top-space' data-aos='fade-up'>
          <h3 className='center-mobile md-close'>
            Bridging Payment Solution from Traditional 
            Fintech to Web 3.0 & Enabling 
            Bills Settlement in Cryptocurrency
          </h3>
          <h3 className='center-mobile md-open'>
            Bridging Payment Solutions From Traditional Fintech to Web 3.0 & Enabling Bills Settlement in Cryptocurrency
          </h3>
          <div className='sect90-max500 mb-center'>
            <p className='md-close'>
              Maximize Your Crypto Potential with Our Saving & Loan
              Solutions, Achieve Financial Stability 
            </p>
          </div>
          <div className='sect90-max350 mb-center-in-flex'>
            {/* <p className='md-open'>
              Maximize Your Crypto Potential with Our Saving & Loan
              Solutions, Achieve Financial Stability 
            </p> */}
            <div className='action-buttons'>
              <div className='input-divider mt-4 imh full'>
                <img src={ PlaystoreButtonWhite } className='store-link' alt="" />
                <span></span>
                <img src={ AppleButtonWhite } className='store-link' alt="" />
              </div>
              <div className='coming-soon imh max200'>
                <img src={CommingSoon} alt="" />
              </div>
            </div>
          </div>

        </div>

        <div className='w90 max450 md-close'>
          <div className='imh max350 temp-hidden' data-aos='flip-left' data-aos-delay='500'>
            <img src={PhoneHand} alt="" />
          </div>
        </div>
        <div className='hero-pat-sect'>
          <h6 className=''>OUR TRUSTED PARTNERS</h6>
          <div></div>
        </div>

      </div>
      <div className='max900 text-center parter-sect md-close'>
        <div className='spread-info'>
          <div className='imh max125'>
            <img src={topPartnerKirobo} alt="" />
          </div>
          <div className='imh max125 mx-2 px-2'>
            <img src={topPartnerReloadly} alt="" />
          </div>
          <div className='imh max125 mx-2 px-2'>
            <img src={topPartnerSayfer} alt="" />
          </div>
          <div className='imh max125 mx-2 px-2'>
            <img src={topPartnerSumsub} alt="" />
          </div>
          <div className='imh max125 mx-2 px-2'>
            <img src={topPartnerChainanalysis} alt="" />
          </div>
          <div className='imh max125 mx-2 px-2'>
            <img src={topPartnerFireblocks} alt="" />
          </div>
          <div className='imh max125 px-2'>
            <img src={topPartnerHacken} alt="" />
          </div>
        </div>
      </div>
      <div className='max900 text-center parter-sect md-open'>
        <Marquee speed={50} gradient={false}>
          <div className='spread-info'>
            <div className='imh max125'>
              <img src={topPartnerKirobo} alt="" />
            </div>
            <div className='imh max125 mx-2 px-2'>
              <img src={topPartnerReloadly} alt="" />
            </div>
            <div className='imh max125 mx-2 px-2'>
              <img src={topPartnerSayfer} alt="" />
            </div>
            <div className='imh max125 mx-2 px-2'>
              <img src={topPartnerSumsub} alt="" />
            </div>
            <div className='imh max125 mx-2 px-2'>
              <img src={topPartnerChainanalysis} alt="" />
            </div>
            <div className='imh max125 mx-2 px-2'>
              <img src={topPartnerFireblocks} alt="" />
            </div>
            <div className='imh max125 px-2'>
              <img src={topPartnerHacken} alt="" />
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default Hero2;
