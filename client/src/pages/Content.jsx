import React, { useEffect, useState } from 'react'
import { Box, Typography, Pagination } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import { GridActionsCellItem } from '@mui/x-data-grid'
import DeleteIcon from '@mui/icons-material/Delete';
import { PostButton } from '../components/MUIComponents'
import Overview from './Overview';
import IconEye from '../assets/fi-sr-eye.svg'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ActionForm from '../components/ActionForm';
import { useDispatch, useSelector } from 'react-redux';
import { dataSelector } from '../redux/selectors';
import { subpageSelector } from '../redux/selectors';
import { subpageIndexSelector } from '../redux/selectors';
import dashboardSlice from '../redux/dashboardSlice';

const Content = (props) => {
    const dispatch = useDispatch()
    const columns = [
        [],
        [
            { 
                field: 'id', 
                headerName: 'POST ID', 
                width: 150,
                renderCell: (params) => {
                    return (
                        <Box color="#2BA84A">{params.value}</Box>
                    )
                }
            },
            { 
                field: 'title', 
                headerName: 'TITLE', 
                width: 350,
                renderCell: (params) => {
                    return (
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1em'
                        }}>
                            <img src={params.value.img} alt={""}/>
                            {params.value.title}
                        </Box>
                    )
                }
            },
            { field: 'releaseDate', headerName: 'RELEASE DATE', width: 200 },
            { 
                field: 'view', 
                headerName: 'VIEW', 
                width: 130,
                renderCell: (params) => {
                    return (
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '.5em'
                        }}>
                            <img src={IconEye} alt={""}/>
                            {params.value}
                        </Box>
                    )
                }
            },
            { 
                field: 'status', 
                headerName: 'STATUS', 
                width: 200,
                renderCell: (params) => {
                    return (
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'space-between'
                        }}>
                            <Box
                                bgcolor="#D5EEDB"
                                padding="8px 16px"
                                color="#30993B"
                                borderRadius="20px"
                                mr="2em"
                            >
                                {params.value}
                            </Box>
                        </Box>
                    )
                }
            },
            {
                field: 'actions',
                type: 'actions',
                align: 'right',
                // flex: 1,
                // minWidth: 10,
                getActions: (params) => [
                    <GridActionsCellItem
                        icon={<DeleteIcon/>}
                        label="Setting"
                        onClick={() => handleDelete(params.id)}
                    />,
                    <GridActionsCellItem
                    icon={<MoreHorizIcon sx={{color: "#84818A", width: ".8em" }}/>}
                    label="Setting"
                    />,
                ],
            },
        ],
        [
                { 
                    field: 'id', 
                    headerName: 'ADDRESS ID', 
                    width: 150,
                    renderCell: (params) => {
                        return (
                            <Box color="#2BA84A">{params.value}</Box>
                        )
                    }
                },
                { 
                    field: 'address', 
                    headerName: 'ADDRESS', 
                    width: 350,
                    renderCell: (params) => {
                        return (
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1em'
                            }}>
                                <img src={params.value.img} alt={""}/>
                                {params.value.address}
                            </Box>
                        )
                    }
                },
                { field: 'location', headerName: 'LOCATION', width: 150 },
                { field: 'addedDate', headerName: 'ADDED DATE', width: 200 },
                { 
                    field: 'status', 
                    headerName: 'STATUS', 
                    width: 200,
                    renderCell: (params) => {
                        return (
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'space-between'
                            }}>
                                <Box
                                    bgcolor="#D5EEDB"
                                    padding="8px 16px"
                                    color="#30993B"
                                    borderRadius="20px"
                                    mr="2em"
                                >
                                    {params.value}
                                </Box>
                            </Box>
                        )
                    }
                },
                {
                    field: 'actions',
                    type: 'actions',
                    align: 'right',
                    // flex: 1,
                    // minWidth: 10,
                    getActions: (params) => [
                        <GridActionsCellItem
                            icon={<DeleteIcon/>}
                            label="Setting"
                            onClick={() => handleDelete(params.id)}
                        />,
                        <GridActionsCellItem
                        icon={<MoreHorizIcon sx={{color: "#84818A", width: ".8em" }}/>}
                        label="Setting"
                        />,
                    ],
                },
        ],
        [
                { 
                    field: 'id', 
                    headerName: 'VOUCHER CODE', 
                    width: 170,
                    renderCell: (params) => {
                        return (
                            <Box color="#2BA84A">{params.value}</Box>
                        )
                    }
                },
                { 
                    field: 'voucherInfo', 
                    headerName: 'VOUCHER INFORMATION', 
                    width: 300,
                    renderCell: (params) => {
                        return (
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1em'
                            }}>
                                <img src={params.value.img} alt={""}/>
                                {params.value.voucherInfo}
                            </Box>
                        )
                    }
                },
                { field: 'expiredDate', headerName: 'EXPIRED DATE', width: 200 },
                { field: 'activedDate', headerName: 'ACTIVED DATE', width: 200 },
                { 
                    field: 'status', 
                    headerName: 'STATUS', 
                    width: 200,
                    renderCell: (params) => {
                        return (
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'space-between'
                            }}>
                                <Box
                                    bgcolor="#D5EEDB"
                                    padding="8px 16px"
                                    color="#30993B"
                                    borderRadius="20px"
                                    mr="2em"
                                >
                                    {params.value}
                                </Box>
                            </Box>
                        )
                    }
                },
                {
                    field: 'actions',
                    type: 'actions',
                    align: 'right',
                    // flex: 1,
                    // minWidth: 10,
                    getActions: (params) => [
                        <GridActionsCellItem
                            icon={<DeleteIcon/>}
                            label="Setting"
                            onClick={() => handleDelete(params.id)}
                        />,
                        <GridActionsCellItem
                        icon={<MoreHorizIcon sx={{color: "#84818A", width: ".8em" }}/>}
                        label="Setting"
                        />,
                    ],
                },
        ],
        [
            { 
                field: 'id', 
                headerName: 'LOG ID', 
                width: 150,
                renderCell: (params) => {
                    return (
                        <Box color="#2BA84A">{params.value}</Box>
                    )
                }
            },
            { 
                field: 'event', 
                headerName: 'EVENT', 
                width: 300,
                renderCell: (params) => {
                    return (
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1em',
                        }}>
                            <div 
                                style={{
                                    padding: "6px 5px 0 6px",
                                    borderRadius: "50%", 
                                    border: "1px solid #2BA84A"
                            }}>
                                <img 
                                    style={{
                                        width: "19.636px",
                                    }}
                                    src={params.value.img} 
                                    alt={""}
                                />
                            </div>
                            {params.value.event}
                        </Box>
                    )
                }
            },
            { 
                field: 'moneyUsed', 
                headerName: 'MONEY USED',
                type: 'number',
                align: 'left',
                headerAlign: 'left',
                width: 180,
                renderCell: (params) => {
                    return (
                        <>${params.value}</>
                    )
                }
            },
            { field: 'usedDate', headerName: 'USED DATE', width: 220 },
            { 
                field: 'status', 
                headerName: 'STATUS', 
                width: 200,
                renderCell: (params) => {
                    return (
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'space-between'
                        }}>
                            <Box
                                bgcolor="#D5EEDB"
                                padding="8px 16px"
                                color="#30993B"
                                borderRadius="20px"
                                mr="2em"
                            >
                                {params.value}
                            </Box>
                        </Box>
                    )
                }
            },
            {
                field: 'actions',
                type: 'actions',
                align: 'right',
                // flex: 1,
                // minWidth: 10,
                getActions: (params) => [
                    <GridActionsCellItem
                        icon={<DeleteIcon/>}
                        label="Setting"
                        onClick={() => handleDelete(params.id)}
                    />,
                    <GridActionsCellItem
                    icon={<MoreHorizIcon sx={{color: "#84818A", width: ".8em" }}/>}
                    label="Setting"
                    />,
                ],
            },
        ],
    ]
    let data = useSelector(dataSelector)
    let subpage = useSelector(subpageSelector)
    let pageIndex = useSelector(subpageIndexSelector)

    const [open, setOpen] = useState(false)
    const handleOpen = () => { 
        setOpen(true)
    }
    
    const [page, setPage] = useState(1)
    const [paginationModel, setPaginationModel] = useState({})
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
        let length = data[pageIndex].rows.length //newTotalRows
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

    const handleChange = (e) => {
        // console.log("page", e.target.textContent)
        let newPage = parseInt(e.target.innerText)
        setPage(newPage)
    }

    // *** delete data ***
    const handleDelete = (id) => {
        // delete at localStorage
        const newData = [
            [],
            data[1].rows.map(item => item),
            data[2].rows.map(item => item),
            data[3].rows.map(item => item),
            data[4].rows.map(item => item)
        ]
        localStorage.setItem("mockData", JSON.stringify(newData))

        // update to Redux
        dispatch(dashboardSlice.actions.deleteData(id)) 
    }
    if (subpage === "Overview") return <Overview data={props.data}/>
    // console.log(totalRows)
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
                    columns={columns[pageIndex]}
                    rows={data[pageIndex].rows}
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

export default Content

