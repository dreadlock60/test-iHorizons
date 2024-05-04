import * as React from 'react'
import { useGetPokemonByIdQuery } from './services/pokemon'
import type { PokemonName } from './pokemon.data'
import { useNavigate, useParams } from 'react-router-dom';




export const Pokemon = () => {

  let { id } = useParams();
  const navigate = useNavigate()
  const { data, error, isLoading, isFetching, refetch } =
    useGetPokemonByIdQuery(id)

  return (
    <div
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
          <h2 className='header' onClick={() => { navigate('/') }} style={{ cursor: 'pointer' }}>{data.name}</h2> <div
            className='pokemonInfo'>
            <div style={{ minWidth: 96, minHeight: 96 }}>
              <img
                src={data.sprites.front_shiny}
                alt={data.species.name}
                style={{ ...(isFetching ? { opacity: 0.3 } : {}) }}
              />
            </div>
            <div className='row'><b>name : </b> {data.name}</div>
            <div className='row'><b>height : </b> {data.height} cm</div>
            <div className='row'><b>weight : </b> {data.weight} kg</div>

            <div className='row'><b>type : </b>
              <div>{data.types.map((type: any) => <span>{type.type.name} <br /></span>)}</div></div>

          </div></>
      ) : (
        'No Data'
      )}
    </div>
  )
}
