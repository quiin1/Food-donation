import React from 'react'
import { CardMedia, FormControl, InputAdornment, OutlinedInput } from '@mui/material'

const SearchBar = (props) => {
  function handleChange() {

  }

  return (
    <FormControl className="searchBar" ml="1em" sx={{
      width: "25em",
    }}>
        <OutlinedInput
          sx={{
            padding: "0 1.2em",
            gap: "4px",
            backgroundColor: "#F4F5F6",
            ml: "1em",
            ".MuiOutlinedInput-notchedOutline": {
              border: "none",
            }
          }}
          size="small"
          onChange={handleChange}
          placeholder="Search a campaign"
          startAdornment={
            <InputAdornment position="start">
              <CardMedia component="img" src="/fi-rr-search.png"/>
            </InputAdornment>
          }
        />
      </FormControl>
  )
}

export default SearchBar