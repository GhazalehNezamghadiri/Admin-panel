'use client'
import Header from "../component/header"
import Sidebar from "../component/sidebar"
import LineChart from "../component/chart/lineChart"
import { PieChart } from "../component/chart/pieChart"
import { BarChart } from "../component/chart/barChart"
import { ScatterChart } from "../component/chart/scatter"
import StatBoxes from "../component/box"
import RightPanel from "../component/boxright"
import Box from '@mui/material/Box'

export default function page() {
  return (
    <>
      <Header />
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <Sidebar />
        <Box
          component="main"
          sx={{
            ml: { xs: 0, md: '200px' },
            pl: { xs: 0, md: '80px' },
            pt: '80px',
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap',
            justifyContent: { xs: 'center', md: 'flex-start' },
            width: '100vw',
            height: '80dvh',
            

          }}
        >
          <Box sx={{ width: { xs: "100%", md: "90%",lg:'60%'}, height: { xs: 'auto', md: '200px' }, p: '20px' }}>
            <StatBoxes />
          </Box>
          <Box sx={{ width: { xs: "100%", md: "90%", lg:'350px' }, height: 'auto', p: '20px', mt: { xs: '10px', md: '60px', lg: 0 } }}>
            <RightPanel />
          </Box>
          <Box sx={{ width: { xs: "100%",md:'90%',lg:'800px'},height:'auto',p:'20px', }}>
            <LineChart />
          </Box>
          <Box sx={{ width: { xs: "100%", md: "400px" }, height:'auto' , p:'20px',}}>
            <PieChart />
          </Box>
          <Box sx={{ width: { xs: "100%" },height:'auto' , p: '20px' }}>
            <BarChart />
          </Box>
          <Box sx={{ width: { xs: "100%" },  p: '20px' }}>
            <ScatterChart />
          </Box>
        </Box>
      </Box>
    </>
  )
}