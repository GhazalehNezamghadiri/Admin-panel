import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Box } from '@mui/material';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
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
      text: 'Monthly Data Overview',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Traffic',
      data: [120, 450, 300, 600, 250, 800, 400],
      backgroundColor: 'rgba(54, 162, 235, 0.8)',
    },
    {
      label: 'Conversions',
      data: [200, 300, 500, 400, 700, 650, 300],
      backgroundColor: 'rgba(255, 206, 86, 1)',
    },
    {
      label: 'Signups',
      data: [150, 500, 400, 550, 600, 700, 450],
      backgroundColor: 'rgba(255, 105, 180, 0.8)',
    },
    {
      label: 'Retention',
      data: [180, 350, 450, 500, 550, 600, 500],
      backgroundColor: 'rgba(75, 192, 192, 0.8)',
    },
  ],
};

export function BarChart() {
  return (
    <Box sx={{ borderRadius: '20px', backgroundColor: '#f5f5f5', width: '100%' , p:5 , height:{xs:'400px',md:'600px'}}} >
      <Box >
        <Bar options={options} data={data} />
      </Box>
    </Box>
  )
}