import { React, useState, useEffect } from 'react'
import { Box, TextField, Link, Typography, InputLabel, OutlinedInput } from '@mui/material'
import { Navigate, useNavigate } from "react-router-dom"
import { SignInButton } from './MUIComponents'
import { textStyle3, palette } from '../theme'


export const LoginForm = (props) => {
    const navigate = useNavigate();
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [authenticated, setAuthenticated] = useState(
        localStorage.getItem(localStorage.getItem("authenticated") || false)
    );
    const data = JSON.parse(localStorage.getItem('accounts'))

    useEffect(() => {
        // mock data
        if (!data) {
            const accounts = [
                {
                    "username": "annie",
                    "password": "123"
                }
            ]
            localStorage.clear();
            localStorage.setItem('accounts', JSON.stringify(accounts))
        }
        else {
            // console.log(data)
        }
    }, [])

    function handleChangeUserName(e) {
        e.preventDefault();
        setUserName(e.target.value)
        console.log(e.target.value)
    }
    function handleChangePassword(e) {
        e.preventDefault();
        setPassword(e.target.value)
    }
    function MyInput(props) {
        return (
            <Box>
                <InputLabel>{props.label}</InputLabel>
                <OutlinedInput
                    autoFocus = {props.autoFocus}
                    required
                    hiddenLabel
                    id="outlined-password-input"
                    variant="filled"
                    size="small"
                    type={props.type}
                    value={props.value}
                    placeholder={props.placeholder}
                    onChange={e => props.handleChangeFunction(e)}
                    onKeyPress={e => {
                        if (e.key === "Enter") postLogIn(e)
                    }}
                    sx={{
                        mt: ".1em",
                        width: "95%",
                        backgroundColor: "#F4F5F6",
                        ".MuiOutlinedInput-notchedOutline": {
                            border: "none",
                        }
                    }}
                />
            </Box>
        )
    }

    function postLogIn(e) {
        e.preventDefault();
        console.log(username, password);
        console.log(data);
        if (data.some(account => account.username === username && account.password === password)) {
            console.log("Successfully logged in");
            setIsSuccess(true)
            setIsError(false)
            localStorage.setItem("authenticated", true)
            navigate("/dashboard")
        }
        else {
            setIsError(true)
        }
    }

    if (isSuccess) {
        return <Navigate to="/dashboard"/>
    }

    return (
        <Box mt='1em' pr='.5em' display={'flex'} flexDirection={'column'} gap={'.5em'}>
            {/* <MyInput label='Username' value={username} placeholder='Enter your user name' type='text' handleChangeFunction={handleChangeUserName}/>
            <MyInput label='Password' value={password} placeholder='Enter your password' type='password' handleChangeFunction={handleChangePassword}/> */}
            <Box>
                <InputLabel sx={{fontFamily: "SF-Pro", color: "#353945"}}>Username</InputLabel>
                <OutlinedInput
                    required
                    hiddenLabel
                    variant="filled"
                    size="small"
                    type="text"
                    value={username}
                    placeholder="Enter your user name"
                    onChange={e => setUserName(e.target.value)}
                    onKeyPress={e => {
                        if (e.key === "Enter") postLogIn(e)
                    }}
                    sx={{
                        mt: ".1em",
                        width: "95%",
                        backgroundColor: "#F4F5F6",
                        ".MuiOutlinedInput-notchedOutline": {
                            border: "none",
                        }
                    }}
                />
            </Box>
            <Box>
                <InputLabel sx={{fontFamily: "SF-Pro", color: "#353945"}}>Password</InputLabel>
                <OutlinedInput
                    required
                    hiddenLabel
                    variant="filled"
                    size="small"
                    type="password"
                    value={password}
                    placeholder="Enter your password"
                    onChange={e => setPassword(e.target.value)}
                    onKeyPress={e => {
                        if (e.key === "Enter") postLogIn(e)
                    }}
                    sx={{
                        mt: ".1em",
                        width: "95%",
                        backgroundColor: "#F4F5F6",
                        ".MuiOutlinedInput-notchedOutline": {
                            border: "none",
                        }
                    }}
                />
            </Box>
            {isError && <Typography color="red" sx={textStyle3}>The username or password provider were incorrect.</Typography>}
            <Box mt={'.5em'}>
                <SignInButton onClick={e => postLogIn(e)}>Next</SignInButton>
                {/* <Box 
                    sx={{display: 'flex', gap: '3px', alignItems: 'center', justifyContent: 'center', mt: '.25em'}}
                >
                    <Link href="/signup" underline="none" sx={textStyle3} color={palette.green} fontWeight={'10000'}>Click here</Link>
                    <Typography sx={textStyle3} color={palette.black}>to Sign up if you don’t have an account</Typography>
                </Box> */}
            </Box> 
        </Box>
    )
}
