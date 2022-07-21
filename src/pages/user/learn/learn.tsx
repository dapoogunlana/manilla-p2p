import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CalendarIcon } from '../../../assets/images';
import { learnList } from './learn-data';
import { routeConstants } from '../../../services/constants/route-constants';
import './learn.scss';

function Learn() {

  const navigate = useNavigate();

  const clipToLength = (item: string, length: number) => {
    if (!item) {
      return '';
    }
    if(item.length > length) {
      const trimedItem = item.substring(0, (length - 2));
      return trimedItem + '..';
    } else {
      return item;
    }
  }

  const goToItem = (id: number) => {
    navigate(`/${routeConstants.learn}/${id}`);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div className='learn'>
      <div className='top-band'>
        <div className='header-spacer'></div>
        <div className='topic-space' data-aos="fade-in">
          <h2>Learn</h2>
        </div>
      </div>
      <div className='content-body py-5'>
        <div className='w90 max1200 py-5'></div>
        <div className='w90 max1200'>
          <div className='row'>
            {learnList.map((item, index) => {
              return   <div className='col-lg-4 col-md-6 py-3' key={index}>
              <div className='cover' data-aos="fade-up">
                <div className='display-img'>
                  <img src={item.image} alt="" />
                </div>
                <div className='content'>
                  <h6 className='mb- increased'>{item.title}</h6>
                  <p>{clipToLength(item.content[0].point, 100)}</p>
                  <div className='full-button'>
                    <button className='solid-button-2c' onClick={() => goToItem(item.id)}>Read More</button>
                  </div>
                </div>
              </div>
            </div>
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learn;
