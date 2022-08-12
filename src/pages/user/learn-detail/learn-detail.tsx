import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { CalendarIcon } from '../../../assets/images';
import ContactSect from '../../../components/block-components/contact-sect/contact-sect';
import { IlearnData, learnDataInitialState, learnList } from '../learn/learn-data';
import './learn-detail.scss';

function LearnDetail() {

  const { id } = useParams();
  const [currentItem, setCurrentItem] = useState<IlearnData>(learnDataInitialState);

  const returnToList = () => {
    window.history.back();
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    const activeItem = learnList.find((item) => id === (item.id + '')) || learnDataInitialState;
    setCurrentItem(activeItem);
    console.log({
      id,
      currentItem,
      activeItem
    });
  });
  
  return (
    <div className='learn-detail'>
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
            <div className='content'>
                {currentItem.content?.map((item, index: number) => {
                  return <React.Fragment key={index}>
                    <h6 className='increased text-center mt-3'>{item.topic}</h6>
                    <p key={index}>{item.point && (<span>{item.point}</span>)}</p>
                    {item.subPoints?.length > 0 && (
                      <ul className='pl-4'>
                        {item.subPoints.map((subItem, subIndex) => <li key={subIndex}>{subItem}</li>)}
                      </ul>
                    )}
                  </React.Fragment>
                })}
            </div>
          </div>
          <button className='solid-button-2 mt-4 mb-5' onClick={returnToList}>
            <div className='spread-info'></div>
            <i className="fa-solid fa-arrow-rotate-left pr-5"></i>
            <span className="pr-5">Return to List</span>
          </button>
        </div>
      </div>

      <ContactSect/>
    </div>
  );
}

export default LearnDetail;
