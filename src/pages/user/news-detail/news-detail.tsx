import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { CalendarIcon } from '../../../assets/images';
import ContactSect from '../../../components/block-components/contact-sect/contact-sect';
import { IindustryNews } from '../../../services/constants/interfaces/data-schemas';
import { newsList } from '../news/news-data';
import './news-detail.scss';

function NewsDetail() {
  const initialState = {
    id: 0,
    image: '',
    title: ``,
    content: [{
        topic: '',
        subTopic: '',
        point: '',
        subPoints: [],
    }],
    date: '',
};

  const { id } = useParams();
  const [currentItem, setCurrentItem] = useState<IindustryNews>(initialState);

  const returnToList = () => {
    window.history.back();
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    const activeItem = newsList.find((item: any) => id === (item.id + '')) || initialState;
    setCurrentItem(activeItem);
  });
  
  return (
    <div className='news'>
      <div className='top-band w90 max800'>
        <div className='header-spacer'></div>
        <div className='topic-space' data-aos="fade-in">
        <div className='header-spacer'></div>
          <h2>Industry News</h2>
          <hr className='mb-0' />
        </div>
      </div>
      <div className='content-body py-5'>
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
                {currentItem.content?.map((item, index: number) => <p key={index}>{item.point}</p>)}
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

export default NewsDetail;
