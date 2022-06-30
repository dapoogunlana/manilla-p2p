import React, {  } from 'react';
import { Outlet  } from 'react-router-dom';

function UserModule() {
  return (
    <div>
      <h1>Welcome to Admin Module</h1>
      <Outlet/>
    </div>
  );
}

export default UserModule;
