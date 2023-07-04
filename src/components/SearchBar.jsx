import React, { useEffect } from 'react'
import { CardMedia, FormControl, InputAdornment, OutlinedInput } from '@mui/material'
import { useSelector } from 'react-redux'
import { searchPlaceholderSelector } from '../redux/selectors'
import { subpageSelector } from '../redux/selectors'

const SearchBar = () => {
  function handleChange() {
    console.log("123")
  }
  const placeholder = useSelector(searchPlaceholderSelector)

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
              <CardMedia component="img" src="/fi-rr-search.svg"/>
            </InputAdornment>
          }
        />
      </FormControl>
  )
}

export default SearchBar