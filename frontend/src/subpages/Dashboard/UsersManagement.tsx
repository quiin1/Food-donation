import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { Alert, AlertProps, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Snackbar } from '@mui/material'
import { GridActionsCellItem, GridRowModel } from '@mui/x-data-grid'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import Dashboard from '../../pages/Dashboard'
import Table from '../../components/Dashboard/Table/Table'

import { getUsers, updateUser } from '../../api'

function computeMutation(newRow: GridRowModel, oldRow: GridRowModel) {
    if (newRow.role !== oldRow.role) {
      return `Role from '${oldRow.role}' to '${newRow.role}'`;
    }
    return null;
  }

const UsersManagement: React.FC = () => {
    const columns = [
        {
            field: 'id',
            headerName: 'USER ID',
            width: 250,
            renderCell: (params: any) => {
                return (
                    <Box color="#2BA84A">{params.value}</Box>
                )
            }
        },
        {
            field: 'name',
            headerName: 'USERNAME',
            width: 200,
            renderCell: (params: any) => {
                return (
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1em'
                    }}>
                        {params.value}
                    </Box>
                )
            }
        },
        { field: 'createdAt', headerName: 'REGISTERED DATE', width: 250 },
        {
            field: 'role',
            headerName: 'USER ROLE',
            width: 200,
            editable: true,
            type: 'singleSelect',
            valueOptions: ['', 'admin', 'post-manager', 'location', 'reward', 'payment-record'],
            renderCell: (params: any) => {
                return (
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'space-between'
                    }}>
                        <Box
                            bgcolor={params.value === 'admin' ? "#D5EEDB" : "#FFF4BC"}
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
            headerName: 'ACTIONS',
            type: 'actions',
            align: 'right',
            getActions: (params: { id: number; }) => [
                <GridActionsCellItem
                    icon={<DeleteIcon />}
                    label="Delete"
                    // onClick={() => {setOpenConfirmDelete(true); setIdToDelete(params.id)}}
                />,
                <GridActionsCellItem
                    icon={<EditIcon sx={{ color: "#84818A", width: ".87em" }} />}
                    label="Edit"
                    // onClick={() => handleEdit(params.id)}
                />,
            ],
        },
    ]
    const [rows, setRows] = useState<any>([])
    const [loading, setLoading] = useState(true)
    const [totalRows, setTotalRows] = useState(0)
    const [paginationModel, setPaginationModel] = useState({
        page: 1,
        pageSize: 8
    })
    
    useEffect(() => {
        getUsers(paginationModel, setRows, setTotalRows, setLoading)
    }, [paginationModel])

    
    const noButtonRef = React.useRef<HTMLButtonElement>(null);
    const [promiseArguments, setPromiseArguments] = React.useState<any>(null);
    const [snackbar, setSnackbar] = React.useState<Pick<
        AlertProps,
        'children' | 'severity'
    > | null>(null);

    const handleCloseSnackbar = () => setSnackbar(null);

    const processRowUpdate = React.useCallback(
        (newRow: GridRowModel, oldRow: GridRowModel) =>
          new Promise<GridRowModel>((resolve, reject) => {
            const mutation = computeMutation(newRow, oldRow);
            if (mutation) {
              // Save the arguments to resolve or reject the promise later
              setPromiseArguments({ resolve, reject, newRow, oldRow });
            } else {
              resolve(oldRow); // Nothing was changed
            }
          }),
        [],
    );

    const handleNo = () => {
        const { oldRow, resolve } = promiseArguments;
        resolve(oldRow); // Resolve with the old row to not update the internal state
        setPromiseArguments(null);
      };
    
      const handleYes = async () => {
        const { newRow, oldRow, reject, resolve } = promiseArguments;
    
        try {
          // Make the HTTP request to save in the backend
          console.log(newRow)
          const response = updateUser(newRow.id, newRow);
          setSnackbar({ children: 'User successfully saved', severity: 'success' });
          resolve(response);
          setPromiseArguments(null);
        } catch (error) {
          setSnackbar({ children: "Role can't be empty", severity: 'error' });
          reject(oldRow);
          setPromiseArguments(null);
        }
    };

    const handleEntered = () => {
        // The `autoFocus` is not used because, if used, the same Enter that saves
        // the cell triggers "No". Instead, we manually focus the "No" button once
        // the dialog is fully open.
        // noButtonRef.current?.focus();
    };

    const renderConfirmDialog = () => {
        if (!promiseArguments) {
            return null;
        }

        const { newRow, oldRow } = promiseArguments;
        const mutation = computeMutation(newRow, oldRow);

        return (
            <Dialog
            maxWidth="xs"
            TransitionProps={{ onEntered: handleEntered }}
            open={!!promiseArguments}
            >
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogContent dividers>
                {`Pressing 'Yes' will change ${mutation}.`}
            </DialogContent>
            <DialogActions>
                <Button ref={noButtonRef} onClick={handleNo}>
                No
                </Button>
                <Button onClick={handleYes}>Yes</Button>
            </DialogActions>
            </Dialog>
        );
    };

    return (
        <Dashboard>
            {renderConfirmDialog()}
            {!!snackbar && (
                <Snackbar open onClose={handleCloseSnackbar} autoHideDuration={6000}>
                    <Alert {...snackbar} onClose={handleCloseSnackbar} />
                </Snackbar>
            )}
            <Table
                columns={columns as any}
                rows={rows}
                handleOpenActionForm={() => {}}
                loading={loading}
                totalRows={totalRows}
                paginationModel={{ page: paginationModel.page - 1, pageSize: paginationModel.pageSize }}
                setPaginationModel={setPaginationModel}
                processRowUpdate={processRowUpdate}
            />
        </Dashboard>
    )
}

export default UsersManagement