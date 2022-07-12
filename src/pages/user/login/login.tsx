import React, { useEffect } from 'react';
import { Link  } from 'react-router-dom';
import { routeConstants } from '../../../services/constants/route-constants';
import './login.scss';

function Login() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div>
      <h1>login</h1>
    </div>
  );
}

export default Login;
