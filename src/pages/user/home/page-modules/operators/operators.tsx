import React, {  } from 'react';
import { Link } from 'react-router-dom';
import {  } from '../../../../../assets/images';
import { Carousel } from '../../../../../components/block-components/carousel';
import { routeConstants } from '../../../../../services/constants/route-constants';
import { operatorList } from './operator-data';
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
        {/* <div className='text-center w96 pb-4'>
          <Link to={routeConstants.operators}>
            <button className='hollow-button-2cb rad-10' data-aos='fade-up'>See Supported Operators in Your Region</button>
          </Link>
        </div> */}
      </div>
    </div>
  );
}

export default Operators;
