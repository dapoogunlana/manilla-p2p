import React, { useEffect } from 'react';
import { Link  } from 'react-router-dom';
import { routeConstants } from '../../../services/constants/route-constants';
import './discover-detail.scss';

function DiscoverDetail() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div className='faq'>
      <div className='top-band'>
        <div className='header-spacer'></div>
        <div className='topic-space' data-aos="fade-in">
          <h2>Discover</h2>
        </div>
      </div>
      <div className='content-body py-5'>
        <div className='w90 max1200 py-5'></div>
        <div className='w90 max1200'>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='cover' data-aos="fade-up">
                <div className='item-card'>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscoverDetail;
