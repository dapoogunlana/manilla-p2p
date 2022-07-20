import React, { useEffect } from 'react';
import { Link  } from 'react-router-dom';
import { countryList } from '../../../services/constants/country-list';
import { routeConstants } from '../../../services/constants/route-constants';
import './contact.scss';

function Contact() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div className='contact'>
      <div className='top-band'>
        <div className='header-spacer'></div>
        <div className='topic-space' data-aos="fade-in">
          <h2>Contact Us</h2>
        </div>
      </div>
      <div className='content-body py-5'>
        <div className='w90 max1200 py-5'></div>
        <div className='w90 max1200 pb-5'>
            <h6 className='text-center'>For Business & Partnership Inquiries, Kindly Fill the Form Below to Reach Out to Us</h6>
          <div className='cover w96 max600' data-aos="fade-up">
            <div className='item-card'>
              <div className='row'>
                <div className='col-sm-6'>
                  <div className='input-grp'>
                    <label>First Name</label>
                    <input type="text" placeholder='Enter frist name' />
                  </div>
                </div>
                <div className='col-sm-6'>
                  <div className='input-grp'>
                    <label>Last Name</label>
                    <input type="text" placeholder='Enter last name' />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-sm-6'>
                  <div className='input-grp'>
                    <label>Email</label>
                    <input type="text" placeholder='Enter email address' />
                  </div>
                </div>
                <div className='col-sm-6'>
                  <div className='input-grp'>
                    <label>Country</label>
                    <select name="" id="" defaultValue={''}>
                      <option value="" disabled>Choose your country</option>
                      {countryList.map((country, index) => {
                          return <option value={country?.name} key={index}>{country?.name}</option>
                      })}
                    </select>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='input-grp'>
                    <label>Talk To Us</label>
                    <textarea rows={3} placeholder='Type what you would like to tell us here'></textarea>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='text-center py-3'>
                    <button className='solid-button-2c rad-10 px-5 shadowed'>Send</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
