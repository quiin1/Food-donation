import { React } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Login from "./pages/Login";
import Dashboard from './pages/Dashboard';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="*" element={<div>Page Not Found</div>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
