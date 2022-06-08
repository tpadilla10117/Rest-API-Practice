import React from 'react'

function PokeCards( { pokeData }) {
  return (
    <ul className='pokeCards-parent-container'>
        {pokeData.map ( (pokemon, index) => {
          return (
            <li
              key={index}
              id={pokemon.id}
            >
              <img src={ pokemon.sprites.back_default } alt=''  />
            </li>
          )
        })}

    </ul>
  )
}

export default PokeCards;