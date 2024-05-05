// App.test.tsx
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'; // Import the Provider
import { store } from './store'; // Import your Redux store
import { MemoryRouter } from 'react-router-dom'; // Use MemoryRouter for testing navigation
import { Pokemon } from './Pokemon';
// Mocking the useGetPokemonsQuery hook
jest.mock('./services/reduxHooks', () => {
    return {
        useGetPokemonByIdQuery: () => {
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
                    "weight": 130,
                    "height": 10,
                    "types": [
                        {
                            "slot": 1,
                            "type": {
                                "name": "grass",
                                "url": "https://pokeapi.co/api/v2/type/12/"
                            }
                        },
                        {
                            "slot": 2,
                            "type": {
                                "name": "poison",
                                "url": "https://pokeapi.co/api/v2/type/4/"
                            }
                        }
                    ],
                },
                isLoading: false,
                isSuccess: true,
                isError: false,
                error: null,
                refetch: jest.fn()
            }
        },


    };
});
describe('App', () => {
    it("display the List and find pokemons", async () => {
        render(<Provider store={store}><MemoryRouter ><Pokemon /></MemoryRouter></Provider>);
        // Expect the header text to be rendered
        // Wait for data to be loaded
        expect(screen.getByText('grass')).toBeInTheDocument();
        expect(screen.getByText('poison')).toBeInTheDocument();

    })

});
