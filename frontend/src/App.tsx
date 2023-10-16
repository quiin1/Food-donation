import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import LoginSignup from './pages/LoginSignup';
import Dashboard from './pages/Dashboard';
import PostManager from './subpages/Dashboard/PostManager';
import Location from './subpages/Dashboard/Location';
import Reward from './subpages/Dashboard/Reward';
import PaymentRecord from './subpages/Dashboard/PaymentRecord';
import NewsFeed from './subpages/Dashboard/NewsFeed';
import UsersManagement from './subpages/Dashboard/UsersManagement';

import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import { getStorage } from '@firebase/storage';
import PageNotFound from './pages/PageNotFound';
import Forbidden from './pages/Forbidden';
import { useSelector } from 'react-redux';
import { roleSelector } from './redux/selectors';

const firebaseConfig = {
  apiKey: "AIzaSyCasBW2RQ5sBZ9IDfefLA7-A4wfsQTlhtw",
  authDomain: "food-donation-31164.firebaseapp.com",
  projectId: "food-donation-31164",
  storageBucket: "food-donation-31164.appspot.com",
  messagingSenderId: "670503697753",
  appId: "1:670503697753:web:e1d8fb6b1876914d07a048",
  measurementId: "G-JLH76J3NN6"
};

// firebase.initializeApp(firebaseConfig);
const app = firebase.initializeApp(firebaseConfig);

// Access Firebase Storage using the modular SDK
export const storage = getStorage(app);

const App: React.FC = () => {
  const role = useSelector(roleSelector)
  
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginSignup/>}/>
          <Route path="/dashboard" element={<Dashboard children={undefined}/>}/>
          <Route path="/post-manager" 
            element={(role?.includes("admin") || role?.includes("post-manager")) ? <PostManager/> 
              : <Dashboard children={<Forbidden/>}/>}/>
          <Route path="/location" 
            element={(role?.includes("admin") || role?.includes("location")) ? <Location/>
              : <Dashboard children={<Forbidden/>}/>}/>
          <Route path="/reward" 
            element={(role?.includes("admin") || role?.includes("reward")) ? <Reward/>
              : <Dashboard children={<Forbidden/>}/>}/>
          <Route path="/payment-record" 
            element={(role?.includes("admin") || role?.includes("payment-record")) ? <PaymentRecord/>
              : <Dashboard children={<Forbidden/>}/>}/>
          <Route path="/newsfeed" 
            element={(role?.includes("admin") || role?.includes("post-manager")) ? <NewsFeed/> 
              : <Dashboard children={<Forbidden/>}/>}/>
          <Route path="/users-management" 
            element={role?.includes("admin") ? <UsersManagement/> 
              : <Dashboard children={<Forbidden/>}/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
