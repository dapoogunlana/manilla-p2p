import React, {  } from 'react';
import {  } from '../../../../../assets/images';
import { operatorList } from './operatoer-data';
import './operators.scss';

function Operators() {
  return (
    <div className='operators py-5'>
      <div className='w96 max1200'>
        <div className='carousel-grid5'>
          {operatorList.map((item, index) => {
            return <div className='operator-card' key={index}>
              <div className='imh' title={item.name} data-aos='zoom-in' data-aos-delay={index * 200}>
                <img src={item.icon} alt="" />
              </div>
            </div>
          })}
        </div>
        <div className='text-center w96 pt-4'>
          <button className='solid-button-2c rad-10' data-aos='fade-up'>See Supported Operators in Your Region</button>
        </div>
      </div>
    </div>
  );
}

export default Operators;
