import React, {  } from 'react';
import { Link  } from 'react-router-dom';
import { routeConstants } from '../../../../../services/constants/route-constants';

function Sidebar() {
  return (
    <div>
      <h1>Side bar</h1>
      <p><Link to={routeConstants.register}>Waitlist</Link></p>
    </div>
  );
}

export default Sidebar;
