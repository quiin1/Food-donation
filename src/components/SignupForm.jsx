import { React, useState } from 'react'
import { Box, OutlinedInput, Typography, InputLabel } from '@mui/material'
import { Navigate } from "react-router-dom"
import { SignInButton } from './MUIComponents'
import { textStyle3 } from '../theme'


export const SignupForm = () => {
    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCf, setPasswordCf] = useState("");
    const data =JSON.parse(localStorage.getItem('accounts'))

    function postSignup() {
        console.log(data)
        console.log(userName, password, passwordCf)

        if (userName==='' || password === '' || passwordCf === '') {
            setIsError(true)
            setMessage("Please enter all required fields")
        }
        else if (data && data.some(account => account.username === userName)) {
            setIsError(true)
            setMessage("This username has already been registered")
        }
        else if (password !== passwordCf) {
            setIsError(true)
            setMessage("Your password or password confirmation is invalid")
        }
        else if (password && password === passwordCf) {
            setIsError(false)
            setIsSuccess(true)
            if (data) {
                data.push({"username": userName, "password": password})
            }
            console.log(data)
            localStorage.setItem('accounts', JSON.stringify(data))
        }
    }

    if (isSuccess) {
        return <Navigate to={"/"}/>
    }

    return (
        <Box mt='.5em' pr='.5em' display={'flex'} flexDirection={'column'} gap={'.5em'}>
            <Box>
                <InputLabel sx={{fontFamily: "Roboto", color: "#353945"}}>Username</InputLabel>
                <OutlinedInput
                    required
                    hiddenLabel
                    variant="filled"
                    size="small"
                    type="text"
                    value={userName}
                    placeholder="Enter your user name"
                    onChange={e => setUserName(e.target.value)}
                    onKeyPress={e => {
                        if (e.key === "Enter") postSignup()
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
                <InputLabel sx={{fontFamily: "Roboto", color: "#353945"}}>Password</InputLabel>
                <OutlinedInput
                    required
                    hiddenLabel
                    className="outlined-password-input"
                    variant="filled"
                    size="small"
                    type="password"
                    value={password}
                    placeholder="Enter your password"
                    onChange={e => setPassword(e.target.value)}
                    onKeyPress={e => {
                        if (e.key === "Enter") postSignup()
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
                <InputLabel sx={{fontFamily: "Roboto", color: "#353945"}}>Confirm your password</InputLabel>
                <OutlinedInput
                    required
                    hiddenLabel
                    className="outlined-password-input"
                    variant="filled"
                    size="small"
                    type="password"
                    value={passwordCf}
                    placeholder="Enter your password again"
                    onChange={e => setPasswordCf(e.target.value)}
                    onKeyPress={e => {
                        if (e.key === "Enter") postSignup()
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
            {isError && <Typography color="red" sx={textStyle3}>{message}</Typography>}
            <Box mt={'.3em'}>
                <SignInButton onClick={postSignup}>Next</SignInButton>
            </Box> 
        </Box>
  )
}

