'use client'

import React from "react"
import EmailIcon from '@mui/icons-material/Email'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import { Box, useTheme, useMediaQuery } from "@mui/material"

export default function Info() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const linkStyle = {
        textDecoration: 'none',
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '20px',
        padding: '10px 15px',
        borderRadius: '8px',
        backgroundColor: 'white',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }

    return (
        <Box sx={{
            backgroundColor: '#f5f5f5',
            padding: isMobile ? '20px' : '30px',
            borderRadius: '10px',
            width: isMobile ? '90vw' : '76vw',
            height: 'auto',
            marginLeft: isMobile ? 'auto' : { md: '300px' },
            marginRight: isMobile ? 'auto' : 0,
            marginTop: isMobile ? "60px" : "100px",
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
        }}>
            <h2 style={{
                fontWeight: 'bold',
                fontSize: isMobile ? '28px' : '40px',
                borderBottom: '1px solid #ddd',
                paddingBottom: '10px'
            }}>Profile</h2>

            <Box sx={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                marginTop: '30px',
                gap: isMobile ? '20px' : '40px'
            }}>
                
                <Box sx={{ width: isMobile ? '100%' : '50%' }}>
                    <a href="mailto:ghazalehghadiri2@gmail.com" style={linkStyle}>
                        <EmailIcon style={{ color: '#d93025' }} />
                        ghazalehghadiri2@gmail.com
                    </a>
                    <a href="https://www.instagram.com/ghazale.ghadiri/?hl=en" style={linkStyle}>
                        <InstagramIcon style={{ color: '#e4406f' }} />
                        @ghazale.ghadiri
                    </a>
                    <a href="https://www.linkedin.com/in/ghazaleh-nezamghadiri-06b626302/" style={linkStyle}>
                        <LinkedInIcon style={{ color: '#0a66c2' }} />
                        Ghazaleh Nezamghadiri
                    </a>
                    <a href="https://github.com/GhazalehNezamghadiri" style={linkStyle}>
                        <GitHubIcon style={{ color: 'black' }} />
                        Ghazaleh Nezamghadiri
                    </a>
                </Box>

                <Box sx={{
                    width: isMobile ? '100%' : '50%',
                    backgroundColor: 'white',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                    <h2 style={{ fontWeight: 'bold', fontSize: isMobile ? '20px' : '23px', marginBottom: '10px' }}>About me</h2>
                    <p style={{ marginTop: '10px', lineHeight: '1.6', color: '#444', fontSize: isMobile ? '14px' : '16px' }}>
                        Hi, my name is Ghazaleh Nezamghadiri. I’m currently learning front-end development
                        and exploring the world of web technologies. I enjoy building clean and interactive
                        user interfaces, and I’m always excited to learn new tools and frameworks. My goal is
                        to improve my skills every day and eventually work on creative projects that make a
                        real impact.
                    </p>
                </Box>
            </Box>
        </Box>
    )
}