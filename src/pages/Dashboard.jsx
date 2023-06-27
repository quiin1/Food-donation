import React, { useEffect, useState } from 'react'
import { Box, Alert, AlertTitle, CardMedia, Typography, Button, List, Grid } from "@mui/material"
import { Navigate } from 'react-router-dom';
import { palette } from '../theme'
import NavItem from '../components/NavItem'
import SearchBar from '../components/SearchBar';
import MyAvatar from '../components/MyAvatar';
import Content from '../components/Content';

function showAlert() {
  setTimeout(() => {

  })
  return (
    <Alert severity="success">
      <AlertTitle>Success</AlertTitle>
      This is a success alert — <strong>check it out!</strong>
    </Alert>
  )
}

function Dashboard() {
  const [authenticated, setAuthenticated] = useState(localStorage.getItem("authenticated") || false);
  const [state, setState] = useState(localStorage.getItem("state") || "Overview");
  console.log(state)
  const listNavItems = [
    {
      title: "Overview",
      img: "/Vector.png",
    },
    {
      title: "Post manager",
      img: "/fi-sr-document-signed.png",
    },
    {
      title: "Location",
      img: "/fi-sr-location-alt.png",
    },
    {
      title: "Reward",
      img: "/Vector (1).png",
    },
    {
      title: "Payment record",
      img: "/fi-sr-money.png",
    }
  ]

  function handleLogout() {
    localStorage.removeItem("authenticated");
    localStorage.removeItem("state");
    setState(null);
    setAuthenticated(false);
  }

  if (!authenticated) {
    return <Navigate to="/login" />
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
          {listNavItems.map((item, index) => {
            return(
              <NavItem id={index} key={index} title={item.title} 
                onClick={() => {setState(item.title); localStorage.setItem('state', item.title)}}
                className={state === item.title ? "chosen" : ""}
              >
                <CardMedia sx={{width: "22px"}} component="img" src={item.img}/>
              </NavItem>
          )})}
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
          <Content state={state}/>
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard