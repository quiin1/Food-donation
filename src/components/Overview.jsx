import React, { useState } from 'react'
import { Box, Typography, Divider, Grid } from '@mui/material'
import PlaceIcon from '@mui/icons-material/Place';
import MyCard from '../components/MyCard';
import ActionForm from './ActionForm';

const Overview = (props) => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => { 
        setOpen(true)
    }
    const data = [
        {
            title: "Add a new post",
            content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
            btnName: "New post",
            img: props.data[1].img
        },
        {
            title: "Add a new location to the application map",
            content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
            btnName: "Add location",
            img: props.data[2].img
        },
        {
            title: "Add new rewards and vouchers",
            content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
            btnName: "Add reward",
            img: props.data[3].img
        },
        {
            title: "Update the amount of used money for donations",
            content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
            btnName: "Add new payment record",
            img: props.data[4].img
        },
    ]
  return (
    <Box>
        {/* <ActionForm open={open} setOpen={setOpen} data={data[pageIndex].actionForm} i={pageIndex}/> */}
        <Typography sx={{
            color: "#141416",
            fontWeight: "600",
            fontSize: "1.5em"  
        }}>
            Welcome back, Milly Nguyen
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
            {data.map(item => (
                <MyCard 
                    title={item.title}
                    content={item.content}
                    btnName={item.btnName}
                    handleOpen={handleOpen}
                >
                    <img style={{width:"2em", filter: "invert(58%) sepia(22%) saturate(1478%) hue-rotate(82deg) brightness(87%) contrast(85%)"}} src={item.img}/>
                </MyCard>
            ))}
        </Grid>
    </Box>
  )
}

export default Overview