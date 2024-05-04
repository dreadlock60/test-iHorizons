import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { PokemonName } from '../pokemon.data'
import { REHYDRATE } from 'redux-persist'
import { Action } from '@reduxjs/toolkit'

type RootState = any // normally inferred from state
function isHydrateAction(action: Action): action is Action<typeof REHYDRATE> & {
  key: string
  payload: RootState
  err: unknown
} {
  return action.type === REHYDRATE
}
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  extractRehydrationInfo(action, { reducerPath }): any {
    if (isHydrateAction(action)) {
      // when persisting the api reducer
      if (action.key === 'key used with redux-persist') {
        return action.payload
      }

      // When persisting the root reducer
      return action.payload[pokemonApi.reducerPath]
    }
  },
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name: PokemonName) => `pokemon/${name}`,
    }),
    getPokemonById: builder.query({
      query: (id?: string) => `pokemon/${id}`,
    }),
    getPokemons: builder.query({
      query: () => `pokemon/`,
    }),
  }),
})

// Export hooks for usage in functional components
export const { useGetPokemonByNameQuery, useGetPokemonsQuery, useGetPokemonByIdQuery } = pokemonApi
