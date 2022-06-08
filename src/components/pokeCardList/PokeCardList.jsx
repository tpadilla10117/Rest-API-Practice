import React from 'react';
import { PokeCards } from '../utils';

function PokeCardList( { pokeData, pokeDataLocalStorage }) {
  return (
    <section className='pokeCardList-parent-container'>
        PokeCardList Component!
        <PokeCards 
            pokeData={pokeData}
            pokeDataLocalStorage={pokeDataLocalStorage}
        />
    </section>
  )
}

export default PokeCardList;