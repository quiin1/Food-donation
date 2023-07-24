import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Divider, Grid } from '@mui/material'
import PlaceIcon from '@mui/icons-material/Place';

import MyCard from '../../components/Dashboard/Overview/MyCard'
import ActionForm from '../../components/Dashboard/AddPost/ActionForm';

import dashboardSlice from '../../redux/dashboardSlice';
import * as dashboard from '../../until/constants';
import { dataSelector } from '../../redux/selectors';
import { subpageIndexSelector } from '../../redux/selectors';

const Overview: React.FC = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    let data = useSelector(dataSelector)
    const [formIndex, setFormIndex] = useState(1)

    const [open, setOpen] = useState(false)
    const handleOpen = (id: number) => { 
        // switch(id) {
        //     case 1: 
        //     case 2: 
        //     case 3: 
        //     case 4: 
        //         dispatch(dashboardSlice.actions.changeSubpage(dashboard.listNavItems[id].title))
        //         break
        //     default:
        //         dispatch(dashboardSlice.actions.changeSubpage("Overview"))
        // }
        if (id > 0 && id < 4) setFormIndex(id)
        setOpen(true)
    }

    const handleNavigate = (id: number) => { 
        switch(id) {
            case 1: 
            case 2: 
            case 3: 
            case 4: 
                dispatch(dashboardSlice.actions.changeSubpage(dashboard.listNavItems[id].title))
                navigate(dashboard.listNavItems[id].path)
                break
            default:
                dispatch(dashboardSlice.actions.changeSubpage("Overview"))
        }
    }
    const cardData = [
        {
            id: 1,
            title: "Add a new post",
            content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
            btnName: "New post",
            img: dashboard.listNavItems[1].img
        },
        {
            id: 2,
            title: "Add a new location to the application map",
            content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
            btnName: "Add location",
            img: dashboard.listNavItems[2].img
        },
        {
            id: 3,
            title: "Add new rewards and vouchers",
            content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
            btnName: "Add reward",
            img: dashboard.listNavItems[3].img
        },
        {
            id: 4,
            title: "Update the amount of used money for donations",
            content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
            btnName: "Add new payment record",
            img: dashboard.listNavItems[4].img
        },
    ]

    return (
        <Box>
            <ActionForm open={open} setOpen={setOpen} data={data[formIndex].actionForm} i={formIndex}/>
            
            <Typography sx={{
                color: "#141416",
                fontWeight: "600",
                fontSize: "1.5em"  
            }}>
                Welcome back, {localStorage.getItem("username")}
            </Typography>
            <Box className="description" display="flex" sx={{margin: ".8em 0 1em 0"}}>
                <PlaceIcon sx={{
                    color: "#2BA84A",
                    mr: ".2em"
                }}/>
                <Typography>South Austraa(SA), 5583</Typography>
            </Box>
            <Divider/>
            <Grid container spacing={4} mt=".3em">
                {cardData.map(item => (
                    <MyCard 
                        key={item.title}
                        title={item.title}
                        content={item.content}
                        btnName={item.btnName}
                        // handleOpen={() => handleNavigate(item.id)}
                        handleOpen={() => handleOpen(item.id)}
                    >
                        <img style={{width:"2em", filter: "invert(58%) sepia(22%) saturate(1478%) hue-rotate(82deg) brightness(87%) contrast(85%)"}} src={item.img}/>
                    </MyCard>
                ))}
            </Grid>
        </Box>
    )
}

export default Overview