import React from 'react'
import { Box } from '@mui/material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import titleImage from "../../assets/dashboard/title/4.svg"

import Table from '../../components/Dashboard/Table/Table'
import Dashboard from '../../pages/Dashboard';

function handleDelete(id: number) {}

const PaymentRecord: React.FC = () => {
    const columns = [
        { 
            field: 'id', 
            headerName: 'LOG ID', 
            width: 150,
            renderCell: (params: { value: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => {
                return (
                    <Box color="#2BA84A">{params.value}</Box>
                )
            }
        },
        { 
            field: 'event', 
            headerName: 'EVENT', 
            width: 300,
            renderCell: (params: { value: { img: string | undefined; event: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }; }) => {
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
            renderCell: (params: { value: any; }) => {
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
            getActions: (params: { id: any; }) => [
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

    const rows = [
        { id: 9256821912, event: {img: titleImage, event: 'By food for kids'}, moneyUsed: '300', usedDate: '15:46.673 02/08/2022', status: 'Paid'},
    ]

    return (
        <Dashboard>
            <Table columns={columns as any} rows={rows} />
        </Dashboard>
    )
}

export default PaymentRecord