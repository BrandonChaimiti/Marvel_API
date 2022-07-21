import React, { useState } from 'react'
import { useEffect } from 'react';

// Import hooks
import { useParams } from 'react-router-dom'

//import utils
import { fetchHero } from '../utils/utils'

export default function HeroDetails() {
    let { id } = useParams();
    const IMAGE_SIZE = 'portrait_fantastic'
    
    const [hero, setHero] = useState();

    useEffect(() => {
    fetchHero(id)
    .then(data => setHero(data[0]))
    .catch(err => console.error(err))
    }, []);
    
    if (!hero) return

    return (
      <div className="container large">
        <div className="hero_details-container">
          <img src={`${hero.thumbnail.path}/${IMAGE_SIZE}.${hero.thumbnail.extension}`} alt="hero full size" />
          <div className="hero_details">
            <h4>Name</h4>
            <p>{hero.name}</p>
            {hero.description ? (<>
              <h4>Description</h4>
              <p>{hero.description}</p>
            </>) : null}
            <div className="hero_comics">
              <h4>Comics</h4>
              <ul>
                {hero.comics.items.map((c) => (
                  <li key={Math.random() * 1000}>{c.name}</li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      )

  
}
