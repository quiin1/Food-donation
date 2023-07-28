import React, { ReactNode, useState } from 'react'
import { Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import { ActionButton, ActionSubTitleStyled, ActionTitleStyled } from '../../StyleComponents/styles';

import ProductInfoCards from './ProductInformation';
import ActionSuccess from './ActionSuccess';

interface MyData {
    title: string
    subtitles: string[]
    inputs: any[]
    button: string
    success: any
}

interface ActionFormProps {
    open: boolean
    setOpen: Function
    data: MyData
    i: number
    children: ReactNode
    openSuccess: boolean
    setOpenSuccess: Function
    handleClose: Function 
    handleSubmit: Function 
    setSelectedFile: Function
    selectedFileURL: string
    setSelectedFileURL: Function
}

const ActionForm: React.FC<ActionFormProps> = (props) => {    
    // const Transition = React.forwardRef(function Transition(props, ref) {
    //     return <Slide direction="up" ref={ref} {...props} />;
    // });

    return (
        <>
            <ActionSuccess data={props.data.success} open={props.openSuccess} setOpen={props.setOpenSuccess}/>
            <Dialog
                open={props.open}
                // TransitionComponent={Transition}
                // keepMounted
                onClose={props.handleClose as any}
                aria-describedby="alert-dialog-slide-description"
                sx={{
                    "& .MuiDialog-paper": {
                        padding: "1.2em",
                        width: '40em',
                        "& *": {
                            padding: 0
                        }
                    }
                }}
            >
                <DialogTitle sx={ActionTitleStyled}>{props.data.title}</DialogTitle>
                <Divider sx={{borderStyle:'dashed', marginY: "1.0em"}}/>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description" sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '28px',
                        marginBottom: '40px'
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                        }}>
                            {props.children}
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                        }}>
                            <Typography sx={ActionSubTitleStyled}>{props.data.subtitles[1]}</Typography>
                            <ProductInfoCards setSelectedFile={props.setSelectedFile} selectedFileURL={props.selectedFileURL} setSelectedFileURL={props.setSelectedFileURL} />
                        </Box>
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{
                    '.MuiButtonBase-root': {
                        padding: '11px 24px',
                    }
                }}>
                    <ActionButton onClick={props.handleSubmit as any}>{props.data.button}</ActionButton>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default ActionForm