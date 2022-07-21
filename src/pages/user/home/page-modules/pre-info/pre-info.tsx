
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { apiLinks } from '../../../../../config/environment';
import { routeConstants } from '../../../../../services/constants/route-constants';
import { sendRequest } from '../../../../../services/utils/request';
import { exchangeList, whyChooseList } from './pre-info-data';
import './pre-info.scss';

function About(props: any) {

  const [currencyList, setCurrencyList] = useState<any[]>([]);

  useEffect(() => {
    sendRequest({
        url: apiLinks.cryptoCompare,
        external: true
    }, (res: any) => {
      const selectedList: any = [];
      res.Data.map((item: any) => {
        if(exchangeList.indexOf(item.RAW?.USD?.FROMSYMBOL) !== -1) {
          selectedList.push(item);
        }
      });
      setCurrencyList(selectedList);
    }, () => {});
  },[props]);

  return (
    <>
      <div className='crypto-stats'>
        <h3 className='text-center mt-5 pt-5'>Trade Crypto Assets with Your Peers</h3>
        <div className='stats-card' data-aos="flip-left">
          <div className='overflow-holder'>
            {currencyList.map((item, index) => {
              const rise = ((item.RAW.USD.CHANGEHOUR / item.RAW.USD.PRICE) * 100);
              return <div className='stats-bar py-2' key={index}>
                <div className='imh max50'>
                  <img src={'https://www.cryptocompare.com' + item.CoinInfo.ImageUrl} alt="" />
                </div>
                <div className='spread-info-front'>
                  <p className='mb-0 price'>
                    {item.CoinInfo.FullName}
                    <span className='ml-3 mb-0 faint-font reduced'>{item.CoinInfo.Internal}</span>
                  </p>
                </div>
                <div className='spread-info-front'>
                  <h6 className='mb-0 increased'>{item.DISPLAY.USD.PRICE}</h6>
                </div>
                <div className='spread-info-front'>
                  <p className={'mb-0 ' + (rise >= 0 ? 'c-dark-green' : 'c-red')}>
                    { rise >= 0 ? <i className="fa-solid fa-arrow-up"></i> : <i className="fa-solid fa-arrow-down"></i>}
                    {rise.toFixed(2) + '%'}
                  </p>
                </div>
                <div className='spread-info-front'>
                  <h6 className='mb-0'>{item.DISPLAY.USD.TOPTIERVOLUME24HOURTO}</h6>
                </div>
                <div className='spread-info-front'>
                  <button className='hollow-button-c shadowed rad-7-im ml-3'>Trade</button>
                </div>
              </div>
            })}
          </div>
          
        </div>
      </div>
      <div className='why-us pb-5'>
        <div className='w96 max1200 pb-4'>
          <h3 className='text-center mt-5 pt-5'>Why Choose Us</h3>
          <div className='row'>
            {whyChooseList.map((item, index) => {
              return <div className='col-lg-3 col-md-6' key={index} data-aos="fade-up" data-aos-delay={index * 200}>
              <div className={'why-us-card auto-flip' + (index % 2 ? '2' : '')}>
                <div className='text'>
                  <p className='mb-0'>{item.text}</p>
                </div>
                <div className='topic'>
                  <div className='icon-sect'>
                    <img src={item.icon} alt="" />
                  </div>

                  <h6>{item.topic}</h6>
                </div>
              </div>
            </div>
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
