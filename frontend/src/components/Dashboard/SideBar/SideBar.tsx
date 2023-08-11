import React from 'react'
import { useDispatch } from 'react-redux';
import { Box, CardMedia, Typography, List, Divider } from "@mui/material"
import { palette } from '../../../theme'
import logo from '../../../assets/logo/logo.png'
import { listNavItems } from '../../../until/constants';
import NavItem from './NavItem'
import dashboardSlice from '../../../redux/dashboardSlice';
import { useLocation, useNavigate } from 'react-router-dom';

const SideBar: React.FC = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    const subpage = location.pathname

    function handleChangeSubpage(title: string, index: number) {
        switch (index) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                navigate(listNavItems[index].path)
                break
            default:
                navigate("/dashboard")
        }
        dispatch(dashboardSlice.actions.changeSubpage(title));
    }

    return (
        <Box className="navLeft" flex={1} height="100vh" bgcolor="#FCFCFD" borderRight={"1px solid #F4F5F6"}
            // display={{xs: "none", sm: "block"}}
            sx={{
                position: "fixed",
                zIndex: "10",
                width: "16%"
            }}
        >
            <Box display="flex" mt="1em" justifyContent={"center"} alignItems={"center"}
                // sx={{flexDirection: {xs: "column", md: "row"}}}
            >
                <CardMedia component="img" src={logo} sx={{ width: "45px" }} />
                <Typography sx={{
                    fontFamily: "Inter",
                    fontWeight: "800",
                    fontSize: "1.2em",
                    color: palette.green,
                    display: {xs: "none", md: "block"},
                }} ml=".4em">Startnow</Typography>
            </Box>
            <List sx={{ margin: "2em 0"}}>
                {listNavItems.map((item, index) => (
                    <NavItem id={index} key={index} title={item.title} 
                        onClick={() => handleChangeSubpage(item.title, index)}
                        className={subpage === item.path ? "chosen" : ""}
                    >
                        <CardMedia sx={{width: "22px"}} component="img" src={item.img}/>
                    </NavItem>
                ))}
            </List>
        </Box>
    )
}

export default SideBar