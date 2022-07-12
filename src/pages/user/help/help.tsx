import React, { useEffect } from 'react';
import { Link  } from 'react-router-dom';
import { routeConstants } from '../../../services/constants/route-constants';
import './help.scss';

function Help() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div>
      <h1>Help</h1>
    </div>
  );
}

export default Help;
