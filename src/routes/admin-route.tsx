import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { routeConstants } from '../services/constants/route-constants';

const AdminModule = lazy(() => import("../layout/admin/admin-module"));

function AdminRoute() {
  return (
    <Routes>
      <Route path={routeConstants.all} element={<AdminModule/>}>
        <Route path={routeConstants.all} element={<h1>Login</h1>}></Route>
        <Route path={routeConstants.register} element={<h1>Signup</h1>}></Route>
        <Route path={routeConstants.dashboard} element={<h1>Dashboard</h1>}></Route>
      </Route>
    </Routes>
    // <div>Happy</div>
  );
}

export default AdminRoute;
