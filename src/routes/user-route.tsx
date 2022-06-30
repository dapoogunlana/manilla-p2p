import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { routeConstants } from '../services/constants/route-constants';


const UserModule = lazy(() => import("../layout/user/user-module"));

function UserRoute() {
  return (
    <Routes>
      <Route path={routeConstants.all} element={<UserModule/>}>
        <Route path={routeConstants.all} element={<h1>Home</h1>}></Route>
        <Route path={routeConstants.userLogin} element={<h1>Signup</h1>}></Route>
        <Route path={routeConstants.about} element={<h1>About</h1>}></Route>
      </Route>
    </Routes>
  );
}

export default UserRoute;
