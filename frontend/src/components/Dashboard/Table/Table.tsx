import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { DataGrid, GridColDef, GridFilterModel, GridPaginationModel, GridRowId, GridSortModel } from '@mui/x-data-grid';

import { PostButton } from '../../StyleComponents/styles'

import { useSelector } from 'react-redux';
import { dataSelector } from '../../../redux/selectors';
import { subpageIndexSelector } from '../../../redux/selectors';

interface TableProps {
    columns: GridColDef[]
    rows: any
    totalRows: number
    handleOpen: Function
    loading: boolean
    initialPageLimit: number
    paginationModel: GridPaginationModel
    // onPaginationModelChange: (model: GridPaginationModel) => void
}
interface PageInfo {
    totalRowCount?: number;
    nextCursor?: string;
    pageSize?: number;
}

interface QueryOptions {
    cursor?: GridRowId;
    page?: number;
    pageSize?: number;
    filterModel?: GridFilterModel;
    sortModel?: GridSortModel;
    firstRowToRender?: number;
    lastRowToRender?: number;
}

const Table: React.FC<TableProps> = (props) => {
    const columns = props.columns || []
    const rows = props.rows || []

    let data = useSelector(dataSelector)
    let pageIndex = useSelector(subpageIndexSelector)

    const mapPageToNextCursor = useRef<any>({});
    const [paginationModel, setPaginationModel] = useState({
        page: 1,
        pageSize: props.initialPageLimit,
    });
    const queryOptions = useMemo(() => ({
        cursor: mapPageToNextCursor.current[paginationModel.page - 1],
        pageSize: paginationModel.pageSize,
    }),[paginationModel]);
    // const useQuery = (queryOptions: QueryOptions) => {
    //     pageInfo: PageInfo;
    //     rows: GridValidRowModel[];
    //     isLoading: boolean;
    // }
    // const { isLoading, rows, pageInfo } = useQuery(queryOptions);
    const pageInfo = {
        totalRowCount: props.totalRows,
        nextCursor: queryOptions.cursor,
        pageSize: queryOptions.pageSize
    }

    const handlePaginationModelChange = (newPaginationModel: GridPaginationModel) => {
        if (
            newPaginationModel.page === 0 ||
            mapPageToNextCursor.current[newPaginationModel.page - 1]
        ) {
        setPaginationModel(newPaginationModel);
        }
    }
    useEffect(() => {
        if (!props.loading && pageInfo?.nextCursor) {
          // We add nextCursor when available
          mapPageToNextCursor.current[paginationModel.page] = pageInfo?.nextCursor;
        }
    }, [paginationModel.page, props.loading, pageInfo?.nextCursor]);

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
            <Box mt="1.3em" bgcolor="white" width={{xs: "90vw", sm: "65vw", md: "75vw", lg: "80vw"}}>
                <DataGrid
                    autoHeight
                    autoPageSize={false}
                    columns={columns}
                    rows={rows}
                    disableRowSelectionOnClick
                    // getRowId={(row) => row.id}
                    initialState={{
                        pagination: {
                            paginationModel: { pageSize: props.initialPageLimit },
                        },
                    }}
                    pagination={true}
                    pageSizeOptions={[3, 5, 8, 13, 21, 100]}
                    // rowCount={props.totalRows}
                    // paginationMode="server"
                    // onPaginationModelChange={handlePaginationModelChange}
                    // paginationModel={paginationModel}
                    // loading={props.loading}
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

