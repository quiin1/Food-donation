import React from 'react'
import { Box, Typography } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { PostButton } from '../../StyleComponents/styles'

import { useSelector } from 'react-redux';
import { dataSelector } from '../../../redux/selectors';
import { subpageIndexSelector } from '../../../redux/selectors';

interface TableProps {
    columns: GridColDef[]
    rows: any
    handleOpen: Function
    initialPageLimit: number
}

const Table: React.FC<TableProps> = (props) => {
    const columns = props.columns || []
    const rows = props.rows || []

    let data = useSelector(dataSelector)
    let pageIndex = useSelector(subpageIndexSelector)

    return (
        <Box>
            <Box display="flex" justifyContent="space-between">
                <Typography sx={{
                    color: "#2E2C34", 
                    fontFamily: "Inter", 
                    fontWeight: "600",
                    fontSize: "1.5em"
                }}>
                    {data[pageIndex].title}
                </Typography>
                <PostButton onClick={props.handleOpen as any}>{data[pageIndex].action}</PostButton>
            </Box>
            <Box mt="1.3em" bgcolor="white" sx={{width: "100%"}}>
                <DataGrid
                    columns={columns}
                    rows={rows}
                    disableRowSelectionOnClick
                    getRowId={(row) => row.id}
                    hideFooterPagination={false}
                    initialState={{
                        pagination: {
                            paginationModel: { pageSize: props.initialPageLimit },
                        },
                    }}
                    pagination={true}
                    pageSizeOptions={[3, 5, 8, 13, 21]}
                    sx={{
                        width: "100%",
                        "& .MuiDataGrid-columnHeaders > *": {
                            color: "#141416",
                            fontSize: "12px",
                            fontFamily: "Inter",
                            fontWeight: "600 !important",
                            lineHeight: "18px",
                        },
                        "& .MuiDataGrid-main": {
                            px: "1em",
                            paddingBottom: "0.3em"
                        },
                        "& *": {
                            fontSize: "14px",
                            fontWeight: 200,
                            lineHeight: "20px"
                        },
                    }}
                />
            </Box>
        </Box>
    )
}

export default Table

