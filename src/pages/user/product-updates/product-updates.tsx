import React, { useEffect } from 'react';
import { Link  } from 'react-router-dom';
import { routeConstants } from '../../../services/constants/route-constants';
import './product-updates.scss';

function ProductUpdates() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div className='product-updates'>
      <div className='top-band'>
        <div className='header-spacer'></div>
        <div className='topic-space' data-aos="fade-in">
          <h2>Product Updates</h2>
        </div>
      </div>
      <div className='content-body py-5'>
        <div className='w90 max1200 py-5'></div>
        <div className='w90 max1200'>
            
        </div>
      </div>
    </div>
  );
}

export default ProductUpdates;
