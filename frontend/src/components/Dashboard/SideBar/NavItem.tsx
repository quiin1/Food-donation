import React, { ReactNode } from 'react'
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"

interface NavItemProps {
    id: number
    onClick: React.MouseEventHandler<HTMLElement>
    className: string
    children: ReactNode
    title: string
}

const NavItem: React.FC<NavItemProps> = (props) => {
  return (
    <ListItem 
        disablePadding 
        onClick={props.onClick} 
        sx={{
            padding: "8px",
            ".chosen": {
                color: "#2BA84A",
                backgroundColor: "#D5EEDB",
                ".MuiListItemIcon-root": {
                    filter: "invert(58%) sepia(22%) saturate(1478%) hue-rotate(82deg) brightness(87%) contrast(85%)"
                }
            },
            "&:hover": {
                ".MuiButtonBase-root": {
                    color: "#2BA84A",
                    backgroundColor: "#D5EEDB",
                },
                ".MuiListItemIcon-root": {
                    filter: "invert(58%) sepia(22%) saturate(1478%) hue-rotate(82deg) brightness(87%) contrast(85%)"
                }
            } 
        }}
    >
        <ListItemButton 
            className={props.className} 
            sx={{ display: "flex", flexDirection: {xs: "column", md: "row"}}}
        >
            <ListItemIcon>
                {props.children}
            </ListItemIcon>
            <ListItemText
                disableTypography={true} 
                primary={props.title} 
                sx={{
                    display: {xs: "none", md: "block"},
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