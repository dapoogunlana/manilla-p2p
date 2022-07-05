import React, {  } from 'react';
import Banner from './page-modules/banner/banner';
import PreInfo from './page-modules/pre-info/pre-info';
import HowTo from './page-modules/how-to/how-to';
import Services from './page-modules/services/services';
import Operators from './page-modules/operators/operators';
import UnolckingUtilities from './page-modules/unolcking-utilities/unolcking-utilities';
import TradeWays from './page-modules/trade-ways/trade-ways';
import Testimonials from './page-modules/testimonials/testimonials';
import Media from './page-modules/media/media';
import LatestNews from './page-modules/latest-news/latest-news';
import './home.scss';

function About() {
  return (
    <div className='home'>
      <Banner/>
      <PreInfo/>
      <HowTo/>
      <Services/>
      <Operators/>
      <UnolckingUtilities/>
      <TradeWays/>
      <Testimonials/>
      <Media/>
      <LatestNews/>
    </div>
  );
}

export default About;
