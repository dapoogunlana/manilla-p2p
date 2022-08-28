import React, {  } from 'react';
import { Link  } from 'react-router-dom';
import { routeConstants } from '../../../services/constants/route-constants';
import Header from './layout/header/header';
import Sidebar from './layout/sidebar/side-bar';

function Dashboard() {
  return (
    <div>
      <div>
        <Sidebar/>
      </div>
      <div>
        <h1>Welcome to Admin dashboard page</h1>
        <Header/>
      </div>
    </div>
  );
}

export default Dashboard;
