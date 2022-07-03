import React, {  } from 'react';
import {  } from '../../../../../assets/images';
import { serviceList } from './services-data';
import './services.scss';

function Services() {
  return (
    <div className='services py-5'>
    <div className='w96 max1200 py-4'>
      <h3 className='text-center mt-5 pt-5'>Why Choose Us</h3>
      <div className='row'>
        {serviceList.map((item, index) => {
          return <div className='col-lg-4 col-md-6' key={index} data-aos="fade-up" data-aos-delay={index * 200}>
          <div className='service-card'>
            <div className='topic'>
              <div className='icon-sect'>
                <img src={item.iconW} alt="" />
              </div>
              <h6>{item.topic}</h6>
              <p className='mb-0 reduced-soft'>{item.writeup}</p>
            </div>
          </div>
        </div>
        })}
      </div>
    </div>
  </div>
  );
}

export default Services;
