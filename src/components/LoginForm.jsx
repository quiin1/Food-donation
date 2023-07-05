import { React, useState, useEffect } from 'react'
import { Box, Typography, InputLabel, OutlinedInput } from '@mui/material'
import { Navigate, useNavigate } from "react-router-dom"
import { SignInButton } from './MUIComponents'
import { textStyle3 } from '../theme'
import { useDispatch, useSelector } from 'react-redux'
import dashboardSlice from '../redux/dashboardSlice'
import { LOGIN } from '../constants/login'
import { accountsSelector } from '../redux/selectors'


export const LoginForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const data = useSelector(accountsSelector)
    console.log(data)

    function postLogIn(e) {
        e.preventDefault();
        // console.log(username, password);
        // console.log(data);
        if (data.some(account => account.username === username && account.password === password)) {
            // console.log("Successfully logged in");
            setIsSuccess(true)
            setIsError(false)
            dispatch(dashboardSlice.actions.changeAuthenticated(LOGIN))
            dispatch(dashboardSlice.actions.changeSubpage(LOGIN))
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
        <Box mt='.7em' pr='.5em' display={'flex'} flexDirection={'column'} gap={'.5em'}>
            <Box>
                <InputLabel sx={{fontFamily: "Roboto", color: "#353945"}}>Username</InputLabel>
                <OutlinedInput
                    required
                    // hiddenLabel
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
                <InputLabel sx={{fontFamily: "Roboto", color: "#353945"}}>Password</InputLabel>
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
            </Box> 
        </Box>
    )
}
