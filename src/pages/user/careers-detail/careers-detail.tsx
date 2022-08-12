import React, { useEffect, useState } from 'react';
import { useParams  } from 'react-router-dom';
import ContactSect from '../../../components/block-components/contact-sect/contact-sect';
import { careerData } from './careers-detail-data';
import './careers-detail.scss';

function CareerDetail(props: any) {

  const { id } = useParams();

  const [role, setRole] = useState<any>({});

  useEffect(() => {
    window.scrollTo(0, 0);
    const currentRole = careerData.find((item) => item.role_code === id) || {};
    setRole(currentRole);
  });

  return (
    <div className='careers'>
      <div className='top-band'>
        <div className='header-spacer'></div>
        <div className='topic-space py-4' data-aos="fade-in">
          <h2>Careers</h2>
          <h6>{role && role.title}</h6>
        </div>
      </div>
      <div className='content-body py-5'>
        <div className='w90 max1200 py-5'></div>
        <div className='w90 max800'>
          <h6 className='text-center pb-4'>Fill in your details to apply for this position</h6>
          <div className='cover' data-aos="fade-up">
            <div className='item-card'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='input-grp'>
                    <label>First Name</label>
                    <input type="text" placeholder='Enter frist name' />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='input-grp'>
                    <label>Last Name</label>
                    <input type="text" placeholder='Enter last name' />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='input-grp'>
                    <label>Email</label>
                    <input type="text" placeholder='Enter email address' />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='input-grp'>
                    <label>Country</label>
                    <select name="" id="" defaultValue={''}>
                      <option value="" disabled>Choose your country</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='input-grp'>
                    <label>Phone Number</label>
                    <input type="number" placeholder='' />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='input-grp'>
                    <label>Years Of Experience</label>
                    <select name="" id="" defaultValue={''}>
                      <option value="" disabled>Choose your years of experience</option>
                      <option value={0}>0 Years</option>
                      <option value={1}>1 Year</option>
                      <option value={2}>2 Years</option>
                      <option value={3}>3 Years</option>
                      <option value={4}>4 Years</option>
                      <option value={5}>5 Years</option>
                      <option value={6}>6 Years</option>
                      <option value={7}>7 Years</option>
                      <option value={8}>8 Years</option>
                      <option value={9}>9 Years</option>
                      <option value={10}>10 Years</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='input-grp'>
                    <label>Upload Resume</label>
                    <input type="file" placeholder='ffff' />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='input-grp'>
                    <label>Portfolio Link</label>
                    <input type="text" placeholder='Paste your portfolio link' />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='input-grp'>
                    <label>Cover Letter</label>
                    <textarea rows={3} placeholder='Type or paste your cover letter here'></textarea>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='text-center py-3'>
                    <button className='solid-button-2c rad-10 shadowed'>Apply Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactSect/>
    </div>
  );
}

export default CareerDetail;
