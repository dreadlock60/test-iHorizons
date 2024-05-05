import * as React from 'react'
import type { PokemonName } from './pokemon.data'
import { useNavigate } from 'react-router-dom'
import { useGetPokemonByNameQuery } from './services/reduxHooks'




export const PokemonCard = ({ name, navigate }: { name: PokemonName, navigate: any }) => {


  const { data, error, isLoading, isFetching, refetch } =
    useGetPokemonByNameQuery(name)

  return (
    <div
      className='card'
      onClick={() => {
        navigate('/pokemon/' + data.id)
      }}
      style={{
        ...(isFetching ? { background: '#e6ffe8' } : {}),
      }}
    >
      {error ? (
        <>Oh no, there was an error loading {name}</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{name}</h3>
          <div style={{ minWidth: 96, minHeight: 96 }}>
            <img
              src={data.sprites.front_shiny}
              alt={data.species.name}
              style={{ ...(isFetching ? { opacity: 0.3 } : {}) }}
            />
          </div>


        </>
      ) : (
        'No Data'
      )}
    </div>
  )
}
