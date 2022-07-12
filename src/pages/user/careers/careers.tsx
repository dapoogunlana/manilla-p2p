import React, { useEffect, useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import { DropdownArrow } from '../../../assets/images';
import { routeConstants } from '../../../services/constants/route-constants';
import { careerData } from './careers-data';
import './careers.scss';

function Careers() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const navigate = useNavigate();
  const [reactiveCareers, setReactiveCareers] = useState(careerData);

  const openRole = (index: number) => {
    const newCareers = [...reactiveCareers];
    if (newCareers[index].active === true) {
      newCareers[index].active = false;
    } else {
      newCareers.map((item) => {
        item.active = false;
        return item;
      });
      newCareers[index].active = true;
    }
    setReactiveCareers(newCareers);
  }
  const openApplication = (role: string) => {
    navigate(`/${routeConstants.careers}/${role}`);
  }
  return (
    <div className='careers'>
      <div className='top-band'>
        <div className='header-spacer'></div>
        <div className='topic-space' data-aos="fade-in">
          <h2>Careers</h2>
        </div>
      </div>
      <div className='content-body py-5'>
        <div className='w90 max1200 py-5'></div>
        <div className='w90 max1200'>
          <div className='cover' data-aos="fade-up">
            <div className='item-card'>

            </div>
            {reactiveCareers.map((item, index) => {
            return <div className="item my-4 clickable" key={index} onClick={() => openRole(index)}>
              <div className="spread-info py-2">
                <h6 className="increased-soft mb-0">{item.title}</h6>
                <div className={'view-icon' + (item.active ? ' full-view' : '')}>
                  <img src={DropdownArrow} alt="" />
                </div>
              </div>
              <div className={"answer" + (item.active ? ' full' : '')}>
                <p className="reduced-soft mb-0">{item.details}</p>
                <div className="spread-info pt-2">
                  <p className="reduced-soft faint-font mb-0">
                    {item.expires || 'Curently Open'}
                  </p>
                  <button className='solid-button-2c rad-10' onClick={()=>openApplication(item.role_code)}>Apply</button>
                </div>
              </div>
            </div>
          })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Careers;
