import React, { useState } from 'react'
import { Box, Typography, Pagination } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import { PostButton } from './MUIComponents'
import Overview from './Overview';
import IconEye from '../assets/fi-sr-eye.svg'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ActionForm from './ActionForm';
import { useSelector } from 'react-redux';
import { dataSelector } from '../redux/selectors';

const Content = (props) => {
    const data = useSelector(dataSelector)
    console.log(data)
    let pageIndex = data.findIndex((item) => item.state === props.state)
    
    const [open, setOpen] = useState(false)
    const handleOpen = () => { 
        setOpen(true)
    }

    if (!pageIndex) return <Overview data={data}/>
    else {
        let postsNum = data[pageIndex].rows.length
        return (
            <Box>
                <ActionForm open={open} setOpen={setOpen} data={data[pageIndex].actionForm} i={pageIndex}/>
                <Box display="flex" justifyContent="space-between">
                    <Typography sx={{
                        color: "#2E2C34", 
                        fontFamily: "Inter", 
                        fontWeight: "600",
                        fontSize: "1.5em"
                    }}>
                        {data[pageIndex].title}
                    </Typography>
                    <PostButton onClick={handleOpen}>{data[pageIndex].action}</PostButton>
                </Box>
                <Box mt="1.3em" bgcolor="white">
                    <DataGrid
                        rows={data[pageIndex].rows || ''}
                        columns={data[pageIndex].columns || ''}
                        disableRowSelectionOnClick
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 8,
                                },
                            },
                        }}
                        hideFooterPagination={true}
                        sx={{
                            "& .MuiDataGrid-columnHeaders > *": {
                                color: "#141416",
                                fontSize: "12px",
                                fontFamily: "Inter",
                                fontWeight: "600 !important",
                                lineHeight: "18px",
                            },
                            "& .MuiDataGrid-main": {
                                px: "1em",
                                paddingBottom: "1em"
                            },
                            "& .MuiDataGrid-footerContainer": {
                                display: "none"
                            },
                            "& *": {
                                fontSize: "14px",
                                fontWeight: 200,
                                lineHeight: "20px"
                            },
                        }}
                    />
                </Box>
                <Box
                    mt=".5em"
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Typography sx={{
                        color: "#84818A",
                        fontSize: "12px",
                        fontFamily: 'Inter',
                        fontWeight: 500,
                        lineHeight: "18px",
                    }}>
                        {`Show ${postsNum < 8 ? postsNum : 8} from ${postsNum} posts`}
                    </Typography>
                    <Pagination 
                        count={postsNum} 
                        shape="rounded" 
                        size="small"
                        sx={{
                            "& *": {
                                color: "#84818A",
                                textAlign: "center",
                                fontSize: "12px",
                                fontFamily: "Inter",
                                fontWeight: 600,
                                lineHeight: "11px",
                            },
                            ".Mui-selected": {
                                color: "#2BA84A",
                                backgroundColor: "#D5EEDB"
                            }
                        }}
                    />
                </Box>
            </Box>
        )
    }
}

export default Content

