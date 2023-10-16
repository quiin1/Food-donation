import React, { useState } from 'react'
import { Box, OutlinedInput, Typography, InputLabel } from '@mui/material'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { SignInButton } from '../StyleComponents/styles'
import { textStyle3 } from '../../theme'
import { LOGIN } from '../../until/constants'
import loginSlice from '../../redux/loginSlice'
import { accountsSelector } from '../../redux/selectors'
import { api } from '../../api'
import axiosInstance from '../../api'
import { enqueueSnackbar } from 'notistack'

const Signup: React.FC = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCf, setPasswordCf] = useState("");
    const data = useSelector(accountsSelector)

    async function postSignup() {
        if (userName==='' || password === '' || passwordCf === '') {
            setIsError(true)
            setMessage("Please enter all required fields")
        }
        else if (data && data.some((account: { username: string }) => account.username === userName)) {
            setIsError(true)
            setMessage("This username has already been registered")
        }
        else if (password !== passwordCf) {
            setIsError(true)
            setMessage("Your password or password confirmation is invalid")
        }
        else if (password && password === passwordCf) {
            setIsError(false)
            dispatch(loginSlice.actions.changeStatus(LOGIN))
            dispatch(loginSlice.actions.signUp({"username": userName, "password": password}))

            try {
                await axiosInstance.post(api.SIGNUP, { name: userName, password })
                    .then(({data}) => {
                        console.log(data.newUser)
                    })
            } catch (error) {
                console.log(error)
            }
            
            enqueueSnackbar('Sign up successfully!', {variant: "success"});
            navigate("/")
        }
    }
    return (
        <Box mt='.5em' pr='.5em' display={'flex'} flexDirection={'column'} gap={'.5em'}>
            <Box>
                <InputLabel sx={{fontFamily: "Roboto", color: "#353945"}}>Username</InputLabel>
                <OutlinedInput
                    required
                    // hiddenlabel="true"
                    // variant="filled"
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
                    // hiddenlabel="true"
                    // variant="filled"
                    className="outlined-password-input"
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
                    // hiddenlabel="true"
                    // variant="filled"
                    className="outlined-password-input"
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

export default Signup