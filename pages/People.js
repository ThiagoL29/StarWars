import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import axios from 'axios';

function People() {
    const endpoints = [
      "https://swapi.dev/api/people",
      "https://swapi.dev/api/people/?page=2",
      "https://swapi.dev/api/people/?page=3",
      "https://swapi.dev/api/people/?page=4",
      "https://swapi.dev/api/people/?page=5",
      "https://swapi.dev/api/people/?page=6",
      "https://swapi.dev/api/people/?page=7",
      "https://swapi.dev/api/people/?page=8",
      "https://swapi.dev/api/people/?page=9",
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
            <Box className="legenda">Nome - Nascimento</Box>
            {posts.length === 0 ? (<p>Carregando...</p>) : (
                posts.map((post) => (
                    <Box className="post" key={post.id}>
                        <p><b>{post.name} - {post.birth_year}</b></p>
                    </Box>
                ))
            )}
  
          </Box>
        </Box>
      </>
    )
};

export default People;
