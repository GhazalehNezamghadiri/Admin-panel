import React from 'react'
import Header from '../component/header'
import Sidebar from '../component/sidebar'
import Users from '../component/users'
import { Box } from '@mui/material'

export default function page() {
  return (
    <Box  >
    <Header/>
    <Box style={{display:'flex' , width:'98vw'}}>

      <Sidebar/>

      <Box sx={{marginLeft:{md:'300px'} , width:'90% ', mt:9}}>
        <Users/>
      </Box>
    </Box>
    </Box>
  )
}
