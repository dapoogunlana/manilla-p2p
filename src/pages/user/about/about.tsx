import React, {  } from 'react';
import { Link  } from 'react-router-dom';
import { routeConstants } from '../../../services/constants/route-constants';

function Home() {
  return (
    <div>
      <h1>Welcome to User About page</h1>
      <p>Welcome to User About page <Link to={routeConstants.home}>Go Home</Link></p>
    </div>
  );
}

export default Home;