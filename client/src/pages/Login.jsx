import { React, useEffect } from 'react'
import { Link, Typography, Box, CardMedia, CardContent, Grid } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { defaultStyle, backgroundStyle, flexCenter, textStyle0, textStyle3, palette } from '../theme';
import { LoginForm } from '../components/LoginForm';
import { SignupForm } from '../components/SignupForm';
import loginSlice from '../redux/loginSlice';
import * as login from '../constants/login'
import { statusLoginSelector } from '../redux/selectors';
import { authenticatedSelector } from '../redux/selectors';

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let authenticated = useSelector(authenticatedSelector)
  const status = useSelector(statusLoginSelector)
  
  useEffect(() => {
    if (authenticated) {
      console.log(authenticated)
      // return <Navigate to={"/dashboard"}/>
      navigate("/dashboard")
    }
  }, [authenticated])

  function handleStatusChange(e) { // switch LOGIN SIGNUP
    e.preventDefault()
    const nextStatus = status === login.LOGIN ? login.SIGNUP : login.LOGIN
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
            <CardMedia component="img" image='/humanitarian-day1.png' />
          </Box>

          <CardContent>
            {status === login.LOGIN? 
              <LoginForm/> : 
              <SignupForm/>}
            <Box>
                <Link href="/" onClick={e => handleStatusChange(e)} underline="none" sx={textStyle3} color="#2BA84A">Click here</Link>
                <Typography display="inline" ml={.5} sx={textStyle3} color={palette.black}>
                  to {status === login.LOGIN ? 'Sign up' : 'Login'} if you've already have an account
                </Typography>
            </Box>
          </CardContent>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Login