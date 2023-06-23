import { React, useState } from 'react'
import { Link, Typography, Box, CardMedia, CardContent, Grid } from '@mui/material';
import { Navigate } from 'react-router-dom';
import { defaultStyle, backgroundStyle, flexCenter, textStyle0, textStyle1, textStyle2} from '../theme';
import { LoginForm } from '../components/LoginForm';
import { SignupForm } from '../components/SignupForm';
import { textStyle3 } from '../theme';
import palette from '../theme'

function Login() {
  const [status, setStatus] = useState('LOGIN')
  
  function handleClick(e) {
    e.preventDefault()
    status !== 'SIGNUP'? setStatus('SIGNUP') : setStatus('LOGIN')
  }
  
  if (localStorage.getItem('authenticated')) {
    return <Navigate to="/dashboard"/>
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
            {status === 'LOGIN'? <LoginForm/> : <SignupForm status={status}/>}
            <Box>
                <Link href="/" onClick={e => handleClick(e)} underline="none" sx={textStyle3} color="#2BA84A">Click here</Link>
                <Typography display="inline" ml={.5} sx={textStyle3} color={palette.black}>
                  to {status === 'LOGIN'? 'Sign up' : 'Login'} if you've already have an account
                </Typography>
            </Box>
          </CardContent>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Login