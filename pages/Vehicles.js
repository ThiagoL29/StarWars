import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import axios from 'axios';

function Vehicles() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("https://swapi.dev/api/vehicles")
        .then((response) => {
            setPosts(response.data.results);
        }).catch((error) => {
            console.log(error);
        })

    }, []);

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
            <Box className="legenda">Nome - Fabricante</Box>
            {posts.length === 0 ? (<p>Carregando...</p>) : (
                posts.map((post) => (
                    <Box className="post" key={post.id}>
                        <p><b>{post.name} - {post.manufacturer}</b></p>
                    </Box>
                ))
            )}
  
          </Box>
        </Box>
      </>
    )
}

export default Vehicles;