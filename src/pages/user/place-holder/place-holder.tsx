import React, { useEffect } from 'react';
import { Link  } from 'react-router-dom';
import { routeConstants } from '../../../services/constants/route-constants';
import './place-holder.scss';

function PlaceHolder() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div>
      <h1>Place Holder</h1>
    </div>
  );
}

export default PlaceHolder;
