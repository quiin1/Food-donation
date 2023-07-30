import React, { useState } from 'react'
import { Box, Divider, Grid } from '@mui/material'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ProductView from './ProductView';

const ProductInfoCards: React.FC<any> = ({setSelectedFile, selectedFileURL, setSelectedFileURL}) => {
    const [image, setImage] = useState('')
    const [openImage, setOpenImage] = useState(false)
    function uploadProduct() {
        const fileInput = document.getElementById("file-input") as HTMLInputElement | null
        if (fileInput) {
            fileInput.onchange = (event) => {
                const target = event.target as HTMLInputElement
                if (target.files && target.files.length > 0) {
                    const file = target.files[0]
                    setSelectedFile(file)
                    const url = URL.createObjectURL(file)
                    setImage(url)
                }
            }
            fileInput.click()
        }
        else {
            console.error("File input element not found!");
        }
    }
    
    function viewProduct() {
        setOpenImage(true)
    }

    function deleteProduct() {
        setImage('')
        setSelectedFile(null)
        setSelectedFileURL('')
    }

    function Card({isProduct, image}: { isProduct: boolean; image: string }) {
        return (
            <Grid item xs={4} sx={{
                display: image=='' && isProduct == true ? 'none' : 'flex',
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
                            style={{width: "113.986px", height: "115.385px"}} 
                            src={selectedFileURL}
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
                                onClick={() => {
                                    deleteProduct()
                                }}
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
            <Card isProduct={true} image={image || selectedFileURL}/>
            <Card isProduct={false} image={""}/>
        </Grid>
    )
}

export default ProductInfoCards