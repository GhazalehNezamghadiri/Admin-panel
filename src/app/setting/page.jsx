import React from 'react'
import Header from '../component/header'
import Sidebar from '../component/sidebar'
import Info from '../component/setting'
import { Box } from '@mui/material'

export default function page() {
  return (
    <>
    <Header/>
    <Box sx={{display:'flex'}}>
      <Sidebar/>
      <Box sx={{p:3}}>
        <Info/>
        
      </Box>
    </Box>
    </>
  )
}
