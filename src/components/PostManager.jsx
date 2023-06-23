import React from 'react'
import { Box, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import { PostButton } from './MUIComponents'

const PostManager = () => {
    const columns = [
        { field: 'id', headerName: 'POST ID', width: 130 },
        { field: 'title', headerName: 'TITLE', width: 300 },
        { field: 'releaseDate', headerName: 'RELEASE DATE', width: 130 },
        { field: 'view', headerName: 'VIEW', type: 'number', width: 100 },
        { field: 'status', headerName: 'STATUS', width: 90 },
    ];
      
    const rows = [
        { id: 9256821912, title: 'Crawford Room, Mortlock Wing....', releaseDate: '15:46.673 02/08/2022', view: 200, status: 'Online' },
        { id: 9256821912, title: 'Crawford Room, Mortlock Wing....', releaseDate: '15:46.673 02/08/2022', view: 200, status: 'Online' },
        { id: 9256821912, title: 'Crawford Room, Mortlock Wing....', releaseDate: '15:46.673 02/08/2022', view: 200, status: 'Online' },
        { id: 9256821912, title: 'Crawford Room, Mortlock Wing....', releaseDate: '15:46.673 02/08/2022', view: 200, status: 'Online' },
        { id: 9256821912, title: 'Crawford Room, Mortlock Wing....', releaseDate: '15:46.673 02/08/2022', view: 200, status: 'Online' },
        { id: 9256821912, title: 'Crawford Room, Mortlock Wing....', releaseDate: '15:46.673 02/08/2022', view: 200, status: 'Online' },
        { id: 9256821912, title: 'Crawford Room, Mortlock Wing....', releaseDate: '15:46.673 02/08/2022', view: 200, status: 'Online' },
        { id: 9256821912, title: 'Crawford Room, Mortlock Wing....', releaseDate: '15:46.673 02/08/2022', view: 200, status: 'Online' },
        { id: 9256821912, title: 'Crawford Room, Mortlock Wing....', releaseDate: '15:46.673 02/08/2022', view: 200, status: 'Online' },
        { id: 9256821912, title: 'Crawford Room, Mortlock Wing....', releaseDate: '15:46.673 02/08/2022', view: 200, status: 'Online' },
        { id: 9256821912, title: 'Crawford Room, Mortlock Wing....', releaseDate: '15:46.673 02/08/2022', view: 200, status: 'Online' },
        { id: 9256821912, title: 'Crawford Room, Mortlock Wing....', releaseDate: '15:46.673 02/08/2022', view: 200, status: 'Online' },
        { id: 9256821912, title: 'Crawford Room, Mortlock Wing....', releaseDate: '15:46.673 02/08/2022', view: 200, status: 'Online' },
        { id: 9256821912, title: 'Crawford Room, Mortlock Wing....', releaseDate: '15:46.673 02/08/2022', view: 200, status: 'Online' },
        { id: 9256821912, title: 'Crawford Room, Mortlock Wing....', releaseDate: '15:46.673 02/08/2022', view: 200, status: 'Online' },
        { id: 9256821912, title: 'Crawford Room, Mortlock Wing....', releaseDate: '15:46.673 02/08/2022', view: 200, status: 'Online' },
        { id: 9256821912, title: 'Crawford Room, Mortlock Wing....', releaseDate: '15:46.673 02/08/2022', view: 200, status: 'Online' },
        { id: 9256821912, title: 'Crawford Room, Mortlock Wing....', releaseDate: '15:46.673 02/08/2022', view: 200, status: 'Online' },
        { id: 9256821912, title: 'Crawford Room, Mortlock Wing....', releaseDate: '15:46.673 02/08/2022', view: 200, status: 'Online' },
        { id: 9256821912, title: 'Crawford Room, Mortlock Wing....', releaseDate: '15:46.673 02/08/2022', view: 200, status: 'Online' },
    ];

    return (
        <Box>
            <Box display="flex" justifyContent="space-between">
                <Typography sx={{
                    color: "#2E2C34", 
                    fontFamily: "Inter", 
                    fontWeight: "600",
                    fontSize: "1.5em"
                }}>
                    Post Management
                </Typography>
                <PostButton>+ New post</PostButton>
            </Box>
            <Box mt="1.3em" sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                />
            </Box>
        </Box>
    )
}

export default PostManager