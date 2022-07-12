import React, { useEffect } from 'react';
import { Link  } from 'react-router-dom';
import { routeConstants } from '../../../services/constants/route-constants';
import './learn-detail.scss';

function LearnDetail() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div>
      <h1>Learn Detail</h1>
    </div>
  );
}

export default LearnDetail;
