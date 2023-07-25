// import React, { useState } from 'react'
// import { Box } from '@mui/material'
// import { GridActionsCellItem } from '@mui/x-data-grid'
// import DeleteIcon from '@mui/icons-material/Delete';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import { useDispatch, useSelector } from 'react-redux';
// import { dataSelector } from '../../redux/selectors';
// import titleImage from "../../assets/dashboard/title/2.png"

// import Table from '../../components/Dashboard/Table/Table'
// import Dashboard from '../../pages/Dashboard';
// import ActionForm from '../../components/Dashboard/AddPost/ActionForm';
// import ActionInfoInputs from '../../components/Dashboard/AddPost/ActionInfoInputs';

// function handleDelete(id: number) {}

// const Location: React.FC = () => {
//     let data = useSelector(dataSelector)

//     const columns = [
//         { 
//             field: 'id', 
//             headerName: 'ADDRESS ID', 
//             width: 150,
//             renderCell: (params: { value: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => {
//                 return (
//                     <Box color="#2BA84A">{params.value}</Box>
//                 )
//             }
//         },
//         { 
//             field: 'address', 
//             headerName: 'ADDRESS', 
//             width: 350,
//             renderCell: (params: { value: { img: string | undefined; address: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }; }) => {
//                 return (
//                     <Box sx={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: '1em'
//                     }}>
//                         <img src={params.value.img} alt={""}/>
//                         {params.value.address}
//                     </Box>
//                 )
//             }
//         },
//         { field: 'location', headerName: 'LOCATION', width: 150 },
//         { field: 'addedDate', headerName: 'ADDED DATE', width: 200 },
//         { 
//             field: 'status', 
//             headerName: 'STATUS', 
//             width: 200,
//             renderCell: (params: { value: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => {
//                 return (
//                     <Box sx={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         flexDirection: 'space-between'
//                     }}>
//                         <Box
//                             bgcolor="#D5EEDB"
//                             padding="8px 16px"
//                             color="#30993B"
//                             borderRadius="20px"
//                             mr="2em"
//                         >
//                             {params.value}
//                         </Box>
//                     </Box>
//                 )
//             }
//         },
//         {
//             field: 'actions',
//             type: 'actions',
//             align: 'right',
//             // flex: 1,
//             // minWidth: 10,
//             getActions: (params: { id: any; }) => [
//                 <GridActionsCellItem
//                     icon={<DeleteIcon/>}
//                     label="Setting"
//                     onClick={() => handleDelete(params.id)}
//                 />,
//                 <GridActionsCellItem
//                 icon={<MoreHorizIcon sx={{color: "#84818A", width: ".8em" }}/>}
//                 label="Setting"
//                 />,
//             ],
//         },
//     ]

//     const rows = [
//         { id: 9256821912, address: {img: titleImage, address: '66b Regent St, Redfern NSW 2016'}, location: 'Hamilton', addedDate: '15:46.673 02/08/2022', status: 'Active' },
//     ]

//     const [open, setOpen] = useState(false)
//     const handleOpen = () => { 
//         setOpen(true)
//     }

//     return (
//         <Dashboard>
//             <ActionForm open={open} setOpen={setOpen} data={data[2].actionForm} i={2}>
//                 <ActionInfoInputs data={data[2].actionForm} />
//             </ActionForm>
//             <Table columns={columns as any} rows={rows} handleOpen={handleOpen}/>
//         </Dashboard>
//     )
// }

// export default Location