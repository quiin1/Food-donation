import React, { useEffect, useState } from 'react'
import { Box, CircularProgress, Grid } from '@mui/material'
import { GridActionsCellItem, GridPaginationModel } from '@mui/x-data-grid'
import { useSnackbar } from 'notistack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconEye from '../../assets/dashboard/table/fi-sr-eye.svg';
import titleImage from "../../assets/dashboard/title/1.png"

import Table from '../../components/Dashboard/Table/Table'
import Dashboard from '../../pages/Dashboard';
import ActionForm from '../../components/Dashboard/AddPost/ActionForm';

import { useSelector } from 'react-redux';
import { dataSelector } from '../../redux/selectors';
import ActionInfoInputs from '../../components/Dashboard/AddPost/ActionInfoInputs';
import { postCreatePost, deletePost, updatePost, getPosts, getAllPosts } from '../../api';

const PostManager: React.FC<any> = () => {
    const columns = [
        { 
            field: 'id', 
            headerName: 'POST ID', 
            width: 150,
            renderCell: (params: any) => {
                return (
                    <Box color="#2BA84A">{params.value}</Box>
                )
            }
        },
        { 
            field: 'title', 
            headerName: 'TITLE', 
            width: 350,
            renderCell: (params: any) => {
                return (
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1em'
                    }}>
                        <img src={params.row.img} alt={""}/>
                        {params.row.title}
                    </Box>
                )
            }
        },
        { field: 'releaseDate', headerName: 'RELEASE DATE', width: 200 },
        { 
            field: 'view', 
            headerName: 'VIEW', 
            width: 130,
            renderCell: (params: any) => {
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
            renderCell: (params: any) => {
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
            getActions: (params: { id: number; }) => [
                <GridActionsCellItem
                    icon={<DeleteIcon/>}
                    label="Delete"
                    onClick={() => handleDelete(params.id)}
                />,
                <GridActionsCellItem
                    icon={<EditIcon sx={{color: "#84818A", width: ".87em" }}/>}
                    label="Edit"
                    onClick={() => handleEdit(params.id)}
                />,
            ],
        },
    ]
    const [rows, setRows] = useState<any>([])

    let data = useSelector(dataSelector)
    const [open, setOpen] = useState(false)
    const handleOpen = () => { 
        setOpen(true)
    }
    function handleClose() {
        setOpen(false)
    }
    const [title, setTitle] = useState('')
    
    const { enqueueSnackbar } = useSnackbar() 
    const [openSuccess, setOpenSuccess] = useState(false)
    const [isUpdateData, setIsUpdateData] = useState(false)
    const [idToUpdate, setIdToUpdate] = useState(-1)
    const [_idToUpdate, set_IdToUpdate] = useState(-1)
    const [totalRows, setTotalRows] = useState(0)

    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [pageLimit, setPageLimit] = useState(8)

    useEffect(() => {
        getAllPosts(setRows, setLoading)
        // const queryParams = {
        //     page,
        //     pageLimit
        // }
        // getPosts(queryParams, setRows, setTotalRows, setLoading)
    }, [])

    function refreshValues() {
        setTitle('')
    }

    function handleSubmit() {
        console.log("isUpdateData", isUpdateData)
        // check Empty 
        if (title === '') {
            enqueueSnackbar('Please fill the Title field', {variant: "error"});
            return
        }
        handleClose()

        /** 
         * Add new Data
         * func: handleAdd      call API 
        */
        if (!isUpdateData) handleAdd()
        
        /**
         * Update data
         * func: updatePost     call API put
         */
        else {
            if (_idToUpdate !== -1) {
                updatePost(_idToUpdate, {
                    title
                })
                setIsUpdateData(false)
                setIdToUpdate(-1)
                set_IdToUpdate(-1)
                
                const updatedRow = {
                    id: rows[idToUpdate].id,
                    img: titleImage,
                    title,
                    releaseDate: rows[idToUpdate].releaseDate, 
                    view: 200, 
                    status: 'Online'
                }
                const newRows = rows.map((item: any, index: number) =>
                    index === idToUpdate ? updatedRow : item
                )
                setRows(newRows)
            }
        }

        /**
         * *** SUCCESSFULLY ***
         *  */ 
        setOpenSuccess(true)
        enqueueSnackbar('Create successfully!', {variant: "success"});
        
        // refresh values 
        refreshValues()
    }

    const handleAdd = () => {
        const currentDate = new Date();
        const dateString = currentDate.toISOString();
        // FE
        const newRow = {
            id: Math.round(Math.random() * 9000000000),
            img: titleImage,
            title,
            releaseDate: dateString, 
            view: 200, 
            status: 'Online'
        }
        setRows([...rows, newRow])
        // BE
        const storeNewRow = {
            id: newRow.id,
            title,
            releaseDate: dateString,
            view: 200,
            status: 'Online'
        }
        postCreatePost(storeNewRow)
    }

    const handleDelete = (id: number) => {
        const indexToRemove = rows.findIndex((item: any) => item.id === id)
        console.log(indexToRemove)
        if (indexToRemove >= 0 && indexToRemove < rows.length) {
            const newRows = rows.filter((_: any, index: any) => index !== indexToRemove)
            setRows(newRows)
            /** 
             * use API
             */
            deletePost(rows[indexToRemove]._id)
        } else {
            console.log('Invalid index. No object was removed.');
        }
    }
    
    const handleEdit = (id: number) => {
        const indexToEdit = rows.findIndex((item: any) => item.id === id)
        setIsUpdateData(true)
        setIdToUpdate(indexToEdit)
        set_IdToUpdate(rows[indexToEdit]._id)

        
        setIdToUpdate(indexToEdit)
        if (indexToEdit >= 0 && indexToEdit < rows.length) {
            /**
             * front-end
             * >> get current data
             */
            setTitle(rows[indexToEdit].title)
            handleOpen()            
        } else {
            console.log('Invalid index');
        }
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
                />
            </ActionForm>
            {loading ? 
                <Grid container justifyContent="center" alignItems="center" style={{ height: "70vh" }}>
                    <CircularProgress className="flex align-center justify-center"/>
                </Grid> 
                :
                <Table 
                    columns={columns as any}
                    rows={rows}
                    handleOpen={handleOpen}
                    initialPageLimit={8}
                    loading={loading}
                    totalRows={totalRows} 
                    paginationModel={{page, pageSize: pageLimit}} 
                />
            }
        </Dashboard>
    )
}

export default PostManager

