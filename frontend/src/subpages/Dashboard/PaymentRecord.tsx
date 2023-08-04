import React, { useEffect, useState } from 'react'
import { Box, Button, Dialog, DialogActions, DialogTitle, Grid } from '@mui/material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import { useSnackbar } from 'notistack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconEye from '../../assets/dashboard/table/fi-sr-eye.svg';
import titleImage from "../../assets/dashboard/title/1.png"

import Table from '../../components/Dashboard/Table/Table'
import Dashboard from '../../pages/Dashboard';
import ActionForm from '../../components/Dashboard/CRUDPost/ActionForm';

import { useSelector } from 'react-redux';
import { dataSelector } from '../../redux/selectors';
import ActionInfoInputs from '../../components/Dashboard/CRUDPost/ActionInfoInputs';
import { postCreatePost, deletePost, updatePost, getPosts, getAllPosts } from '../../api';
import 'firebase/compat/firestore';
import { storage } from '../../App';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useLocation } from 'react-router-dom';

const PaymentRecord: React.FC = () => {
    const columns = [
        { 
            field: 'id', 
            headerName: 'LOG ID', 
            width: 150,
            renderCell: (params: any) => {
                return (
                    <Box color="#2BA84A">{params.value}</Box>
                )
            }
        },
        { 
            field: 'event', 
            headerName: 'EVENT', 
            width: 300,
            renderCell: (params: any) => {
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
                            {/* <img 
                                style={{
                                    width: "19.636px",
                                }}
                                src={params.row.img} 
                                alt={""}
                            /> */}
                            <img style={{ maxWidth: "32px" }} src={params.row.img} alt={"title-image"} />
                        </div>
                        {params.row.event}
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
            // flex: 1,
            // minWidth: 10,
            getActions: (params: { id: any; }) => [
                <GridActionsCellItem
                    icon={<DeleteIcon/>}
                    label="Setting"
                    onClick={() => handleDelete(params.id)}
                />,
                <GridActionsCellItem
                icon={<EditIcon sx={{color: "#84818A", width: ".8em" }}/>}
                label="Setting"
                />,
            ],
        },
    ]
    // const [rows, setRows] = useState([
    //     { id: 9256821912, img: titleImage, event: 'By food for kids', moneyUsed: '300', usedDate: '15:46.673 02/08/2022', status: 'Paid'},
    // ])

    const [rows, setRows] = useState<any>([])

    let data = useSelector(dataSelector)
    const location = useLocation();
    const [openActionForm, setOpenActionForm] = useState(location?.state?.openActionForm || false)
    const [openConfirmDelete, setOpenConfirmDelete] = useState(false)

    const [title, setTitle] = useState('')
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [selectedFileURL, setSelectedFileURL] = useState('');

    const { enqueueSnackbar } = useSnackbar()
    const [openSuccess, setOpenSuccess] = useState(false)
    const [isUpdateData, setIsUpdateData] = useState(false)
    const [idToUpdate, setIdToUpdate] = useState(-1)
    const [idToDelete, setIdToDelete] = useState(-1)
    const [_idToUpdate, set_IdToUpdate] = useState(-1)

    const [paginationModel, setPaginationModel] = useState({
        page: 1,
        pageSize: 8
    })
    const [loading, setLoading] = useState(true)
    const [totalRows, setTotalRows] = useState(0)

    useEffect(() => {
        // getAllPosts(setRows, setLoading)
        getPosts(paginationModel, setRows, setTotalRows, setLoading)
    }, [paginationModel])

    useEffect(() => {
        updateSelectedFileURL()
    }, [selectedFile, setSelectedFile])

    async function updateSelectedFileURL() {
        if (selectedFile) {
            const imageRef = ref(storage, `/${selectedFile.name}`);
            const uploadedImage = await uploadBytes(imageRef, selectedFile).then((snapshot: { ref: any; }) => {
                return getDownloadURL(snapshot.ref)
            })
            // console.log(uploadedImage)
            setSelectedFileURL(uploadedImage)
        }
        else {
            setSelectedFileURL('')
        }
    }

    function refreshValues() {
        setTitle('')
        setSelectedFile(null)
        setIdToDelete(-1)
    }

    function handleSubmit() {
        // console.log("isUpdateData", isUpdateData)
        // check Empty 
        if (title === '') {
            enqueueSnackbar('Please fill the Title field', { variant: "error" });
            return
        }
        if (!selectedFileURL) {
            enqueueSnackbar('Please upload image!', { variant: "error" });
            return
        }
        setOpenActionForm(false)

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
                    title,
                    img: selectedFileURL
                })
                setIsUpdateData(false)
                setIdToUpdate(-1)
                set_IdToUpdate(-1)

                const updatedRow = {
                    id: rows[idToUpdate].id,
                    img: selectedFileURL || titleImage,
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
        enqueueSnackbar('Create successfully!', { variant: "success" });

        // refresh values 
        refreshValues()
    }

    const handleAdd = async () => {
        // console.log("selectedFile", selectedFile)
        // console.log("selectedFileURL", selectedFile)

        const currentDate = new Date();
        const dateString = currentDate.toISOString();
        // FE
        const newRow = {
            id: Math.round(Math.random() * 9000000000),
            img: selectedFileURL,
            title,
            releaseDate: dateString,
            view: 200,
            status: 'Online'
        }
        setRows([newRow, ...rows])
        // BE
        const storeNewRow = {
            id: newRow.id,
            img: selectedFileURL,
            title,
            releaseDate: dateString,
            view: 200,
            status: 'Online'
        }
        postCreatePost(storeNewRow)
        getPosts(paginationModel, setRows, setTotalRows, setLoading)
    }

    const handleDelete = (id: number) => {
        const indexToRemove = rows.findIndex((item: any) => item.id === id)
        if (indexToRemove >= 0 && indexToRemove < rows.length && idToDelete !== -1) {
            /** Delete */
            const newRows = rows.filter((_: any, index: any) => index !== indexToRemove)
            setRows(newRows)
            /** 
             * use API
             */
            deletePost(rows[indexToRemove]._id)
        } else {
            console.log('Invalid index. No object was removed.');
        }
        refreshValues()
        getPosts(paginationModel, setRows, setTotalRows, setLoading)
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
            setSelectedFileURL(rows[indexToEdit].img || titleImage)
            setOpenActionForm(true)
        } else {
            console.log('Invalid index');
        }
    }

    return (
        <Dashboard>
            <Dialog
                open={openConfirmDelete}
                onClose={() => setOpenConfirmDelete(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are you sure to delete this post?"}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={() => {handleDelete(idToDelete); setOpenConfirmDelete(false);}} autoFocus>
                        Agree
                    </Button>
                    <Button onClick={() => setOpenConfirmDelete(false)}>Cancel</Button>
                </DialogActions>
            </Dialog>
            <ActionForm
                open={openActionForm}
                setOpen={setOpenActionForm}
                data={data[4].actionForm}
                i={4}
                openSuccess={openSuccess}
                setOpenSuccess={setOpenSuccess}
                handleCloseActionForm={() => setOpenActionForm(false)}
                handleSubmit={handleSubmit}
                setSelectedFile={setSelectedFile}
                selectedFileURL={selectedFileURL}
                setSelectedFileURL={setSelectedFileURL}
            >
                <ActionInfoInputs
                    data={data[4].actionForm}
                    title={title}
                    setTitle={setTitle}
                />
            </ActionForm>
                <Table
                    columns={columns as any}
                    rows={rows}
                    handleOpenActionForm={() => setOpenActionForm(true)}
                    loading={loading}
                    totalRows={totalRows}
                    paginationModel={{ page: paginationModel.page - 1, pageSize: paginationModel.pageSize }}
                    setPaginationModel={setPaginationModel}
                />
        </Dashboard>
    )
}

export default PaymentRecord