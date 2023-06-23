import React from 'react'
import { Box, Typography, Divider} from '@mui/material'
import PlaceIcon from '@mui/icons-material/Place';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import DescriptionIcon from '@mui/icons-material/Description';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import MyCard from '../components/MyCard';

const Overview = () => {
  return (
    <Box>
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
        <Box display="flex" flexWrap="wrap" gap="2em" mt="2em" >
            <MyCard 
                title="Add a new post"
                content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. "
                btnName="New post"
                >
                <ViewComfyIcon/>
            </MyCard>
            <MyCard 
                title="Add a new location to the application map"
                content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. "
                btnName="Add location"
            >
                <DescriptionIcon/>
            </MyCard>
            <MyCard 
                title="Add new rewards and vouchers"
                content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. "
                btnName="Add reward"
            >
                <PlaceIcon/>
            </MyCard>
            <MyCard 
                title="Update the amount of used money for donations"
                content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. "
                btnName="Add new payment record"
            >
                <VolunteerActivismIcon/>
            </MyCard>
        </Box>
    </Box>
  )
}

export default Overview