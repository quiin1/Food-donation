import React from 'react'
import { Box } from '@mui/material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconEye from '../../assets/dashboard/table/fi-sr-eye.svg';

import Table from '../../components/Dashboard/Table'
import Dashboard from '../../pages/Dashboard';

function handleDelete(id: number) {}

const PostManager: React.FC = () => {
    const column = [
        { 
            field: 'id', 
            headerName: 'POST ID', 
            width: 150,
            renderCell: (params: { value: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => {
                return (
                    <Box color="#2BA84A">{params.value}</Box>
                )
            }
        },
        { 
            field: 'title', 
            headerName: 'TITLE', 
            width: 350,
            renderCell: (params: { value: { img: string | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }; }) => {
                console.log(params.value.img)
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
            renderCell: (params: { value: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => {
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
            renderCell: (params: { value: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => {
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
            getActions: (params: { id: number; }) => [
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
    ]
    
    return (
        <Dashboard>
            {/* <Table column={column} data={[]} /> */}
            <Table column={[]} data={[]} />
        </Dashboard>
    )
}

export default PostManager