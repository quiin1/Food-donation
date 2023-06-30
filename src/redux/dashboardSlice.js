import { createSlice } from '@reduxjs/toolkit'
import * as dashboard from '../constants/dashboard' 
import * as login from '../constants/login'
import { Box } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconEye from '../assets/fi-sr-eye.svg'

export default createSlice({
    name: 'dashboard',
    initialState: {
        authenticated: null,
        subpage: null,
        data: [
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
                ],
                actionForm: {
                    title: 'Add new post',
                    subtitles: ['Post Information', 'Media'],
                    inputs: [
                        {label: 'Title', type: 'text', width: '100%'}, 
                        {label: 'Raising', type: 'money', width: '100%'}, 
                        {label: 'Location', type: 'select', width: '50%', optionList: []}, 
                        {label: 'Address', type: 'select', width: '50%', optionList: []}, 
                        {label: 'Discription', type: 'description', width: '100%'}
                    ], 
                    button: 'Create new post',
                    success: {
                        title: 'Create successfully',
                        content: 'Your post created successfully',
                        button: 'Back to post management'
                    }
                }
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
                ],
                actionForm: {
                    title: 'Add new location',
                    subtitles: ['Location Information', 'Media'],
                    inputs: [
                        {label: 'Location', type: 'select', width: '100%', optionList: []}, 
                        {label: 'Address', type: 'text', width: '100%'}, 
                        {label: 'Description', type: 'description', width: '100%'}
                    ], 
                    button: 'Create new location',
                    success: {
                        title: 'Create successfully',
                        content: 'Your post created successfully',
                        button: 'Back to location management'
                    }
                }
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
                ],
                actionForm: {
                    title: 'Add new voucher',
                    subtitles: ['Voucher Information', 'Media'],
                    inputs: [
                        {label: 'Voucher name', type: 'text', width: '100%'}, 
                        {label: 'Expired Date', type: 'date', width: '50%'}, 
                        {label: 'Voucher Code', type: 'number', width: '50%'}, 
                        {label: 'Description', type: 'description', width: '100%'}
                    ],
                    button: 'Create new voucher',
                    success: {
                        title: 'Create successfully',
                        content: 'Your post created successfully',
                        button: 'Back to reward management'
                    }
                }
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
                ],
                actionForm: {
                    title: 'Add new payment record',
                    subtitles: ['Payment record information', 'Media'],
                    inputs: [
                        {label: 'Title', type: 'text', width: '100%'}, 
                        {label: 'Money Used', type: 'money', width: '100%'}, 
                        {label: 'Location', type: 'select', width: '50%', optionList: []}, 
                        {label: 'Address', type: 'select', width: '50%', optionList: []}, 
                        {label: 'Description', type: 'description', width: '100%'}
                    ], 
                    button: 'Create new post',
                    success: {
                        title: 'Create successfully',
                        content: 'Your payment created successfully',
                        button: 'Back to payment record'
                    }
                }
            },
        ]
    },
    reducers: {
        changeAuthenticated: (state, action) => {
            switch (action.payload) {
                case login.LOGIN:
                    state.authenticated = true
                    break
                case dashboard.LOGOUT:
                    state.authenticated = null
                    break
                default:
                    break
            }
        },
        changeSubpage: (state, action) => {
            switch (action.payload) {
                case login.LOGIN:
                    state.subpage = dashboard.listNavItems[0].title
                    break
                case dashboard.LOGOUT:
                    state.subpage = null
                    break
                default:
                    state.subpage = action.payload
            }
        },
    }
})