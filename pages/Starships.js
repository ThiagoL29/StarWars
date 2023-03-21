import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import axios from 'axios';

function Starships() {
    const endpoints = [
      "https://swapi.dev/api/starships",
      "https://swapi.dev/api/starships/?page=2",
      "https://swapi.dev/api/starships/?page=3",
      "https://swapi.dev/api/starships/?page=4"
    ];

    const requests = endpoints.map((endpoint) => axios.get(endpoint));
    const [posts, setPosts] = useState([]);
    let conArray = [];

    useEffect(() => {
      axios.all(requests)
      .then((responses) => {
          responses.forEach((resp) => {
            conArray = conArray.concat(resp.data.results);
          });
          setPosts(conArray);
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

export default Starships;
