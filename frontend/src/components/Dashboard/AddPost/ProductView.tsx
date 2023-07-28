import { Dialog, Zoom } from '@mui/material'
import React from 'react'
interface ProductViewProps {
    openImage: boolean
    setOpenImage: Function
    image: string
}

const ProductView: React.FC<ProductViewProps> = (props) => {
    function handleClose() {
        props.setOpenImage(false)
    }

    return (
        <Dialog
            open={props.openImage}
            onClose={handleClose}
            BackdropProps={{ invisible: true }}
        >
            <img style={{width: "25vw", height: "auto"}} src={props.image}/>
        </Dialog>
    )
}

export default ProductView