import React, {  } from 'react';
import { Link  } from 'react-router-dom';
import { routeConstants } from '../../../services/constants/route-constants';

function Login() {
  return (
    <div>
      <h1>Welcome to Admin Login page</h1>
      <p>Welcome to Admin Login page <Link to={routeConstants.register}>Register</Link></p>
    </div>
  );
}

export default Login;
