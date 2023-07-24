import React, { useState } from 'react'
import { Box, Divider, Grid } from '@mui/material'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ProductView from './ProductView';
import { useDispatch } from 'react-redux';
import dashboardSlide from '../redux/dashboardSlice'

const ProductInfoCards = () => {
    const dispatch = useDispatch()
    const [imageList, setImageList] = useState([])
    const [openImage, setOpenImage] = useState(false)
    function uploadProduct() {
        const fileInput = document.getElementById("file-input")
        fileInput.onchange = (event) => {
            const file = event.target.files[0]
            const url = URL.createObjectURL(file)
            setImageList([...imageList, url])
        }
        fileInput.click()
        dispatch(dashboardSlide.actions.addDataProductImage())
    }
    
    function viewProduct() {
        setOpenImage(true)
    }

    function deleteProduct(id) {
        imageList.splice(id, 1)
        setImageList([...imageList])
    }

    function Card({isProduct, id, image}) {
        return (
            <Grid item xs={4} sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                width: "163px",
            }}>
                <ProductView openImage={openImage} setOpenImage={setOpenImage} image={image}/>
                <Box 
                    sx={{
                        height: "165px",
                        borderRadius: "4px",
                        border: "1px dashed #E6E8EC",
                        background: "#FFF",
                        color: "#2BA84A",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "14px",
                        ":hover": {
                            cursor: isProduct? "" : "pointer"
                        }
                    }}
                    onClick={uploadProduct}
                >
                    {
                        isProduct?
                        <img 
                            id={id}
                            style={{width: "113.986px", height: "115.385px"}} 
                            src={image}
                        />
                        :
                        <>
                            <InsertPhotoIcon/>
                            Browse image...
                            <input 
                                style={{display:"none"}} 
                                id="file-input"
                                type="file" 
                                accept="image/*" 
                            />
                        </>
                    }
                </Box>
    
                <Box sx={{
                    height: "48px",
                    borderRadius: "4px",
                    border: "1px solid #EBEAED",
                    background: "#FFF",
                    display: 'flex',
                    alignItems: "center",
                    justifyContent: "space-evenly",
                }}>
                    {
                        isProduct? 
                        <>
                            <VisibilityOutlinedIcon 
                                sx={{
                                    ":hover": {
                                        cursor: "pointer"
                                    }
                                }}
                                onClick={viewProduct}
                            />
                            <Divider orientation="vertical" variant="middle" flexItem />
                            <DeleteOutlineOutlinedIcon 
                                sx={{
                                    color:"red",
                                    ":hover": {
                                        cursor: "pointer"
                                    }
                                }}
                                onClick={() => deleteProduct(id)}
                            />
                        </>
                        : 
                        <></>
                    }
                </Box>
            </Grid>
        )
    }

    return (
        <Grid id="product-container" container spacing={2}>
            {
                imageList.map((image, index) => <Card key={index} id={index} isProduct={true} image={image}/>)
            }
            <Card isProduct={false}/>
        </Grid>
    )
}

export default ProductInfoCards