import React, { useState } from 'react'
import { Box, Slide, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Typography, FormControl, Input, InputLabel, OutlinedInput} from '@mui/material';
import { ActionButton, ActionSubTitleStyled, ActionTitleStyled } from './MUIComponents';
import ProductInfoCards from './ProductInformation';
import ActionInfoInputs from './ActionInfoInputs';
import ActionSuccess from './ActionSuccess';

const ActionForm = (props) => {
    const [openSuccess, setOpenSuccess] = useState(false)

    function handleClose() {
        props.setOpen(false)
    }

    function handleSubmit() {
        handleClose()
        setOpenSuccess(true)
    }

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    return (
        <>
            <ActionSuccess data={props.data.success} open={openSuccess} setOpen={setOpenSuccess}/>
            <Dialog
                open={props.open}
                // TransitionComponent={Transition}
                // keepMounted
                onClose={handleClose}
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
                            <ActionInfoInputs data={props.data} i={props.i}/>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                        }}>
                            <Typography sx={ActionSubTitleStyled}>{props.data.subtitles[1]}</Typography>
                            <ProductInfoCards/>
                        </Box>
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{
                    '.MuiButtonBase-root': {
                        padding: '11px 24px',
                    }
                }}>
                    <ActionButton onClick={handleSubmit}>{props.data.button}</ActionButton>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default ActionForm