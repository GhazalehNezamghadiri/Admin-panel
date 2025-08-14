'use client'
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Box } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Browsing', 'Purchasing', 'Adding to card', 'Searching', 'Sharing', 'Leaving Feedback'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export function Doughnutchart() {
  return (
    <Box sx={{width:{md:'50%'},display:'flex', padding:'10px', marginTop:'80px', height: '400px', borderRadius: '20px', backgroundColor: '#f5f5f5',p:5 }}>
        <Doughnut data={data} />
        <h3 style={{fontWeight:'bold',fontSize:'19px', writingMode:'vertical-rl', marginTop:'120px' , color:'rgba(0,0,0,0.6)'}}>User Behavior</h3>
    </Box>
  )
}
