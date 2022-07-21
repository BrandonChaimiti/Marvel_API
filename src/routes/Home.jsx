import React, { useState } from 'react'

//Import container components
import Container from "../components/Container"
import SearchBar from "../components/SearchBar"
import Grid from "../components/Grid"
import Card from "../components/Card"

require('dotenv').config()

const IMAGE_SIZE = 'portrait_fantastic'

export default function Home() {
  const [heroes, setHeroes] = useState([])
  
  let cards;

  if (heroes) {
    cards = heroes.map((hero) => (
      <Card name={hero.name} id={hero.id} key={hero.id} thumbnail={`${hero.thumbnail.path}/${IMAGE_SIZE}.${hero.thumbnail.extension}`} />
    ))
  }

  return (
    <Container>
      <h1>Marvel Hero Search Bar</h1>
      <SearchBar setter={setHeroes} />
      <Grid>{cards ? cards : ''}</Grid>
    </Container>
  );
}
