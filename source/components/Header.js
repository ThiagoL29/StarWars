import React from 'react';

import { Grid, Typography } from '@mui/material';
import Navbar from './Navbar';

export default function Header() {

  return (
    <>
      <Grid 
        container 
        spacing={3} 
        direction="column"
      >
        <Grid 
          item 
          sx={{ 
            marginTop: "20px",
          }}
        >
          <Typography 
            variant='h3' 
            align="center" 
            sx={{
              fontFamily: "Anton",
              letterSpacing: "5px",
            }}
          >
            STAR WARS
          </Typography>
        </Grid>
        <Grid 
          item
          sx={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "50px" }}
        >
          <Navbar />
        </Grid>
      </Grid>
    </>
  )
}
