import React, { useEffect, useState } from 'react'
import { Box, CardMedia, Typography, List } from "@mui/material"
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { palette } from '../theme'
import NavItem from '../components/NavItem'
import SearchBar from '../components/SearchBar';
import MyAvatar from '../components/MyAvatar';
import Content from './Content';
import { LOGOUT, listNavItems } from '../until/constants';
import dashboardSlice from '../redux/dashboardSlice';
import { authenticatedSelector, subpageSelector } from '../redux/selectors';

function Dashboard() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()
  let authenticated = useSelector(authenticatedSelector)
  let subpage = useSelector(subpageSelector)
  
  useEffect(() => {
    if (!authenticated) {
      // return <Navigate to={"/login"}/>
      navigate("/login")
    }
  }, [authenticated])

  function handleLogout() {
    dispatch(dashboardSlice.actions.changeAuthenticated(LOGOUT))
    dispatch(dashboardSlice.actions.changeSubpage(LOGOUT))
    enqueueSnackbar('Logout successfully!', {variant: "success"});
    localStorage.removeItem("token")
  }

  function handleChangeSubpage(title) {
    dispatch(dashboardSlice.actions.changeSubpage(title));
  }
  
  return (
    <Box display={"flex"}>
      <Box className="navLeft" flex={1} height="100vh" bgcolor="#FCFCFD" borderRight={"1px solid #F4F5F6"}>
        <Box display="flex" mt="1em" justifyContent={"center"}>
          <CardMedia component="img" src="/icon.png" sx={{ width: "45px" }} />
          <Typography sx={{
            fontFamily: "Inter",
            fontWeight: "800",
            fontSize: "1.2em",
            color: palette.green
          }} ml=".4em">Startnow</Typography>
        </Box>
        <List sx={{
          margin: "2em 0"
        }}>
          {listNavItems.map((item, index) => (
              <NavItem id={index} key={index} title={item.title} 
                onClick={() => handleChangeSubpage(item.title)}
                className={subpage === item.title ? "chosen" : ""}
              >
                <CardMedia sx={{width: "22px"}} component="img" src={item.img}/>
              </NavItem>
          ))}
        </List>
      </Box>
      <Box flex={5} bgcolor="#F4F5F6">
        <Box className="navTop" bgcolor="#FCFCFD" sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          border: "1px solid #F4F5F6",
          padding: ".5em",
        }}>
          <SearchBar/>
          <MyAvatar handleLogout={handleLogout}/>
        </Box>
        <Box className="contentContainer" padding="1.7em" >
          <Content state={subpage} data={listNavItems}/>
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard