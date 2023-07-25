import React, { useEffect, useState } from 'react'
import { Box, Typography, Pagination } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { PostButton } from '../../StyleComponents/styles'
import Overview from '../../../subpages/Dashboard/Overview';

import { useSelector } from 'react-redux';
import { dataSelector } from '../../../redux/selectors';
import { subpageSelector } from '../../../redux/selectors';
import { subpageIndexSelector } from '../../../redux/selectors';

interface TableProps {
    columns: GridColDef[]
    rows: any
    handleOpen: Function
}

interface GridPaginationModel {
    page: number;
    pageSize: number;
  }

const Table: React.FC<TableProps> = (props) => {
    const columns = props.columns || []
    const rows = props.rows || []

    let data = useSelector(dataSelector)
    let subpage = useSelector(subpageSelector)
    let pageIndex = useSelector(subpageIndexSelector)

    const [page, setPage] = useState(1)
    const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
        page: 1,
        pageSize: 8
    })
    useEffect(() => {
        setPaginationModel({
            page: page-1,
            pageSize: 8,
        })
    }, [page])

    // *** pagination ***
    const [totalRows, setTotalRows] = useState(0)
    const [totalPages, setTotalPages] = useState(1)
    useEffect(() => {
        // console.log("totalRows", totalRows)
        // console.log("totalPages", totalPages)
        
        // reduce 1 totalPages
        let length = rows.length // data[pageIndex].rows.length //newTotalRows
        if (length <= (totalPages - 1) * 8 ) {
            setPage(totalPages-1)
        }
        // add data from 0 to 1 row
        if (length > 0 && page === 0) {
            setPage(1)
        }
        setTotalRows(length)
        setTotalPages(Math.ceil(length/8))
    }, [data[pageIndex]])

    const handleChange = (event: React.ChangeEvent<unknown>) => {
        const target = event.target as HTMLButtonElement;
        // console.log("page", target.textContent)
        let newPage = parseInt(target.innerText)
        setPage(newPage)
    }

    
    if (subpage === "Overview") return <Overview />
    // console.log(totalRows)
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
            <Box mt="1.3em" bgcolor="white">
                <DataGrid
                    columns={columns}
                    // rows={data[pageIndex].rows}
                    rows={rows}
                    disableRowSelectionOnClick
                    paginationModel={paginationModel}
                    getRowId={(row) => row.id}
                    hideFooterPagination={true}
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
                mt="1.5em"
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
                    {`Show ${(!totalPages && "0") 
                            || (totalPages === 1 && totalRows) 
                            || (page === totalPages && totalRows % 8) 
                            || 8 
                        } 
                        from ${totalRows} posts`}
                </Typography>
                <Pagination
                    count={totalPages}
                    page={page}
                    onChange={(e) => handleChange(e)}
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

export default Table

