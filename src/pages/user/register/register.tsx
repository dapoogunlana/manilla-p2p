import React, { useEffect } from 'react';
import { Link  } from 'react-router-dom';
import { routeConstants } from '../../../services/constants/route-constants';
import './register.scss';

function Register() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div>
      <h1>Register</h1>
    </div>
  );
}

export default Register;
