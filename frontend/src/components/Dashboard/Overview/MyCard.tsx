import React, { ReactNode } from 'react'
import { Card, CardActions, CardContent, Typography, Grid } from '@mui/material'
import { CardButton } from '../../StyleComponents/styles'

interface MyCardProps {
    children: ReactNode
    title: string
    content: string
    handleOpen: Function
    btnName: string
}

const MyCard: React.FC<MyCardProps> = (props) => {
  return (
    <Grid item xs={12} md={6} sx={{"*": {padding:"0 !important"}}}>
        <Card sx={{
            borderRadius: "4px",
            border: "1px solid #EBEAED",
            background: "#FFF",
            padding: "24px 24px 15px 24px !important"
        }}>
            <CardContent>
                <div style={{marginBottom:"16px"}}>{props.children}</div>
                <Typography sx={{
                    fontFamily: 'Inter',
                    color: '#141416',
                    fontWeight: 600,
                    fontSize: 20,
                }}>
                    {props.title}
                </Typography>
                <Typography sx={{
                    fontWeight: '400',
                    fontSize: '.8em',
                }}>
                    {props.content}
                </Typography>
            </CardContent>
            <CardActions sx={{mt:"22px"}}>
                <CardButton onClick={() => props.handleOpen()}>{props.btnName}</CardButton>
            </CardActions>
        </Card>
    </Grid>
  )
}

export default MyCard