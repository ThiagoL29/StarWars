import {Typography } from '@mui/material';
import { Box } from '@mui/system';
import  HomeImage  from '../source/images/homeimage.jpg'

export default function Home() {

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection:"column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          textJustify:"inter-word",
        }}
      >
        <Box
          width="60%"
        >
          <Box
            marginBottom="50px"
          >
            <Typography 
              variant="p" 
              sx={{
                lineHeight: "25px",
                fontSize: 24,
                fontFamily: "Poppins"
              }}
            >
              Olá, usuário! Por aqui você consegue ver e entender vários dados sobre Star Wars. Para ter uma ótima experiência, passe pelas categorias ao lado.
            </Typography>
          </Box>
        </Box>
        <img src= {HomeImage} alt="home_image" height='550px'/>
      </Box>
    </>
  )
}
