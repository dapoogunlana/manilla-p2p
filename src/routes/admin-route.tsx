import React, { Suspense, lazy } from 'react';
import { Routes, Route  } from 'react-router-dom';
import { routeConstants } from '../services/constants/route-constants';

const AdminModule = lazy(() => import("../layout/admin/admin-module"));
const AdminLogin = lazy(() => import("../pages/admin/login/login"));
const AdminSignup = lazy(() => import("../pages/admin/signup/signup"));
const AdminDashboard = lazy(() => import("../pages/admin/dashboard/dashboard"));

function AdminRoute() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={routeConstants.all} element={<AdminModule/>}>
            <Route path={routeConstants.adminLogin} element={<AdminLogin/>}></Route>
            <Route path={routeConstants.register} element={<AdminSignup/>}></Route>
            <Route path={routeConstants.all} element={<AdminDashboard/>}>
              {/* <Route path={routeConstants.home} element={<AdminDashboard/>}></Route> */}
            </Route>
          </Route>
      </Routes>
    </Suspense>
    // <div>Happy</div>
  );
}

export default AdminRoute;
