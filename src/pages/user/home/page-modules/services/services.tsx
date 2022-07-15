import React, {  } from 'react';
import { ServiceLogo } from '../../../../../assets/images';
import { Carousel } from '../../../../../components/block-components/carousel';
import { serviceList, serviceList1half, serviceList2half } from './services-data';
import './services.scss';

function Services() {
  const serviceCarousel1 = serviceList1half.map((item, index) => {
    return <div className='service-card' data-aos="zoom-in">
      <div className='topic'>
        <div className='icon-sect'>
          <img src={item.image} alt="" />
        </div>
        <h6>{item.topic}</h6>
        <p className='mb-0 reduced-soft'>{item.writeup}</p>
      </div>
    </div>
  });
  const serviceCarousel2 = serviceList2half.map((item, index) => {
    return <div className='service-card' data-aos="zoom-in">
      <div className='topic'>
        <div className='icon-sect'>
          <img src={item.image} alt="" />
        </div>
        <h6>{item.topic}</h6>
        <p className='mb-0 reduced-soft'>{item.writeup}</p>
      </div>
    </div>
  });
  return (
    <div className='services py-5' id='features'>
      <div className='w96 max1200 py-5'>
        <div className='w96 max800'>
          <h3 className='text-center'>Manilla E-Service Suites</h3>
          <p className='text-center py-3'>
            Explore Endless Possibilities With Our Service Suites That Gives You the Power to Pay for a Variety 
            of Services Using Cryptocurrency
          </p>
        </div>
        <div className='row md-close'>
          {serviceList.map((item, index) => {
            return <div className='col-lg-4 col-md-6' key={index} data-aos="fade-up" data-aos-delay={index * 200}>
              <div className='service-card' data-aos="zoom-in">
                <div className='topic'>
                  <div className='icon-sect'>
                    <img src={item.image} alt="" />
                  </div>
                  <h6>{item.topic}</h6>
                  <p className='mb-0 reduced-soft'>{item.writeup}</p>
                </div>
              </div>
            </div>
          })}
        </div>
        <div className='md-open'>
          <Carousel
            loop
            autoPlay
            delay={6000}
            freeMode
            slidesPerView={1}
            spaceBetween={0}
            data={serviceCarousel1}
          />
          <Carousel
            loop
            autoPlay
            delay={6000}
            freeMode
            slidesPerView={1}
            spaceBetween={0}
            data={serviceCarousel2}
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
