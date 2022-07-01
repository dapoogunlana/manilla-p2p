import React, { Suspense, lazy } from 'react';
import {  Routes, Route  } from 'react-router-dom';
import { routeConstants } from '../services/constants/route-constants';


const UserModule = lazy(() => import("../layout/user/user-module"));
const HomePage = lazy(() => import("../pages/user/home/home"));
const AboutPage = lazy(() => import("../pages/user/about/about"));

function UserRoute() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={routeConstants.all} element={<UserModule/>}>
          <Route path={routeConstants.all} element={<HomePage/>}></Route>
          <Route path={routeConstants.userLogin} element={<h1>Signup</h1>}></Route>
          <Route path={routeConstants.about} element={<AboutPage/>}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default UserRoute;
