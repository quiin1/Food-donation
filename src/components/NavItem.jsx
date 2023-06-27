import React from 'react'
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"

const NavItem = (props) => {
  return (
    <ListItem 
        disablePadding 
        onClick={props.onClick} 
        sx={{
            padding: "8px 16px",
            ".chosen": {
                color: "#2BA84A",
                backgroundColor: "#D5EEDB"
            },
            "&:hover": {
                ".MuiButtonBase-root": {
                    color: "#2BA84A",
                    backgroundColor: "#D5EEDB"
                },
                ".MuiListItemIcon-root": {
                    color: "#2BA84A"
                }
            } 
        }}
    >
        <ListItemButton className={props.className} >
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