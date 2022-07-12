import React, { useEffect } from 'react';
import { Link  } from 'react-router-dom';
import { routeConstants } from '../../../services/constants/route-constants';
import './contact.scss';

function Contact() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div>
      <h1>Contact Us</h1>
    </div>
  );
}

export default Contact;
