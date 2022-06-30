import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
// import AdminRoutes from './admin-route';


const AdminRoutes = lazy(() => import("./admin-route"));
const UserRoutes = lazy(() => import("./user-route"));

function BaseRoute() {
  return (
    <Router>
      <Suspense fallback={<div>Loading Core...</div>}>
        <Routes>
          <Route path={'admin/*'} element={<AdminRoutes/>}></Route>
          <Route path={'*'} element={<UserRoutes/>}></Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default BaseRoute;
