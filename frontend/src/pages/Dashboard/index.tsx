import React, { ReactNode, useEffect } from 'react'
import { Box } from "@mui/material"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../../components/Dashboard/Header/Header';
import SideBar from '../../components/Dashboard/SideBar/SideBar';
import Overview from '../../subpages/Dashboard/Overview';
import { authenticatedSelector } from '../../redux/selectors';

type DashboardProps = {
  children: ReactNode
}

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  const navigate = useNavigate()
  let authenticated = useSelector(authenticatedSelector)
  
  useEffect(() => {
    if (!authenticated) {
      // return <Navigate to={"/login"}/> --> error
      navigate("/")
    }
  }, [authenticated])
  
  return (
    <Box display={"flex"}>
      <SideBar/>
      <Box flex={5}>
        <Header/>
        <Box className="contentContainer" bgcolor="#F4F5F6" padding="2em" marginLeft="16%" marginTop="64px" >
          {children || <Overview/>}
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard