import React from 'react'

function PokeCards( { pokeData, pokeDataLocalStorage }) {

  
  return (
    <ul className='pokeCards-parent-container'>
        
        
        {
        
          pokeData ?
          pokeData.map ( (pokemon, index) => {
            return (
              <li
                key={index}
                id={pokemon.id}
              >
                <img src={ pokemon.sprites.back_default } alt=''  />
              </li>
            )
          })

          : 

          pokeDataLocalStorage.map ( (pokemon, index) => {
            return (
              <li
                key={index}
                id={pokemon.id}
              >
                <img src={ pokemon.sprites.back_default } alt=''  />
              </li>
            )
          })
        
        }

    </ul>
  )
}

export default PokeCards;