import React, { useState } from 'react'

//Import container components
import Container from "../components/Container";
import SearchBar from "../components/SearchBar";
import Grid from "../components/Grid";

require('dotenv').config()


export default function Home() {
  const [heroes, setHeroes] = useState([])
  
  return (
    <Container>
      <h1>Marvel Hero Search Bar</h1>
      <SearchBar setter={setHeroes} />
      <Grid>
        <div></div>
        <div></div>
        <div></div>
      </Grid>
    </Container>
  );
}
