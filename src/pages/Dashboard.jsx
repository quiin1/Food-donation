import React, { useEffect, useState } from 'react'
import { Box, Alert, AlertTitle, CardMedia, Typography, Button, Icon } from "@mui/material"
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useNavigate, Navigate } from 'react-router-dom';
import { palette } from '../theme'
import NavItem from '../components/NavItem'
import SearchBar from '../components/SearchBar';
import MyAvatar from '../components/MyAvatar';
import Overview from '../components/Overview';
import PostManager from '../components/PostManager'
import Location from '../components/Location';
import Reward from '../components/Reward';

function showAlert() {
  setTimeout(() => {
    
  })
  return(
    <Alert severity="success">
      <AlertTitle>Success</AlertTitle>
      This is a success alert — <strong>check it out!</strong>
    </Alert>
  )
}

function Dashboard() {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(localStorage.getItem("authenticated") || false);

  function handleLogout() {
    localStorage.removeItem("authenticated");
    setAuthenticated(false);
  }

  if(!authenticated){
    return <Navigate to="/login" />
  }
  return (
    <Box display={"flex"}>
      <Box className="navLeft" flex={1} height={'100vh'} bgcolor="#FCFCFD" borderRight={"1px solid #F4F5F6"}>
        <Box display="flex" mt="1em" justifyContent={"center"}>
          <CardMedia component="img" src="/icon.png" sx={{width:"45px"}}/>
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
          <NavItem title="Overview">
            <CardMedia sx={{width: "22px"}} component="img" src="/Vector.png"/>
          </NavItem>
          <NavItem title="Post manager">
            <CardMedia sx={{width: "22px"}} component="img" src="/fi-sr-document-signed.png"/>
          </NavItem>
          <NavItem title="Location">
            <CardMedia sx={{width: "22px"}} component="img" src="/fi-sr-location-alt.png"/>
          </NavItem>
          <NavItem title="Reward">
            <CardMedia sx={{width: "22px"}} component="img" src="/Vector (1).png"/>
          </NavItem>
          <NavItem title="Payment record">
            <CardMedia sx={{width: "22px"}} component="img" src="/fi-sr-money.png"/>
          </NavItem>
        </List>
      </Box>
      <Box flex={5}>
        <Box className="navTop" bgcolor="#FCFCFD" sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          border: "1px solid #F4F5F6",
          padding: ".5em",
        }}>
          <SearchBar></SearchBar>
          <MyAvatar></MyAvatar>
          <Button onClick={handleLogout}>Logout</Button>
        </Box>
        <Box className="contentContainer" padding="1.7em" bgcolor="#F4F5F6" sx={{heihgt: "92.2vh"}}>
          {/* <Overview/> */}
          <PostManager/>
          {/* <Location/> */}
          {/* <Reward/> */}
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard