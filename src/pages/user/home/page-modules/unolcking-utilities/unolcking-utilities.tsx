import React, {  } from 'react';
import { UnlockingUtilitiesPhone, UnlockingUtilitiesPoints, UnlockingUtilitiesStats, ReferralPhone, VidCurve } from '../../../../../assets/images';
import './unolcking-utilities.scss';

function UnolckingUtilities() {
  return (
    <div className='unlocking-utilities pt-5'>
      <div className='w90 max1000'>
        <h3 className='text-center'>Unlocking Crypto Utilities</h3>
        <p className='text-center'>
          Through a solid alliance with our ecosystem development partners, Manilla P2P Exchange is giving a 
          robust use-case to multiple cryptocurrency assets. We are leveraging our years of experience in blockchain 
          technology to continuously improve our ecosystem with hopes that before long, crypto will be used for just 
          about anything in our everyday payments on the Manilla application.
        </p>
        <div className='mock-sect'>
          <div className='phone-mockup'>
            <div className='imh'>
              <img src={UnlockingUtilitiesPhone} data-aos='fade-up' alt="" />
            </div>
          </div>
          <div className='tips-sect imh'>
            <img src={UnlockingUtilitiesPoints} data-aos='zoom-in' data-aos-delay='300' alt="" />
          </div>
          <div className='stats-sect imh'>
            <img src={UnlockingUtilitiesStats} data-aos='zoom-in' data-aos-delay='800' alt="" />
          </div>
        </div>
        <h3 className='text-center mt-5 pt-3 mb-0'>Referral Program</h3>
        <div className='row ref'>
          <div className='col-md-6 center-info'>
            <div className='center-mobile py-4'>
              <p>
                "If earning passive income is something you desire, then this program is exactly what you need to earn 
                consistent income on the go. We offer a 20% single level referral bonus to all registered Manilla traders. 
                Bonuses accumulated through referrals can be withdrawn at any time to your secure wallets. To get started, 
                simply get a referral link."
              </p>
              <button className='solid-button-2c' data-aos='fade-up' data-aos-delay='500'>Login to get referral link</button>
            </div>
          </div>
          <div className='col-md-6 center-info'>
            <div className='w80 max300 imh py-2 referral' data-aos='flip-left'>
                <img src={ReferralPhone} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className='vid-sect'>
        <div className='top-curve'>
          <img src={VidCurve} alt="" />
        </div>
        <div className='w96 max1200'>
          <div className='row'>
            <div className='col-md-6 center-info'>
              <div className='vid-space' data-aos='fade-up'>
                  <div className='top-sphare-curve' data-aos='zoom-in' data-aos-delay='900'></div>
                  <div className='bottom-sphare-curve' data-aos='zoom-in' data-aos-delay='900'></div>
                  <div className='vid-holder'></div>
              </div>
            </div>
            <div className='col-md-6 center-info'>
              <div className='center-mobile py-4 w96 max500'>
                <h6 className='increased pb-3'>
                  Manilla exchange is the most trusted cryptocurrency exchange on the market.
                </h6>
                <p>
                  Begin trading with confidence and ease as our platform will enable anybody who is an early adopter to join 
                  the digital currency revolution in a truly decentralized environment with automated processes. You can 
                  purchase, sell, and exchange digital assets on the Manilla P2P platform without interruption as we maintain 
                  a 99% uptime. Manilla has you secured, whether you are a first-time customer or a return trader.
                </p>
                <button className='solid-button-2c'>Login to get referral link</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UnolckingUtilities;