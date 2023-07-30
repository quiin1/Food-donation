import React from 'react'
import { Box, Typography } from '@mui/material'
import { DataGrid, GridColDef, GridPaginationModel } from '@mui/x-data-grid';

import { PostButton } from '../../StyleComponents/styles'

import { useSelector } from 'react-redux';
import { dataSelector } from '../../../redux/selectors';
import { subpageIndexSelector } from '../../../redux/selectors';

interface TableProps {
    columns: GridColDef[]
    rows: any
    handleOpenActionForm: Function
    loading: boolean
    totalRows: number
    paginationModel: GridPaginationModel
    setPaginationModel: Function
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
                <PostButton onClick={props.handleOpenActionForm as any}>{data[pageIndex].action}</PostButton>
            </Box>
            <Box mt="1.3em" bgcolor="white" width={{xs: "90vw", sm: "65vw", md: "75vw", lg: "80vw"}}>
                <DataGrid
                    columns={columns}
                    rows={rows}
                    autoHeight
                    disableRowSelectionOnClick
                    pagination                    
                    pageSizeOptions={[5, 8, 10, 25]}
                    paginationMode="server"
                    loading={props.loading}
                    rowCount={props.totalRows}
                    paginationModel={props.paginationModel}
                    onPaginationModelChange={(newPaginationModel) => props.setPaginationModel({...newPaginationModel, page: newPaginationModel.page + 1})} 
                />
            </Box>
        </Box>
    )
}

export default Table

