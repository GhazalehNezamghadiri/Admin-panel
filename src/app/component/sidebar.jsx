'use client'
import React from 'react'
import Link from 'next/link';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PeopleIcon from '@mui/icons-material/People';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SettingsIcon from '@mui/icons-material/Settings'
import LockIcon from '@mui/icons-material/Lock';
import { useTheme } from './mode';




export default function Sidebar() {
    const {darkMode} = useTheme()
    const iconcolor = darkMode ?'#e0e0e0': '#333333'

    return (
        <>
            <Box className='sidebar' sx={{width:'260px', height:'100vh', position:'fixed', left:0, backgroundColor:darkMode ?'#2b2b2b' : '#f5f5f5',color:darkMode? '#e0e0e0': '#000000', pt:'70px',display:{xs:'none',md:'block',}}}>
                <List>
                    <ListItem button component={Link} href={'/home'}>
                        <ListItemIcon><HomeIcon sx={{color:iconcolor}} /></ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>

                    <ListItem button component={Link} href={'/products'}>
                        <ListItemIcon><StorefrontIcon sx={{color:iconcolor}} /></ListItemIcon>
                        <ListItemText primary="Products" />
                    </ListItem>

                    <ListItem button component={Link} href={'/users'}>
                        <ListItemIcon><PeopleIcon sx={{color:iconcolor}}/></ListItemIcon>
                        <ListItemText primary="Users" />
                    </ListItem>

                    <ListItem button component={Link} href={'/analytics'}>
                        <ListItemIcon><AnalyticsIcon sx={{color:iconcolor}} /></ListItemIcon>
                        <ListItemText primary="Analytics" />
                    </ListItem>

                    <ListItem button component={Link} href={'/setting'}>
                        <ListItemIcon><SettingsIcon sx={{color:iconcolor}} /></ListItemIcon>
                        <ListItemText primary="Setting" />
                    </ListItem>

                    <ListItem button component={Link} href={'/'}>
                        <ListItemIcon><LockIcon sx={{color:iconcolor}} /></ListItemIcon>
                        <ListItemText primary="Login" />
                    </ListItem>

                </List>
            </Box>
        </>
    )
}
