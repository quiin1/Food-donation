import React, { ReactNode } from 'react'
import { Box, CardMedia, FormControl, InputAdornment, OutlinedInput } from '@mui/material'
import { useSelector } from 'react-redux'
import { searchPlaceholderSelector } from '../../../redux/selectors'
import { subpageSelector } from '../../../redux/selectors'
import searchIcon from '../../../assets/dashboard/fi-rr-search.svg'

const SearchBar: React.FC = () => {
  function handleChange() {
    // console.log("123")
  }
  const placeholder = useSelector(searchPlaceholderSelector)

  return (
    <Box className="searchBar" ml="1em" sx={{ width: {xs: "15em", sm: "25em"} }}>
        <OutlinedInput
          sx={{
            padding: "0 1.2em",
            gap: "4px",
            backgroundColor: "#F4F5F6",
            ml: "1em",
            ".MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "::placeholder": {
              color: "#353945",
              /* Base */
              fontSize: "16px",
              fontFamily: "Inter",
              fontWeight: 400,
              // line-height: 150%
            }
          }}
          size="small"
          onChange={handleChange}
          placeholder={placeholder}
          startAdornment={
            <InputAdornment position="start">
              <CardMedia component="img" src={searchIcon}/>
            </InputAdornment>
          }
        />
      </Box>
  )
}

export default SearchBar