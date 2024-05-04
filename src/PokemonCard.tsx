import * as React from 'react'
import { useGetPokemonByNameQuery } from './services/pokemon'
import type { PokemonName } from './pokemon.data'
import { useNavigate } from 'react-router-dom'




export const PokemonCard = ({ name }: { name: PokemonName }) => {
  const navigate = useNavigate()

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
          <h3>{data.species.name}</h3>
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
