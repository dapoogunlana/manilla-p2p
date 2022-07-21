import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CalendarIcon } from '../../../assets/images';
import { discoverList } from './discover-data';
import { routeConstants } from '../../../services/constants/route-constants';
import './discover.scss';
import { clipToLength } from '../../../services/utils/data-manipulation-utilits';

function Discover() {

  const navigate = useNavigate();

  const goToItem = (id: number) => {
    navigate(`/${routeConstants.discover}/${id}`);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div className='faq'>
      <div className='top-band'>
        <div className='header-spacer'></div>
        <div className='topic-space' data-aos="fade-in">
          <h2>Industry News</h2>
        </div>
      </div>
      <div className='content-body py-5'>
        <div className='w90 max1200 py-5'></div>
        <div className='w90 max1200'>
          <div className='row'>
            {discoverList.map((item, index) => {
              return   <div className='col-lg-4 col-md-6 py-3' key={index}>
              <div className='cover' data-aos="fade-up">
                <div className='display-img'>
                  <img src={item.image} alt="" />
                </div>
                <div className='content mt-3'>
                  <div className='spread-info-front mb-2'>
                    <img src={CalendarIcon} alt="" className='mr-2' />
                    <p className='mb-0 reduced-soft faint-font'>{item.date}</p>
                  </div>
                  <h6 className='mb- increased-soft'>{item.title}</h6>
                  <p>{clipToLength(item.content[0].point || item.content[0].topic || item.content[1].point, 100)}</p>
                  <div className='full-button'>
                    <button className='solid-button-2c' onClick={() => goToItem(item.id)}>Read More</button>
                  </div>
                </div>
              </div>
            </div>
            })}
          </div>
          {/* <div className='cover' data-aos="fade-up">
            {discoverList.map((item, index) => {
              return <div className="item my-4 clickable" key={index} onClick={() => openQuestion(index)}>
                <div className="spread-info py-2">
                  <h6 className="increased-soft mb-0">{item.question}</h6>
                  <div className={'view-icon' + (item.active ? ' full-view' : '')}>
                    <img src={DropdownArrow} alt="" />
                  </div>
                </div>
                <div className={"answer" + (item.active ? ' full' : '')}>
                  <p className="reduced-soft mb-0">{item.answer}</p>
                </div>
              </div>
            })}
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Discover;
