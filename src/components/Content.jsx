import React from 'react'
import { Box, Typography, Pagination } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import { PostButton } from './MUIComponents'
import Overview from './Overview';
import IconEye from '../assets/fi-sr-eye.svg'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ActionForm from './ActionForm';

const Content = (props) => {
    let pageIndex = -1, postsNum
    const data = [
        {
            state: 'Overview',
        },
        {
            state: 'Post manager',
            title: 'Post Management',
            action: '+ New post',
            columns: [
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
                    width: 400,
                    renderCell: (params) => {
                        return (
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1em'
                            }}>
                                <img src={params.value.img}/>
                                {params.value.title}
                            </Box>
                        )
                    }
                },
                { field: 'releaseDate', headerName: 'RELEASE DATE', width: 160 },
                { 
                    field: 'view', 
                    type: 'number',
                    headerName: 'VIEW', 
                    width: 130,
                    renderCell: (params) => {
                        return (
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '.5em'
                            }}>
                                <img src={IconEye}/>
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
                    width: 80,
                    getActions: () => [
                        <MoreHorizIcon sx={{color: "#84818A", width: ".8em" }}/>
                    //   <GridActionsCellItem
                    //     icon={}
                    //     label="Toggle Admin"
                    //     showInMenu
                    //   />,
                    ],
                  },
            ],
            rows: [
                { id: 9256821912, title: {img: '/1.png', title: 'Crawford Room, Mortlock Wing....'}, releaseDate: '15:46.673 02/08/2022', view: 200, status: 'Online' },
                { id: 9256821912, title: {img: '/1.png', title: 'Crawford Room, Mortlock Wing....'}, releaseDate: '15:46.673 02/08/2022', view: 200, status: 'Online' },
                { id: 9256821912, title: {img: '/1.png', title: 'Crawford Room, Mortlock Wing....'}, releaseDate: '15:46.673 02/08/2022', view: 200, status: 'Online' },
                { id: 9256821912, title: {img: '/1.png', title: 'Crawford Room, Mortlock Wing....'}, releaseDate: '15:46.673 02/08/2022', view: 200, status: 'Online' },
                { id: 9256821912, title: {img: '/1.png', title: 'Crawford Room, Mortlock Wing....'}, releaseDate: '15:46.673 02/08/2022', view: 200, status: 'Online' },
                { id: 9256821912, title: {img: '/1.png', title: 'Crawford Room, Mortlock Wing....'}, releaseDate: '15:46.673 02/08/2022', view: 200, status: 'Online' },
                { id: 9256821912, title: {img: '/1.png', title: 'Crawford Room, Mortlock Wing....'}, releaseDate: '15:46.673 02/08/2022', view: 200, status: 'Online' },
                { id: 9256821912, title: {img: '/1.png', title: 'Crawford Room, Mortlock Wing....'}, releaseDate: '15:46.673 02/08/2022', view: 200, status: 'Online' },
                { id: 9256821912, title: {img: '/1.png', title: 'Crawford Room, Mortlock Wing....'}, releaseDate: '15:46.673 02/08/2022', view: 200, status: 'Online' },
                { id: 9256821912, title: {img: '/1.png', title: 'Crawford Room, Mortlock Wing....'}, releaseDate: '15:46.673 02/08/2022', view: 200, status: 'Online' },
                { id: 9256821912, title: {img: '/1.png', title: 'Crawford Room, Mortlock Wing....'}, releaseDate: '15:46.673 02/08/2022', view: 200, status: 'Online' },
                { id: 9256821912, title: {img: '/1.png', title: 'Crawford Room, Mortlock Wing....'}, releaseDate: '15:46.673 02/08/2022', view: 200, status: 'Online' },
                { id: 9256821912, title: {img: '/1.png', title: 'Crawford Room, Mortlock Wing....'}, releaseDate: '15:46.673 02/08/2022', view: 200, status: 'Online' },
                { id: 9256821912, title: {img: '/1.png', title: 'Crawford Room, Mortlock Wing....'}, releaseDate: '15:46.673 02/08/2022', view: 200, status: 'Online' },
            ]
        },
        {
            state: 'Location',
            title: 'Location Management',
            action: '+ New location',
            columns: [
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
                    width: 400,
                    renderCell: (params) => {
                        return (
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1em'
                            }}>
                                <img src={params.value.img}/>
                                {params.value.address}
                            </Box>
                        )
                    }
                },
                { field: 'location', headerName: 'LOCATION', width: 100 },
                { field: 'addedDate', headerName: 'ADDED DATE', width: 160 },
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
                                <MoreHorizIcon/>
                            </Box>
                        )
                    }
                }
            ],
            rows: [
                { id: 9256821912, address: {img: "/2.png", address: '66b Regent St, Redfern NSW 2016'}, location: 'Hamilton', addedDate: '15:46.673 02/08/2022', status: 'Active' },
                { id: 9256821912, address: {img: "/2.png", address: '66b Regent St, Redfern NSW 2016'}, location: 'Hamilton', addedDate: '15:46.673 02/08/2022', status: 'Active' },
                { id: 9256821912, address: {img: "/2.png", address: '66b Regent St, Redfern NSW 2016'}, location: 'Hamilton', addedDate: '15:46.673 02/08/2022', status: 'Active' },
                { id: 9256821912, address: {img: "/2.png", address: '66b Regent St, Redfern NSW 2016'}, location: 'Hamilton', addedDate: '15:46.673 02/08/2022', status: 'Active' },
                { id: 9256821912, address: {img: "/2.png", address: '66b Regent St, Redfern NSW 2016'}, location: 'Hamilton', addedDate: '15:46.673 02/08/2022', status: 'Active' },
                { id: 9256821912, address: {img: "/2.png", address: '66b Regent St, Redfern NSW 2016'}, location: 'Hamilton', addedDate: '15:46.673 02/08/2022', status: 'Active' },
                { id: 9256821912, address: {img: "/2.png", address: '66b Regent St, Redfern NSW 2016'}, location: 'Hamilton', addedDate: '15:46.673 02/08/2022', status: 'Active' },
                { id: 9256821912, address: {img: "/2.png", address: '66b Regent St, Redfern NSW 2016'}, location: 'Hamilton', addedDate: '15:46.673 02/08/2022', status: 'Active' },
                { id: 9256821912, address: {img: "/2.png", address: '66b Regent St, Redfern NSW 2016'}, location: 'Hamilton', addedDate: '15:46.673 02/08/2022', status: 'Active' },
                { id: 9256821912, address: {img: "/2.png", address: '66b Regent St, Redfern NSW 2016'}, location: 'Hamilton', addedDate: '15:46.673 02/08/2022', status: 'Active' },
                { id: 9256821912, address: {img: "/2.png", address: '66b Regent St, Redfern NSW 2016'}, location: 'Hamilton', addedDate: '15:46.673 02/08/2022', status: 'Active' },
                { id: 9256821912, address: {img: "/2.png", address: '66b Regent St, Redfern NSW 2016'}, location: 'Hamilton', addedDate: '15:46.673 02/08/2022', status: 'Active' },
                { id: 9256821912, address: {img: "/2.png", address: '66b Regent St, Redfern NSW 2016'}, location: 'Hamilton', addedDate: '15:46.673 02/08/2022', status: 'Active' },
                { id: 9256821912, address: {img: "/2.png", address: '66b Regent St, Redfern NSW 2016'}, location: 'Hamilton', addedDate: '15:46.673 02/08/2022', status: 'Active' },
                { id: 9256821912, address: {img: "/2.png", address: '66b Regent St, Redfern NSW 2016'}, location: 'Hamilton', addedDate: '15:46.673 02/08/2022', status: 'Active' },
                { id: 9256821912, address: {img: "/2.png", address: '66b Regent St, Redfern NSW 2016'}, location: 'Hamilton', addedDate: '15:46.673 02/08/2022', status: 'Active' },
                { id: 9256821912, address: {img: "/2.png", address: '66b Regent St, Redfern NSW 2016'}, location: 'Hamilton', addedDate: '15:46.673 02/08/2022', status: 'Active' },
                { id: 9256821912, address: {img: "/2.png", address: '66b Regent St, Redfern NSW 2016'}, location: 'Hamilton', addedDate: '15:46.673 02/08/2022', status: 'Active' },
                { id: 9256821912, address: {img: "/2.png", address: '66b Regent St, Redfern NSW 2016'}, location: 'Hamilton', addedDate: '15:46.673 02/08/2022', status: 'Active' },
            ]
        },
        {
            state: 'Reward',
            title: 'Reward Management',
            action: '+ New voucher',
            columns: [
                { 
                    field: 'id', 
                    headerName: 'VOUCHER CODE', 
                    width: 150,
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
                                <img src={params.value.img}/>
                                {params.value.voucherInfo}
                            </Box>
                        )
                    }
                },
                { field: 'expiredDate', headerName: 'EXPIRED DATE', width: 180 },
                { field: 'activedDate', headerName: 'ACTIVED DATE', width: 180 },
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
                                <MoreHorizIcon/>
                            </Box>
                        )
                    }
                }
            ],
            rows: [
                { id: 9256821912, voucherInfo: {img: "/3.svg", voucherInfo: 'VOUCHER 50%'}, expiredDate: '15:46.673 02/08/2022', activedDate: '15:46.673 02/08/2022', status: 'Active' },
                { id: 9256821912, voucherInfo: {img: "/3.svg", voucherInfo: 'VOUCHER 50%'}, expiredDate: '15:46.673 02/08/2022', activedDate: '15:46.673 02/08/2022', status: 'Active' },
                { id: 9256821912, voucherInfo: {img: "/3.svg", voucherInfo: 'VOUCHER 50%'}, expiredDate: '15:46.673 02/08/2022', activedDate: '15:46.673 02/08/2022', status: 'Active' },
                { id: 9256821912, voucherInfo: {img: "/3.svg", voucherInfo: 'VOUCHER 50%'}, expiredDate: '15:46.673 02/08/2022', activedDate: '15:46.673 02/08/2022', status: 'Active' },
                { id: 9256821912, voucherInfo: {img: "/3.svg", voucherInfo: 'VOUCHER 50%'}, expiredDate: '15:46.673 02/08/2022', activedDate: '15:46.673 02/08/2022', status: 'Active' },
                { id: 9256821912, voucherInfo: {img: "/3.svg", voucherInfo: 'VOUCHER 50%'}, expiredDate: '15:46.673 02/08/2022', activedDate: '15:46.673 02/08/2022', status: 'Active' },
                { id: 9256821912, voucherInfo: {img: "/3.svg", voucherInfo: 'VOUCHER 50%'}, expiredDate: '15:46.673 02/08/2022', activedDate: '15:46.673 02/08/2022', status: 'Active' },
                { id: 9256821912, voucherInfo: {img: "/3.svg", voucherInfo: 'VOUCHER 50%'}, expiredDate: '15:46.673 02/08/2022', activedDate: '15:46.673 02/08/2022', status: 'Active' },
                { id: 9256821912, voucherInfo: {img: "/3.svg", voucherInfo: 'VOUCHER 50%'}, expiredDate: '15:46.673 02/08/2022', activedDate: '15:46.673 02/08/2022', status: 'Active' },
            ]
        },
        {
            state: 'Payment record',
            title: 'Payment Record',
            action: '+ New payment record',
            columns: [
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
                                        src={params.value.img} />
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
                    width: 150,
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
                                <MoreHorizIcon/>
                            </Box>
                        )
                    }
                }
            ],
            rows: [
                { id: 9256821912, event: {img: "/4.svg", event: 'By food for kids'}, moneyUsed: '300', usedDate: '15:46.673 02/08/2022', status: 'Paid' },
                { id: 9256821912, event: {img: "/4.svg", event: 'By food for kids'}, moneyUsed: '300', usedDate: '15:46.673 02/08/2022', status: 'Paid' },
                { id: 9256821912, event: {img: "/4.svg", event: 'By food for kids'}, moneyUsed: '300', usedDate: '15:46.673 02/08/2022', status: 'Paid' },
                { id: 9256821912, event: {img: "/4.svg", event: 'By food for kids'}, moneyUsed: '300', usedDate: '15:46.673 02/08/2022', status: 'Paid' },
            ]
        },
    ]
    pageIndex = data.findIndex((item) => item.state === props.state)
    if (!pageIndex) return <Overview/>
    else {
        postsNum = data[pageIndex].rows.length
        return (
            <Box>
                <ActionForm/>
                <Box display="flex" justifyContent="space-between">
                    <Typography sx={{
                        color: "#2E2C34", 
                        fontFamily: "Inter", 
                        fontWeight: "600",
                        fontSize: "1.5em"
                    }}>
                        {data[pageIndex].title}
                    </Typography>
                    <PostButton>{data[pageIndex].action}</PostButton>
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

