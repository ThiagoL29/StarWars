import React from 'react';

import { Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';

const pages = [
    {
        title: "HOME",
        path: "/",
    },
    {
        title: "FILMES",
        path: "/filmes",
    },
    {
        title: "PESSOAS",
        path: "/pessoas",
    },
    {
        title: "PLANETAS",
        path: "/planetas",
    },
    {
        title: "ESPÉCIES",
        path: "/especies",
    },
    {
        title: "NAVES",
        path: "/naves",
    }, 
    {
        title: "VEÍCULOS",
        path: "/veiculos",
    }

];

export default function Navbar() {

    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    }

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {
                    pages.map(page => (
                        <Box key={page.title} sx={{ margin: "0px 20px", cursor: "pointer" }} onClick={() => handleNavigate(page.path)}>
                            <Typography 
                                variant='h6' 
                                sx={{ 
                                    fontFamily: "Poppins",
                                    fontSize: "12px",
                                    letterSpacing: "3px",
                                }} 
                            >
                                { page.title }
                            </Typography>
                        </Box>
                    ))
                }
            </Box>
        </>
    )
}
