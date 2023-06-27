import React from 'react'
import { Box } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Content from './Content'

const Location = () => {
  const columns=[
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
                  <img src="/Img.png"/>
                  {params.value}
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
  ]
  const rows=[
    { id: 9256821912, address: {img: "", address: '66b Regent St, Redfern NSW 2016'}, location: 'Hamilton', addedDate: '15:46.673 02/08/2022', status: 'Active' },
  ]
  return (
    <Content title="Location Management" data={{'rows': rows, 'columns': columns}}/>
  )
}

export default Location