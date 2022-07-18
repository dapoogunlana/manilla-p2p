import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { CalendarIcon } from '../../../assets/images';
import { discoverList } from './discover-detail-data';
import './discover-detail.scss';

function DiscoverDetail() {

  const { id } = useParams();
  const [currentItem, setCurrentItem] = useState<any>({});

  const returnToList = () => {
    window.history.back();
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    const activeItem = discoverList.find((item) => id === (item.id + '')) || {};
    setCurrentItem(activeItem);
  });
  
  return (
    <div className='discover'>
      <div className='top-band'>
        <div className='header-spacer'></div>
        <div className='topic-space' data-aos="fade-in">
          <h2>Discover</h2>
        </div>
      </div>
      <div className='content-body py-5'>
        <div className='w90 max1200 py-5'></div>
        <div className='w90 max800'>
          <button className='solid-button-2' onClick={returnToList}>
            <div className='spread-info'></div>
            <i className="fa-solid fa-arrow-rotate-left pr-5"></i>
            <span className="pr-5">Return to List</span>
          </button>
          <h6 className='text-center increased mb-4 mt-4'>{currentItem.title}</h6>
          <div className='detail-cover' data-aos="fade-up">
            <div className='display-img'>
              <img src={currentItem.image} alt="" />
            </div>
            <div className='spread-info-front py-3'>
              <img src={CalendarIcon} alt="" />
              <p className='mb-0 pl-3'>{currentItem.date}</p>
            </div>
            <div className='content'>
                {currentItem.content?.map((item: any, index: number) => <p key={index}>{item}</p>)}
            </div>
          </div>
          <button className='solid-button-2 mt-4 mb-5' onClick={returnToList}>
            <div className='spread-info'></div>
            <i className="fa-solid fa-arrow-rotate-left pr-5"></i>
            <span className="pr-5">Return to List</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DiscoverDetail;
