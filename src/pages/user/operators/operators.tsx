import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { CalendarIcon } from '../../../assets/images';
import { operatorList } from './operators-data';
import './operators.scss';

function DiscoverDetail() {

  const { id } = useParams();
  const [currentItem, setCurrentItem] = useState<any>({});

  const returnToList = () => {
    window.history.back();
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div className='faq'>
      <div className='top-band'>
        <div className='header-spacer'></div>
        <div className='topic-space' data-aos="fade-in">
          <h2>Operators</h2>
        </div>
      </div>
      <div className='content-body py-5'>
        <div className='w90 max1200 py-5'></div>
        <div className='w90 max1200 py-3'>
          <div className='grid5'>
            {operatorList.map((item, index) => {
              return <div className="operator_image" key={index} data-aos="zoom-in">
                <img src={item.icon} alt="" />
              </div>
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscoverDetail;
