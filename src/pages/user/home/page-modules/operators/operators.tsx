import React, {  } from 'react';
import {  } from '../../../../../assets/images';
import { Carousel } from '../../../../../components/block-components/carousel';
import { operatorList } from './operatoer-data';
import './operators.scss';

function Operators() {
  const previewCount = () => {
    const width = window.innerWidth;
    if(width > 1000) {
      return 5;
    } else if(width > 800) {
      return 4;
    } else if(width > 600) {
      return 3;
    } else {
      return 2;
    }
  }
  const imageSlide = operatorList.map((item, index) => {
    return <div className="operator_image" key={index} data-aos="zoom-in">
      <img src={item.icon} alt="" />
    </div>
  });
  return (
    <div className='operators py-5'>
      <div className='w96 max1200'>
        <Carousel
          loop
          autoPlay
          delay={6000}
          freeMode
          slidesPerView={previewCount()}
          spaceBetween={0}
          data={imageSlide}
        />
        <div className='text-center w96 pb-4'>
          <button className='solid-button-2c rad-10' data-aos='fade-up'>See Supported Operators in Your Region</button>
        </div>
      </div>
    </div>
  );
}

export default Operators;
