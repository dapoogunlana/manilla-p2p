import React, {  } from 'react';
import { Outlet  } from 'react-router-dom';

function AdminHeader() {
  return (
    <div>
      <h1>Welcome to User Module</h1>
      <Outlet/>
    </div>
  );
}

export default AdminHeader;
