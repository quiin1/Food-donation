import React from 'react'
import { Card, CardActions, CardContent, Typography } from '@mui/material'
import { CardButton } from '../components/MUIComponents'

const MyCard = (props) => {
  return (
    <Card sx={{
        maxWidth: '48%', //md
        // maxWidth: '90%' //xs
    }}>
        <CardContent>
            <div sx={{color: "#2BA84A", width: "3em"}}>{props.children}</div>
            <Typography sx={{
                fontFamily: 'SF Pro',
                color: '#141416',
                fontWeight: 600,
                fontSize: 20,
            }}>{props.title}</Typography>
            <Typography sx={{
                fontWeight: '400',
                fontSize: '.8em',
            }}>{props.content}</Typography>
        </CardContent>
        <CardActions>
            <CardButton>{props.btnName}</CardButton>
        </CardActions>
    </Card>
  )
}

export default MyCard