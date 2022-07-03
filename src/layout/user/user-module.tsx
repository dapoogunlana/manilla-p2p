import React, {  } from 'react';
import { Outlet  } from 'react-router-dom';
import Header from './header/user-header';
import Footer from './footer/user-footer';

function UserModule() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default UserModule;
