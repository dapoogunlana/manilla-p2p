import React, { useEffect } from 'react';
import { Link  } from 'react-router-dom';
import { routeConstants } from '../../../services/constants/route-constants';
import './product-updates.scss';

function ProductUpdates() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <h1>Product Updates</h1>
    </div>
  );
}

export default ProductUpdates;
