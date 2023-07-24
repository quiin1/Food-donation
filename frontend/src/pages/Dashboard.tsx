import React, { ReactNode, useEffect } from 'react'
import { Box } from "@mui/material"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../components/Dashboard/General/Header';
import SideBar from '../components/Dashboard/General/SideBar';
import Overview from '../subpages/Dashboard/Overview';
import { authenticatedSelector } from '../redux/selectors';

type DashboardProps = {
  children: ReactNode
}

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  const navigate = useNavigate()
  // let authenticated = useSelector(authenticatedSelector)
  
  // useEffect(() => {
  //   if (!authenticated) {
  //     // return <Navigate to={"/login"}/> --> error
  //     navigate("/")
  //   }
  // }, [authenticated])
  
  return (
    <Box display={"flex"}>
      <SideBar/>
      <Box flex={5} bgcolor="#F4F5F6">
        <Header/>
        <Box className="contentContainer" padding="1.7em" >
          {children || <Overview/>}
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard