import React from 'react'
import { Typography } from '@mui/material'
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material'
import { ActionButton } from '../../MUIComponents';
import successImage from '../../../assets/dashboard/givingtuesday-movement.png';

interface ActionSuccessProps {
    open: boolean
    setOpen: Function
    data: {
        title: string
        subtitles: string[]
        inputs: {
            label: string 
            type: string 
            width: string 
            optionList: string[]
        }[]
        button: string
        success: {
            title: string
            content: string
            button: string
        }
    }
}

const ActionSuccess: React.FC<ActionSuccessProps> = (props) => {
    function handleClose() {
        props.setOpen(false)
    }

    return (
        <Dialog
            open={props.open}
            // TransitionComponent={Transition}
            // keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',

                "& .MuiDialog-paper": {
                    padding: "40px",
                    width: '40em',
                    "& *": {
                        padding: 0
                    }
                }
            }}
        >
            <DialogTitle sx={{
                color: "#2BA84A",
                fontSize: "24px",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "32px"
            }}>
                {props.data.title}
            </DialogTitle>
            <DialogContent sx={{
            }}>
                <DialogContentText id="alert-dialog-slide-description" sx={{
                    marginBottom: '24px',
                    color: "#141416",
                    fontSize: "16px",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "150%"
                }}>
                    <Typography mt=".5em" mb="32px">{props.data.success.content}</Typography>
                    <img src={successImage} alt="successfully"/>
                </DialogContentText>
                <DialogActions sx={{
                    '.MuiButtonBase-root': {
                        padding: '11px 24px',
                    }
                }}>
                    <ActionButton onClick={handleClose}>{props.data.button}</ActionButton>
                </DialogActions>
            </DialogContent>
        </Dialog>
    )
}

export default ActionSuccess