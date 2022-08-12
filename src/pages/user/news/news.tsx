import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CalendarIcon } from '../../../assets/images';
import { newsList } from './news-data';
import { routeConstants } from '../../../services/constants/route-constants';
import './news.scss';
import { clipToLength } from '../../../services/utils/data-manipulation-utilits';
import ContactSect from '../../../components/block-components/contact-sect/contact-sect';

function News() {

  const navigate = useNavigate();

  const goToItem = (id: number) => {
    navigate(`/${routeConstants.industryNews}/${id}`);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div className='news'>
      <div className='w90 max1200 py-5'>
        <div className='header-spacer'></div>
        <h2 className='pt-3'>Trending Industry News</h2>

        <hr className='mb-0' />

        <div className='row'>
          <div className='col-md-6 center-info-front py-4'>
            <div className='imh max500 shadowed rad-10'>
              <img src={newsList[0].image} className='rad-10' alt="" />
            </div>
          </div>
          <div className='col-md-6 center-info'>
            <div className='max500'>
              <p className='c-faint-font mb-2'>{newsList[0].date}</p>
              <h3>{newsList[0].title}</h3>
              <p>{clipToLength(newsList[0].content[0].point || newsList[0].content[0].topic || newsList[0].content[1].point, 100)}</p>
              <p className='c-pr-blue increased' onClick={() => goToItem(newsList[0].id)}>Read More</p>
            </div>
          </div>
        </div>

        <hr className='pt-0 mt-0' />

        <div className='row'>
            {newsList.map((item, index) => {
              if (index > 0 && index < 4) {
                return <div className='col-lg-4 colmd-6 py-3' key={index}>
                  <div className='imh max500 shadowed rad-10'>
                    <img src={item.image} className='rad-10' alt="" />
                  </div>
                  <div className='max500 pt-3'>
                    <p className='c-faint-font mb-2'>{item.date}</p>
                    <h4 className='increased'>{item.title}</h4>
                    <p className='c-pr-blue increased-soft' onClick={() => goToItem(item.id)}>Read More</p>
                  </div>
                </div>
              } else {
                return <></>
              }
            })}
          
        </div>

        <hr className='pt-0 mt-0' />

        {newsList.map((item, index) => {
          if (index > 3 ) {
            return <React.Fragment key={index}>
              <div className='row'>
              <div className='col-md-6 center-info-front py-4' data-aos="fade-up">
                <div className='imh max500 shadowed rad-10'>
                  <img src={item.image} className='rad-10' alt="" />
                </div>
              </div>
              <div className='col-md-6 center-info'>
                <div className='max500'>
                  <p className='c-faint-font mb-2'>{item.date}</p>
                  <h3>{item.title}</h3>
                  <p>{clipToLength(item.content[0].point || item.content[0].topic || item.content[1].point, 100)}</p>
                  <p className='c-pr-blue increased' onClick={() => goToItem(item.id)}>Read More</p>
                </div>
              </div>
            </div>
            <hr className='pt-0 mt-0' />
            </React.Fragment>
          } else {
            return <></>
          }
        })}
      </div>
      {/* <div className='content-body py-5'>
        <div className='w90 max1200 py-5'></div>
        <div className='w90 max1200'>
          <div className='row'>
            {newsList.map((item, index) => {
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
        </div>
      </div> */}

      <ContactSect/>
    </div>
  );
}

export default News;
