'use client'
import React, { useState } from 'react'
import { Box, Paper, TextField, Button, Typography, InputAdornment, IconButton } from '@mui/material'
import { Visibility,VisibilityOff } from '@mui/icons-material'

export default function Loginpage() {
    const [email, setEmail] = useState('ghazalehghadiri2@gmail.com')
    const [pass, setPass] = useState('123456')
    const [showpass, setShowpass ] = useState(false)

    const defaultMail = 'ghazalehghadiri2@gmail.com'
    const defaultPass = '123456'

    function Submit(e) {
        e.preventDefault()
        if (email === defaultMail && pass === defaultPass) {
            window.location.href = '/home'
        } else {
            alert('Incorrect password')
        }
    }

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                backgroundColor: "#f5f5f5",
            }}
        >
            <Paper
                sx={{
                    padding: 5,
                    width: 580,
                    borderRadius: 4,
                  
                    textAlign: "center"
                }}
            >
               
                <img
                    src="/ghh.jpg"

                    style={{
                        width: "40%",
                        marginLeft:'30%',
                        marginBottom: 20
                    }}
                />

               
                <Typography
                    variant="h4"
                    component="h1"
                    fontWeight="bold"
                    color="#795549"
                    gutterBottom
                >
                    Welcome!
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={3}>
                    Glad to see you here. Please login to continue.
                </Typography>

                
                <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    margin="normal"
                />
                <TextField
                    label="Password"
                    type={showpass ? 'text' : 'password'}
                    fullWidth
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    margin="normal"

                    InputProps={{
                        endAdornment :(
                            <InputAdornment position='end'>
                                <IconButton onClick={()=>setShowpass(!showpass)}>
                                {showpass ? <VisibilityOff/> : <Visibility/>}

                                </IconButton>
                            </InputAdornment>
                        )
                    }}

                
                />
                <Button
                    variant="contained"
                    fullWidth
                    onClick={Submit}
                    sx={{ mt: 3, py: 1.5, fontWeight: 'bold' , backgroundColor:'#795549'}}
                >
                    Login
                </Button>
            </Paper>
        </Box>
    )
}