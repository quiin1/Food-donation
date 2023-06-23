import React from 'react'
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import theme from '../theme'

const NavItem = (props) => {
  return (
    <ListItem disablePadding sx={{
        padding: "8px 16px",
        "&:hover": {
            backgroundColor: "#D5EEDB",
            color: "#2BA84A",
            ".MuiListItemIcon-root": {
                color: "#2BA84A"
            }
        },
        "&:focus": {
            backgroundColor: "#D5EEDB",
            color: "#2BA84A",
            ".MuiListItemIcon-root": {
                color: "#2BA84A"
            }
        }
    }}>
        <ListItemButton >
            <ListItemIcon>
                {props.children}
            </ListItemIcon>
            <ListItemText 
                disableTypography={true} 
                primary={props.title} 
                sx={{
                    fontFamily: 'Inter',
                    fontWeight: '600',
                    fontSize: '.8em',
                }}
            />
        </ListItemButton>
    </ListItem>
  )
}

export default NavItem