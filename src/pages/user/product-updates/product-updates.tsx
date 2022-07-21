import React, { useEffect } from 'react';
import { Link  } from 'react-router-dom';
import { routeConstants } from '../../../services/constants/route-constants';
import './product-updates.scss';

function ProductUpdates() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const bars = <>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
  </>
  
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
            <div className='update-sect' data-aos="fade-right">
              <h6 className='activity'>
                Manilla P2P Application Development Begins
              </h6>
              <div className='progress'>
                <div className='level r100 b_bl'></div>
                {bars}
                <div className='level r100 f_bl'></div>
              </div>
              <p className='date'>April 5th, 2021</p>
            </div>
            <div className='update-sect' data-aos="fade-right">
              <h6 className='activity'>
                Manilla P2P Exchange Web Application development
              </h6>
              <div className='progress'>
                <div className='level r100 b_gr'></div>
                {bars}
                <div className='level r100 f_gr'></div>
              </div>
              <p className='date'>August 20th 2021</p>
            </div>
            <div className='update-sect' data-aos="fade-right">
              <h6 className='activity'>
                Manilla P2P Exchange Android & iOS Application begins
              </h6>
              <div className='progress'>
                <div className='level r100 b_bl'></div>
                {bars}
                <div className='level r100 f_bl'></div>
              </div>
              <p className='date'>August 22nd 2021</p>
            </div>
            <div className='update-sect' data-aos="fade-right">
              <h6 className='activity'>
                Manilla P2P Exchange Android & iOS mobile apps development complete
              </h6>
              <div className='progress'>
                <div className='level r100 b_gr'></div>
                {bars}
                <div className='level r100 f_gr'></div>
              </div>
              <p className='date'>February 15th 2022</p>
            </div>
            <div className='update-sect' data-aos="fade-right">
              <h6 className='activity'>
                Manilla Service Suite Development begins
              </h6>
              <div className='progress'>
                <div className='level r60 b_bl'></div>
                {bars}
                <div className='level r60 f_bl'></div>
              </div>
              <p className='date'>March 10th 2022</p>
            </div>
            <div className='update-sect' data-aos="fade-right">
              <h6 className='activity'>
                Manilla Service Suite Development still ongoing
              </h6>
              <div className='progress'>
                <div className='level r80 b_bl'></div>
                {bars}
                <div className='level r80 f_bl'></div>
              </div>
              <p className='date'>July 14th 2022</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ProductUpdates;
