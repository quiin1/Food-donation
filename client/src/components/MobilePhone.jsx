import { React, useState } from 'react'
import { Typography, Box, FormControl, Input, Select, MenuItem, InputAdornment } from '@mui/material'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { textStyle1, textStyle2 } from '../theme';

const textStyle = {
  fontWeight: '400',
  fontSize: '.65em',
}

function MobilePhone() {
  const [nationalId, setNationalId] = useState('84')
  const [phoneNumber, setPhoneNumber] = useState('')
  
  function handleNationalIdChange(id) {
    setNationalId(id)
  }

  function handlePhoneNumberChange(phoneNumber) {
    setPhoneNumber(phoneNumber)
  }

  return (
    <Box>
      <Box>
        <Typography mt={'1.5em'} sx={textStyle1}>Enter your phone number</Typography>
        <Typography mt={'.2em'} color={'#353945'} sx={textStyle2}>
          Please enter your mobile phone to join our community
        </Typography>
      </Box>
      <Box mt='.8em' sx={{display: 'flex', alignItems: "center"}}>
        <FormControl>
          <Select
            sx={{ height: '2.2em', mr: '1em', pr: '2em'}}
            id="demo-simple-select-autowidth"
            value={nationalId}
            onChange={e => handleNationalIdChange(e.target.value)}
            IconComponent={KeyboardArrowDownOutlinedIcon}
            autoWidth = {true}
          >
            <MenuItem value={84}>84</MenuItem>
            <MenuItem value={21}>21</MenuItem>
          </Select>
        </FormControl>
        <Input
          sx={textStyle}
          id="standard-adornment-amount"
          startAdornment={<InputAdornment position="start" sx={{color: "#141416"}}>(+{nationalId})</InputAdornment>}
          placeholder='000 000 000'
          disableUnderline={true}
          onChange={e => handlePhoneNumberChange(e.target.value)}
          value={phoneNumber}
        />
      </Box>
    </Box>
  )
}

export default MobilePhone