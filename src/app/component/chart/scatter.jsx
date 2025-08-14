import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import { Box } from '@mui/material';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    tooltip: {
      callbacks: {
        label: context => `X: ${context.parsed.x}, Y: ${context.parsed.y}`,
      },
    },
  },
  scales: {
    x: {
      min: 0,
      max: 40,
      title: { display: true, text: 'Seconds' },
    },
    y: {
      min: 0,
      max: 15,
      title: { display: true, text: 'Views' },
    },
  },
};

export const data = {
  datasets: [
    {
      label: 'Website',
      data: [
        { x: 16.4, y: 5.4 },
        { x: 21.7, y: 4 },
        { x: 25.4, y: 3 },
        { x: 19, y: 2 },
        { x: 10.9, y: 1 },
        { x: 13.6, y: 3.2 },
        { x: 10.9, y: 7 },
        { x: 10.9, y: 8.2 },
        { x: 16.4, y: 4 },
        { x: 13.6, y: 4.3 },
        { x: 13.6, y: 12 },
        { x: 29.9, y: 3 },
        { x: 10.9, y: 5.2 },
        { x: 16.4, y: 6.5 },
        { x: 10.9, y: 8 },
        { x: 24.5, y: 7.1 },
        { x: 8.1, y: 4.7 },
        { x: 19, y: 10 },
        { x: 27.1, y: 10 },
        { x: 29.9, y: 11.5 },
      ],
      backgroundColor: '#1E88E5',
    },
    {
      label: 'Instagram',
      data: [
        { x: 6.4, y: 5.4 },
        { x: 11.7, y: 4 },
        { x: 15.4, y: 3 },
        { x: 9, y: 2 },
        { x: 10.9, y: 11 },
        { x: 20.9, y: 7 },
        { x: 12.9, y: 8.2 },
        { x: 6.4, y: 14 },
        { x: 11.6, y: 12 },
      ],
      backgroundColor: '#E91E63',
    },
    {
      label: 'Google Ads',
      data: [
        { x: 5, y: 2 },
        { x: 8, y: 5 },
        { x: 12, y: 6 },
        { x: 15, y: 4 },
        { x: 18, y: 8 },
        { x: 22, y: 9 },
        { x: 26, y: 7 },
        { x: 30, y: 11 },
        { x: 35, y: 10 },
      ],
      backgroundColor: '#00B894',
    },
  ],
};

export function ScatterChart() {
  return (
  <Box sx={{borderRadius: '20px', backgroundColor: '#f5f5f5',p:6 ,}}>
      <Box sx={{width:{xs:'90%', lg:'100%'}}}>
      <Scatter options={options} data={data} />
    </Box>
  </Box>

  )
}