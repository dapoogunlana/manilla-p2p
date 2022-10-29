import React, {  } from 'react';
import { Link, NavLink  } from 'react-router-dom';
import { LogoIcon } from '../../../../../assets/images';
import { routeConstants } from '../../../../../services/constants/route-constants';
import './sidebar.scss';

function Sidebar(props: any) {
  return (
    <div className='bar'>
      <div className='imh w40 max85 pt-5 pb-3'>
        <img src={LogoIcon} alt="" />
      </div>
      <NavLink to={`/${routeConstants.admin}/${routeConstants.adminStatistics}`} className={({isActive}) => isActive ? 'bar-link selected' : 'bar-link'} onClick={props.toggleSidebarVisible}>
        <span>Statistics</span>
      </NavLink>
      <NavLink to={`/${routeConstants.admin}/${routeConstants.adminWaitlistMessages}`} className={({isActive}) => isActive ? 'bar-link selected' : 'bar-link'} onClick={props.toggleSidebarVisible}>
        <span>Waitlist</span>
      </NavLink>
      <NavLink to={`/${routeConstants.admin}/${routeConstants.adminVisitorMessages}`} className={({isActive}) => isActive ? 'bar-link selected' : 'bar-link'} onClick={props.toggleSidebarVisible}>
        <span>Visitors</span>
      </NavLink>
      {/* <NavLink to={`/${routeConstants.admin}/${routeConstants.adminPosts}`} className={({isActive}) => isActive ? 'bar-link selected' : 'bar-link'} onClick={props.toggleSidebarVisible}>
        <span>News Posts</span>
      </NavLink> */}
    </div>
  );
}

export default Sidebar;