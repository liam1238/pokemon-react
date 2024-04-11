import React from 'react';


export default function PokemonList({pokemon}) {
  return (
    <div className='p-3'>
        <h1 className='text-3xl font-bold text-center mb-3'>Pokemons List</h1>
        <div className='text-center'>
            {pokemon.map(p => (
                <div className='underline p-1' key={p}>{p}</div>
            ))}
        </div>
    </div>
  )
}
