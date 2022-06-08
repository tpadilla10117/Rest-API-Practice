import React from 'react';
import { PokeCards } from '../utils';

function PokeCardList( { pokeData }) {
  return (
    <section className='pokeCardList-parent-container'>
        PokeCardList Component!
        <PokeCards 
            pokeData={pokeData}
        />
    </section>
  )
}

export default PokeCardList;