import { Dialog } from '@mui/material'
import React from 'react'

const ProductView = (props) => {
    function handleClose() {
        props.setOpenImage(false)
    }

    return (
        <Dialog
            open={props.openImage}
            onClose={handleClose}
        >
            <img
                style={{
                }} 
                src={props.image}/>
        </Dialog>
    )
}

export default ProductView