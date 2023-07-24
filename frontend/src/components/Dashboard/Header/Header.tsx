import React from 'react'
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

    function handleLogout() {
        dispatch(dashboardSlice.actions.changeAuthenticated(LOGOUT))
        dispatch(dashboardSlice.actions.changeSubpage(LOGOUT))
        enqueueSnackbar('Logout successfully!', {variant: "info"});
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
            padding: ".5em",
            }}>
            <SearchBar/>
            <MyAvatar handleLogout={handleLogout}/>
        </Box>
    )
}

export default Header