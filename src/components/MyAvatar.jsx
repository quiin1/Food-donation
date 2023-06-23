import React, { useState } from 'react'
import { Box, CardMedia, Menu, MenuItem } from '@mui/material'

const MyAvatar = () => {
  const [open, setOpen] = useState(false);

  function handleToggleAvavtar() {
    setOpen((prevOpen) => !prevOpen);
  }

  return (
    <Box onClick={handleToggleAvavtar} sx={{
      mr: "1em",
      backgroundColor: "#D5EEDB",
      borderRadius: '50%',
    }}>
      <CardMedia component="img" src="/avatar.png" sx={{
        width: "2.3em",
        borderRadius: '50%'
      }}/>
      <Menu
        id="fade-menu"
      >
        <MenuItem>Logout</MenuItem>
      </Menu>
    </Box>
  )
}

export default MyAvatar