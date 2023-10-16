import React from 'react'
import { Link, Typography, Box, CardMedia, CardContent, Grid } from '@mui/material';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { defaultStyle, backgroundStyle, flexCenter, textStyle0, textStyle3, palette } from '../../theme';

import Login from '../../components/Login'
import Signup from '../../components/Signup';
import formImage from '../../assets/login/humanitarian-day1.png'

import loginSlice from '../../redux/loginSlice';
import { LOGIN, SIGNUP } from '../../until/constants'
import { statusLoginSelector } from '../../redux/selectors';
import { authenticatedSelector } from '../../redux/selectors';

function LoginSignup() {
  const dispatch = useDispatch()
  let authenticated = useSelector(authenticatedSelector)
  const status = useSelector(statusLoginSelector)

  if (authenticated) {
    return <Navigate to={"/dashboard"}/>
  }

  function handleStatusChange(e: any) { // switch LOGIN SIGNUP
    e.preventDefault()
    const nextStatus = status === LOGIN ? SIGNUP : LOGIN
    dispatch(loginSlice.actions.changeStatus(nextStatus))
  }
  
  return (
    <Grid container sx={defaultStyle}>
      <Grid item xs={5} md={8} sx={backgroundStyle}/> 
      <Grid item xs={7} md={4} sx={flexCenter}>
        <Box maxWidth={'70%'}>
          <Box>
            <Typography align="center" sx={textStyle0} marginBottom={'.5em'}>
                Welcome to StartNow
            </Typography>
            <CardMedia component="img" image={formImage} />
          </Box>

          <CardContent>
            {status === LOGIN? <Login/> : <Signup/>}
            <Box>
                <Link href="/" onClick={e => handleStatusChange(e)} underline="none" sx={textStyle3} color="#2BA84A">Click here</Link>
                <Typography display="inline" ml={.5} sx={textStyle3} color={palette.black}>
                  to {status === LOGIN ? 'Sign up' : 'Login'} if you've already have an account
                </Typography>
            </Box>
          </CardContent>
        </Box>
      </Grid>
    </Grid>
  )
}

export default LoginSignup