import { React, useState } from 'react'
import { Box, Typography, InputLabel, OutlinedInput } from '@mui/material'
import { useSnackbar } from 'notistack';
import { SignInButton } from './MUIComponents'
import { textStyle3 } from '../theme'
import { useDispatch, useSelector } from 'react-redux'
import dashboardSlice from '../redux/dashboardSlice'
import * as login from '../until/constants'
import { accountsSelector } from '../redux/selectors'

export const LoginForm = () => {
    const dispatch = useDispatch()
    const { enqueueSnackbar } = useSnackbar()
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState(false);
    const data = useSelector(accountsSelector)

    function postLogIn(e) {
        e.preventDefault();
        if (data.some(account => account.username === username && account.password === password)) {
            setIsError(false)
            dispatch(dashboardSlice.actions.changeAuthenticated(login.LOGIN_SUCCESSFULLY))
            dispatch(dashboardSlice.actions.changeSubpage(login.LOGIN_SUCCESSFULLY))
            enqueueSnackbar('Login successfully!', {variant: "success"});
        }
        else {
            setIsError(true)
        }
    }

    return (
        <Box mt='.7em' pr='.5em' display={'flex'} flexDirection={'column'} gap={'.5em'}>
            <Box>
                <InputLabel sx={{fontFamily: "Roboto", color: "#353945"}}>Username</InputLabel>
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
