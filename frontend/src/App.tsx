import React from 'react';
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

import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import { getStorage } from '@firebase/storage';

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
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginSignup/>}/>
          <Route path="/dashboard" element={<Dashboard children={undefined}/>}/>
          <Route path="/post-manager" element={<PostManager/>}/>
          <Route path="/location" element={<Location/>}/>
          <Route path="/reward" element={<Reward/>}/>
          <Route path="/payment-record" element={<PaymentRecord/>}/>
          <Route path="/feeds" element={<NewsFeed/>}/>
          <Route path="*" element={<div>Page Not Found</div>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
