import React, { useEffect, useState } from 'react'
import { Box, CircularProgress, Grid, Skeleton } from '@mui/material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import { useSnackbar } from 'notistack';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconEye from '../../assets/dashboard/table/fi-sr-eye.svg';
import titleImage from "../../assets/dashboard/title/1.png"

import Table from '../../components/Dashboard/Table/Table'
import Dashboard from '../../pages/Dashboard';
import ActionForm from '../../components/Dashboard/AddPost/ActionForm';

import { useDispatch, useSelector } from 'react-redux';
import { dataSelector } from '../../redux/selectors';
import ActionInfoInputs from '../../components/Dashboard/AddPost/ActionInfoInputs';
import dashboardSlice from '../../redux/dashboardSlice';
import axios from 'axios';
import { api } from '../../until/constants';
import Cookies from 'js-cookie';

function handleDelete(id: number) {}

const PostManager: React.FC<any> = () => {
    const columns = [
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

    const [rows, setRows] = useState([
        { id: 9256821911, title: {img: titleImage, title: 'Crawford Room, Mortlock Wing....'}, releaseDate: '15:46.673 02/08/2022', view: 200, status: 'Online' },
        { id: 9256821912, title: {img: titleImage, title: 'Crawford Room, Mortlock Wing....'}, releaseDate: '15:46.673 02/08/2022', view: 200, status: 'Online' },
    ])

    const [loading, setLoading] = useState(true)
    async function getAllPosts() {
        try {
            const token = Cookies.get('access_token')
            await axios.get(api.GET_ALL_POSTS, {
                    headers: {
                        Authorization: `Bearer ${token}` // Thêm token vào header Authorization
                    }
                }).then((response) => {
                    console.log("response", response.data)
                    let newRows = [...rows]
                    response.data.map((item: any) => {
                        console.log(item)
                        const newRow = {
                            id: item.id,
                            title: {
                                img: titleImage,
                                title: item.title
                            },
                            releaseDate: item.releaseDate,
                            view: 200,
                            status: 'Online'
                        }
                        newRows = [...newRows, newRow]
                    })
                    setRows(newRows)
                    setLoading(false)
                })
        } catch (error) {
            console.log("error", error)
        }
    }
    
    async function postCreatePost(post: any) {
        try {
            const token = Cookies.get('access_token')
            await axios.post(api.GET_ALL_POSTS, post,
                {
                    headers: {
                        Authorization: `Bearer ${token}` // Thêm token vào header Authorization
                    }
                }).then((response) => {
                    console.log("response", response.data)
                })
        } catch (error) {
            console.log("error at post create post", error)
        }
    }
    useEffect(() => {
        getAllPosts()
    }, [])

    let data = useSelector(dataSelector)
    const [open, setOpen] = useState(false)
    const handleOpen = () => { 
        setOpen(true)
    }
    const [title, setTitle] = useState('')
    const [value, setValue] = useState(1000)
    const [unit, setUnit] = useState('USD')
    const [location, setLocation] = useState('')
    const [address, setAddress] = useState('')
    const [desc, setDesc] = useState('')
    
    const dispatch = useDispatch()
    const { enqueueSnackbar } = useSnackbar() 
    const [openSuccess, setOpenSuccess] = useState(false)
    function handleClose() {
        setOpen(false)
    }
    function handleSubmit() {
        // check Empty 
        if (title == '') {
            enqueueSnackbar('Please fill the Title field', {variant: "error"});
            return
        }
        handleClose()

        /** 
         * Add new Data
         * YOUR CODE HERE
        */
        const currentDate = new Date();
        const dateString = currentDate.toISOString();
        const newRow = {
            id: Math.round(Math.random() * 9000000000),
            title: {img: titleImage, title: title},
            releaseDate: dateString, 
            view: 200, 
            status: 'Online'
        }
        setRows([...rows, newRow])
        // dispatch(dashboardSlice.actions.addData())
        const storeNewRow = {
            id: newRow.id,
            title: newRow.title.title,
            releaseDate: dateString,
            view: 200,
            status: 'Online'
        }
        postCreatePost(storeNewRow)
        
        // *** SUCCESSFULLY ***
        setOpenSuccess(true)
        enqueueSnackbar('Create successfully!', {variant: "success"});
        
        // refresh values 
        setTitle('')
    }

    return (
        <Dashboard>
            <ActionForm 
                open={open}
                setOpen={setOpen}
                data={data[1].actionForm}
                i={1} 
                openSuccess={openSuccess} 
                setOpenSuccess={setOpenSuccess} 
                handleClose={handleClose} 
                handleSubmit={handleSubmit}                
            >
                <ActionInfoInputs 
                    data={data[1].actionForm}
                    title={title}
                    setTitle={setTitle} 
                    value={value}             
                    setValue={setValue}
                    unit={unit}
                    setUnit={setUnit}
                    location={location}             
                    setLocation={setLocation}             
                    address={address}             
                    setAddress={setAddress}
                    desc={desc}             
                    setDesc={setDesc}
                />
            </ActionForm>
            {loading ? 
                <Grid container justifyContent="center" alignItems="center" style={{ height: "70vh" }}>
                    <CircularProgress className="flex align-center justify-center"/>
                </Grid>
                : <Table columns={columns as any} rows={rows} handleOpen={handleOpen}/>}
        </Dashboard>
    )
}

export default PostManager

