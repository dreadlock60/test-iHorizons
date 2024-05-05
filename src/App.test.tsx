// App.test.tsx
import '@testing-library/jest-dom'
import React from 'react';
import { render, screen, act, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux'; // Import the Provider
import fetchMock from 'fetch-mock';
import App from './App';
import { store } from './store'; // Import your Redux store
import { PokemonCard } from './PokemonCard';
import { MemoryRouter } from 'react-router-dom'; // Use MemoryRouter for testing navigation
import { pokemonApi } from './services/pokemon';
// Mocking the useGetPokemonsQuery hook
jest.mock('./services/reduxHooks', () => {
    return {
        useGetPokemonByNameQuery: () => {
            return {
                data: {

                    "name": "ivysaur",
                    "order": 2,
                    "past_abilities": [],
                    "past_types": [],
                    "species": {
                        "name": "ivysaur",
                        "url": "https://pokeapi.co/api/v2/pokemon-species/2/"
                    },
                    "sprites": {
                        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png",
                        "back_female": null,
                        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/2.png",
                        "back_shiny_female": null,
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
                        "front_female": null,
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png",
                        "front_shiny_female": null,
                    },
                    "weight": 130
                },
                isLoading: false,
                isSuccess: true,
                isError: false,
                error: null,
                refetch: jest.fn()
            }
        },
        useGetPokemonsQuery: () => {
            return {
                data: {
                    "count": 1302,
                    "next": "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20",
                    "previous": null,
                    "results": [
                        {
                            "name": "bulbasaur",
                            "url": "https://pokeapi.co/api/v2/pokemon/1/"
                        },
                        {
                            "name": "ivysaur",
                            "url": "https://pokeapi.co/api/v2/pokemon/2/"
                        },
                        {
                            "name": "venusaur",
                            "url": "https://pokeapi.co/api/v2/pokemon/3/"
                        },
                        {
                            "name": "charmander",
                            "url": "https://pokeapi.co/api/v2/pokemon/4/"
                        },
                        {
                            "name": "charmeleon",
                            "url": "https://pokeapi.co/api/v2/pokemon/5/"
                        },
                        {
                            "name": "charizard",
                            "url": "https://pokeapi.co/api/v2/pokemon/6/"
                        },
                        {
                            "name": "squirtle",
                            "url": "https://pokeapi.co/api/v2/pokemon/7/"
                        },
                        {
                            "name": "wartortle",
                            "url": "https://pokeapi.co/api/v2/pokemon/8/"
                        },
                        {
                            "name": "blastoise",
                            "url": "https://pokeapi.co/api/v2/pokemon/9/"
                        },
                        {
                            "name": "caterpie",
                            "url": "https://pokeapi.co/api/v2/pokemon/10/"
                        },
                        {
                            "name": "metapod",
                            "url": "https://pokeapi.co/api/v2/pokemon/11/"
                        },
                        {
                            "name": "butterfree",
                            "url": "https://pokeapi.co/api/v2/pokemon/12/"
                        },
                        {
                            "name": "weedle",
                            "url": "https://pokeapi.co/api/v2/pokemon/13/"
                        },
                        {
                            "name": "kakuna",
                            "url": "https://pokeapi.co/api/v2/pokemon/14/"
                        },
                        {
                            "name": "beedrill",
                            "url": "https://pokeapi.co/api/v2/pokemon/15/"
                        },
                        {
                            "name": "pidgey",
                            "url": "https://pokeapi.co/api/v2/pokemon/16/"
                        },
                        {
                            "name": "pidgeotto",
                            "url": "https://pokeapi.co/api/v2/pokemon/17/"
                        },
                        {
                            "name": "pidgeot",
                            "url": "https://pokeapi.co/api/v2/pokemon/18/"
                        },
                        {
                            "name": "rattata",
                            "url": "https://pokeapi.co/api/v2/pokemon/19/"
                        },
                        {
                            "name": "raticate",
                            "url": "https://pokeapi.co/api/v2/pokemon/20/"
                        }
                    ]
                },
                isLoading: false,
                isSuccess: true,
                isError: false,
                error: null,
                refetch: jest.fn()
            };
        },

    };
});
describe('App', () => {
    it("display the List and find pokemons", async () => {
        render(<Provider store={store}><MemoryRouter ><App /></MemoryRouter></Provider>);
        // Expect the header text to be rendered
        // Wait for data to be loaded
        expect(screen.getByText('ivysaur')).toBeInTheDocument();
        expect(screen.getByText('raticate')).toBeInTheDocument();

    })

});
