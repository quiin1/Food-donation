import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import LoginSignup from './pages/LoginSignup';
import Dashboard from './pages/Dashboard';
import PostManager from './subpages/Dashboard/PostManager';
// import Location from './subpages/Dashboard/Location';
// import Reward from './subpages/Dashboard/Reward';
// import PaymentRecord from './subpages/Dashboard/PaymentRecord';

const App: React.FC = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginSignup/>}/>
          <Route path="/dashboard" element={<Dashboard children={undefined}/>}/>
          <Route path="/dashboard/post-manager" element={<PostManager/>}/>
          {/* <Route path="/dashboard/location" element={<Location/>}/>
          <Route path="/dashboard/reward" element={<Reward/>}/>
          <Route path="/dashboard/payment-record" element={<PaymentRecord/>}/> */}
          <Route path="*" element={<div>Page Not Found</div>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
