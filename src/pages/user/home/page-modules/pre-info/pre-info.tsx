import React, {  } from 'react';
import { exchangeList, whyChooseList } from './pre-info-data';
import './pre-info.scss';

function About() {
  return (
    <>
      <div className='crypto-stats'>
        <h3 className='text-center mt-5 pt-5'>Buy And Sell Cryptocurrencies</h3>
        <div className='stats-card' data-aos="flip-left">
          <div className='overflow-holder'>
            {exchangeList.map((item, index) => {
              return <div className='stats-bar py-2' key={index}>
                <div className='imh max50'>
                  <img src={item.icon} alt="" />
                </div>
                <p className='mb-0'>
                  {item.name}
                  <span className='ml-3 mb-0 faint-font reduced'>{item.abrevation}</span>
                </p>
                <h6 className='mb-0'>{item.difference}</h6>
                <p className={'mb-0' + (item.rise ? '' : '')}>
                  { item.rise ? <i className="fa-solid fa-arrow-up"></i> : <i className="fa-solid fa-arrow-down"></i>}
                  {item.percentage}
                </p>
                <h6 className='mb-0'>{item.difference}</h6>
                <button className='hollow-button-c shadowed rad-7-im ml-3'>Trade</button>
              </div>
            })}
          </div>
          
        </div>
      </div>
      <div className='why-us pb-5'>
        <div className='w96 max1200 pb-4'>
          <h3 className='text-center mt-5 pt-5'>Why Choose Us</h3>
          <div className='row'>
            {whyChooseList.map((item, index) => {
              return <div className='col-lg-3 col-md-6' key={index} data-aos="fade-up" data-aos-delay={index * 200}>
              <div className='why-us-card'>
                <div className='text'>
                  <p className='mb-0'>{item.text}</p>
                </div>
                <div className='topic'>
                  <div className='icon-sect'>
                    <img src={item.icon} alt="" />
                  </div>

                  <h6>{item.topic}</h6>
                </div>
              </div>
            </div>
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
