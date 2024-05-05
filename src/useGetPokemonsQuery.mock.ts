// useGetPokemonsQuery.mock.ts
export const useGetPokemonsQueryMock = () => ({
    data: {
        "count": 1302,
        "next": "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20",
        "previous": null,
        "results": [
            // Mock Pokemon data
        ]
    },
    error: undefined,
    isLoading: false,
    isFetching: false,
    refetch: jest.fn(),
});