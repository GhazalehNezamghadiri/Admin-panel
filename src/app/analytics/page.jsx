import React from 'react'
import Header from '../component/header'
import Sidebar from '../component/sidebar'
import VisitorCards from '../component/card'
import { Doughnutchart } from '../component/chart/doughnutChart'
import { Areachart } from '../component/chart/areaChart'
import { Box } from '@mui/material'

export default function page() {
  return (
    <>
      <Header />
      <Box sx={{ display: 'flex',width:'98vw' }}>
        <Sidebar />
        <Box sx={{ marginLeft:{md:'300px'}, p:2, width:'100%'}}>
          <Box sx={{ display: 'flex', justifyItems: 'center' , flexWrap:'wrap' ,pr:{md:8 ,lg:0} , width:'100%'}}>
            <VisitorCards />
            <Doughnutchart />
          </Box>    
         <Box sx={{width:'100%' ,}}>
           <Areachart />
         </Box>
        </Box>
      </Box>
    </>
  )
}

