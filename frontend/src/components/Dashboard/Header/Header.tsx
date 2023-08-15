import React, { useEffect } from 'react'
import { Box } from "@mui/material"
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import Cookies from 'js-cookie';
import dashboardSlice from '../../../redux/dashboardSlice';
import { LOGOUT } from '../../../until/constants';

import SearchBar from './SearchBar';
import MyAvatar from './MyAvatar';

const Header: React.FC = () => {
    const dispatch = useDispatch()
    const { enqueueSnackbar } = useSnackbar()

    useEffect(()=> {
        const isAuthorized = Cookies.get('access_token')
        if (!isAuthorized || isAuthorized === "undefined") {
            handleLogout(false)
        }
    }, [Cookies.get('access_token')])

    function handleLogout(isAlarm: boolean = true) {
        dispatch(dashboardSlice.actions.changeAuthenticated(LOGOUT))
        dispatch(dashboardSlice.actions.changeSubpage(LOGOUT))
        isAlarm ? enqueueSnackbar('Logout successfully!', {variant: "info"}) : <></>
        Cookies.remove('access_token');
        /** 
         * remove current username in localStorage 
         * */
        localStorage.removeItem("username")
    }

    return (
        <Box className="navTop" bgcolor="#FCFCFD" sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                border: "1px solid #F4F5F6",
                padding: ".5em 1em .5em .5em",
                position: "fixed",
                zIndex: "10",
                right: 0,
                width: "84%",
                height: "8vh"
            }}>
            <SearchBar/>
            <MyAvatar handleLogout={handleLogout}/>
        </Box>
    )
}

export default Header