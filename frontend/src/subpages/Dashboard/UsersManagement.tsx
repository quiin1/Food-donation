import React, { useEffect, useState } from 'react'
import { Alert, AlertProps, Autocomplete, Box, Checkbox, Snackbar, TextField, darken, lighten, styled } from '@mui/material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import SaveIcon from '@mui/icons-material/Save';
import { palette } from '../../theme'

import Dashboard from '../../pages/Dashboard'
import Table from '../../components/Dashboard/Table/Table'

import { getUsers, updateUser } from '../../api'

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const GroupHeader = styled('div')(({ theme }) => ({
    // position: 'sticky',
    top: '-8px',
    padding: '4px 10px',
    color: theme.palette.primary.main,
    backgroundColor:
      theme.palette.mode === 'light'
        ? lighten(theme.palette.primary.light, 0.85)
        : darken(theme.palette.primary.main, 0.8),
}));

const GroupItems = styled('ul')({
padding: 0,
});
  
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
            width: 390,
            renderCell: (params1: any) => {
                return (
                    <Autocomplete
                        multiple
                        id="checkboxes-tags-demo"
                        options={['admin', 'post-manager', 'location', 'reward', 'payment-record']}
                        value={params1.value}
                        disableCloseOnSelect
                        getOptionLabel={(option) => option}
                        renderOption={(props, option, { selected }) => (
                            <li {...props}>
                                <Checkbox
                                    icon={icon}
                                    checkedIcon={checkedIcon}
                                    style={{ marginRight: 8 }}
                                    checked={selected}
                                />
                                {option}
                            </li>
                        )}
                        style={{ width: 500, height: 'auto' }}
                        groupBy={(option) => option === 'admin' ? 'admin' : 'user'}
                        renderInput={(params) => (
                            <TextField {...params} placeholder='Role'/>
                        )}
                        renderGroup={(params) => (
                            <li key={params.key}>
                                <GroupHeader>{params.group}</GroupHeader>
                                <GroupItems>{params.children}</GroupItems>
                            </li>
                        )}
                        onChange={(e, newRoles) => {
                            console.log("New", newRoles)
                            handleChangeRole(params1.id, newRoles)
                        }}
                    />
                )
            }
        },
        // {
        //     field: 'role',
        //     headerName: 'USER ROLE',
        //     width: 450,
        //     editable: true,
        //     type: 'multi-select',
        //     valueOptions: ['admin', 'post-manager', 'location', 'reward', 'payment-record'],
        //     renderCell: (params: any) => {
        //         return (
        //             <Autocomplete
        //                 multiple
        //                 fullWidth
        //                 size="medium"
        //                 options={[
        //                     'admin', 
        //                     'post-manager', 
        //                     'location', 
        //                     'reward', 
        //                     'payment-record'
        //                 ]}
        //                 renderInput={(params) => <TextField {...params} variant="standard" />}
        //                 onChange={(e, nv) => console.log("New", nv)}
        //             />
        //         )
        //     }
        // },
        {
            field: 'actions',
            headerName: 'ACTIONS',
            type: 'actions',
            align: 'right',
            getActions: (params: { id: string }) => [
                <GridActionsCellItem
                    icon={<SaveIcon sx={{ color: "#84818A", width: "1em", ":hover": {color: palette.green} }} />}
                    label="Save"
                    onClick={() => handleUpdateRole(params.id)}
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

    const [snackbar, setSnackbar] = React.useState<Pick<
        AlertProps,
        'children' | 'severity'
    > | null>(null);
    const handleCloseSnackbar = () => setSnackbar(null);

    const handleChangeRole = (id: string, newRoles: any) => {
        const indexToUpdate = rows.findIndex((item: any) => item.id === id)
        if (indexToUpdate >= 0 && indexToUpdate < rows.length) {
            /**
             * front-end
             */
            const updatedRow = {...rows[indexToUpdate], role: newRoles}
            
            const newRows = rows.map((item: any, index: number) =>
                index === indexToUpdate ? updatedRow : item
            )
            setRows(newRows)
        } else {
            console.log('Invalid index');
        }
    }

    const handleUpdateRole = (id: string) => {
        const indexToUpdate = rows.findIndex((item: any) => item.id === id)
        if (indexToUpdate >= 0 && indexToUpdate < rows.length) {
            /**
             * front-end
             */
            try {
                console.log(rows[indexToUpdate])
                updateUser(rows[indexToUpdate].id, rows[indexToUpdate])
                setSnackbar({ children: 'User successfully saved', severity: 'success' });
            } catch (error) {
                setSnackbar({ children: "Role can't be empty", severity: 'error' });
            }
        } else {
            console.log('Invalid index');
        }
    }

    return (
        <Dashboard>
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
            />
        </Dashboard>
    )
}

export default UsersManagement