import React, { useState } from 'react'
import { Box, CardMedia, Menu, MenuItem } from '@mui/material'

const MyAvatar = () => {
  return (
    <Box sx={{
      mr: "1em",
      backgroundColor: "#D5EEDB",
      borderRadius: '50%',
    }}>
      <CardMedia component="img" src="/avatar.png" sx={{
        width: "2.3em",
        borderRadius: '50%'
      }}/>
    </Box>
  )
}

export default MyAvatar