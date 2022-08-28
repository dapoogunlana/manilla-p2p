import React, {  } from 'react';
import { Link  } from 'react-router-dom';
import { routeConstants } from '../../../../../services/constants/route-constants';

function Header() {
  return (
    <div>
      <h1>Header</h1>
      <p><Link to={routeConstants.register}>Logout</Link></p>
    </div>
  );
}

export default Header;
