'use client'
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Box } from '@mui/material';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Sales Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Sales 1402',
      data: [150, 300, 450, 600, 750, 900, 1050],
      borderColor: 'rgb(0, 102, 204)',
      backgroundColor: 'rgba(0, 102, 204, 0.4)',
    },
    {
      fill: true,
      label: 'Sales 1403',
      data: [200, 350, 500, 800, 950, 1200, 1500],
      borderColor: 'rgb(0, 153, 76)',
      backgroundColor: 'rgba(0, 153, 76, 0.4)',
    },
    {
      fill: true,
      label: 'Sales 1404',
      data: [300, 400, 700, 900, 1100, 1300, 1700],
      borderColor: 'rgb(0, 204, 153)',
      backgroundColor: 'rgba(0, 204, 153, 0.4)',
    },
  ],
};



export function Areachart() {
  return (
    <Box sx={{ marginTop: '20px', height: { md: '600px' }, borderRadius: '20px', backgroundColor: '#f5f5f5', p: 6 }}>
      <Box sx={{ width: { sx: '85%' }, }}>
        <Line options={options} data={data} />
      </Box>
    </Box>
  )
}