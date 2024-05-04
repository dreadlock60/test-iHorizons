import * as React from 'react'
import { PokemonCard } from './PokemonCard'
import { PokemonName, POKEMON_NAMES } from './pokemon.data'
import './styles.css'
import { useGetPokemonsQuery } from './services/pokemon'


export default function App() {
  const { data, error, isLoading, isFetching, refetch } =
    useGetPokemonsQuery({})
  React.useEffect(() => {
    console.log(data)
  }, [data])
  return (
    <div className="App">

      <h2 className='header'>Poke React</h2>
      <div className='list'>
        {!error && !isFetching && data.results.map((pokemon: any, index: number) => (
          <PokemonCard key={index} name={pokemon.name} />
        ))}
      </div>

    </div>
  )
}
