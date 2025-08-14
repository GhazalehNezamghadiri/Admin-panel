'use client'
import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2'
import { Box } from '@mui/material'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Revenue & Growth',
    }
  }
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

export const data = {
  labels,
  datasets: [
    {
      label: 'Revenue',
      data: [100, 200, 150, 300, 250, 400, 350],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Profit',
      data: [300, 100, 400, 200, 500, 250, 150],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Expenses',
      data: [150, 250, 200, 350, 300, 450, 400],
      borderColor: 'rgb(255, 206, 86)',
      backgroundColor: 'rgba(255, 206, 86, 0.5)',
    },
    {
      label: 'Users',
      data: [200, 150, 300, 100, 400, 350, 500],
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
    }
  ]
}

export default function LineChart() {
  return (
    <Box sx={{ borderRadius: '20px', backgroundColor: '#f5f5f5' , p:{sx:0,md:5}, height:'500px'}}>
      <Box
        sx={{ width: { xs: '100%', },  height: { xs: '300px', }}} >
        <Line options={options} data={data} />
      </Box>
  </Box>
  )
}