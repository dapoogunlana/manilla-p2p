import React, { useEffect } from 'react';
import { PolicyImg, BulletKiteIcon } from '../../../assets/images';
import { termsList } from './terms-data';
import './terms.scss';

function Terms() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div className='policy'>
      <div className='header-spacer'></div>
      <div className='top-band'>
        <div className='topic right-holder px-3 py-4'>
          <h2>Terms And Conditions</h2>
        </div>
        <div className='floating-img'>
          <img src={PolicyImg} alt="" />
        </div>
      </div>
      <div className='policy-body py-5'>
        <div className='w90 max1200 py-4'>
          <div className='policy-card right-holder my-4' data-aos='fade-up'>
            {termsList[0].body.map((item,index) => <p key={index}>{item.point}</p>)}
          </div>
          
          {termsList.map((point, index) => {
            return (index > 0) && <div className='policy-card my-4' key={index} data-aos='fade-up'>
              <div className='policy-heading'>
                <img src={BulletKiteIcon} alt="" />
                <h6 className='increased'>{point.topic}</h6>
              </div>
              <ul>
                {point.body.map((item, itemIndex) => {
                  return <li key={itemIndex}>
                    <p>{item.point}</p>
                    <ul>
                      {item.subPoints.map((subItem, subIndex) => {
                        return <li key={subIndex}>
                          <p>{subItem}</p>
                        </li>
                      })}
                    </ul>
                  </li>
                })}
              </ul>
            </div>
          })}
        </div>
      </div>
    </div>
  );
}

export default Terms;
