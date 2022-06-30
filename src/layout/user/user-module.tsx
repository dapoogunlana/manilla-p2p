import React, {  } from 'react';
import { Outlet  } from 'react-router-dom';
import Header from './header/user-header';
import Footer from './footer/user-footer';

function UserModule() {
  return (
    <div>
      <Header/>
      <h1>Welcome to User Module</h1>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default UserModule;
