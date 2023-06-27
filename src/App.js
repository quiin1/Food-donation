import { React } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import { ThemeProvider, createTheme } from '@mui/material';
import Login from "./pages/Login";
import Dashboard from './pages/Dashboard';

const theme = createTheme({
  typography: {
    fontFamily: "'Inter', sans-serif",
    fontFamily: "'SF-Pro', sans-serif",
    button: {
      textTransform: "none"
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
