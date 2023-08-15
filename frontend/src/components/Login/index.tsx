import React, { useState } from 'react'
import { Box, Typography, InputLabel, OutlinedInput } from '@mui/material'
import { useSnackbar } from 'notistack';
import { textStyle3 } from '../../theme'
import dashboardSlice from '../../redux/dashboardSlice'
import { LOGIN_SUCCESSFULLY } from '../../until/constants'
import { SignInButton } from '../StyleComponents/styles'
import { useDispatch, useSelector } from 'react-redux'
import { accountsSelector } from '../../redux/selectors'
import axios, { api } from '../../api'
import Cookies from 'js-cookie';
import axiosInstance from '../../api';

const Login: React.FC = () => {
    const dispatch = useDispatch()
    const { enqueueSnackbar } = useSnackbar()
    
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState(false);
    const data = useSelector(accountsSelector)

    function capitalizeFirstLetter(str: string) {
        if (typeof str !== "string" || str.length === 0) {
          return str; // Return the input if it's not a string or an empty string
        }
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    async function postLogIn(e: any) {
        e.preventDefault();
        // line comment below: check registed account at frontend 
        // if (data.some((account: { username: string; password: string; }) => account.username === username && account.password === password))
        try {
            await axiosInstance.post(api.LOGIN, { name: username, password })
                .then(({data}) => {
                    // console.log("response", data)
                    
                    const token = data.token
                    /**
                     * Lưu token vào cookie với tên 'access_token' và thời gian tồn tại là 5 phút
                     *  */ 
                    const expirationTimeInDays = 1
                    Cookies.set('access_token', token, { expires: expirationTimeInDays });

                    dispatch(dashboardSlice.actions.changeAuthenticated(LOGIN_SUCCESSFULLY))
                    dispatch(dashboardSlice.actions.changeSubpage(LOGIN_SUCCESSFULLY))
                    enqueueSnackbar('Login successfully!', {variant: "success"});
                    setIsError(false)

                    /** 
                     * save current username in localStorage 
                     * */
                    localStorage.setItem("username", capitalizeFirstLetter(username))
                    localStorage.setItem("role", data.role)
                })
        } catch (error) {
            console.log("error", error)
            setIsError(true)
        }
    }

    return (
        <Box mt='.7em' pr='.5em' display={'flex'} flexDirection={'column'} gap={'.5em'}>
            <Box>
                <InputLabel sx={{fontFamily: "Roboto", color: "#353945"}}>Username</InputLabel>
                <OutlinedInput
                    required
                    // hiddenlabel="true"
                    // variant="filled"
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
                    // hiddenlabel="true"
                    // variant="filled"
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

export default Login