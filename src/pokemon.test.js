
import { render, screen } from '@testing-library/react';
import { useGetPokemonById } from './services/pokemon';
import { store } from './store';
import { Pokemon } from './Pokemon';

jest.mock('./services/pokemon');

describe('Pokemon', () => {
    beforeEach(() => {
        useGetPokemonById.mockClear();
    });

    it('should render data after API request', async () => {

        useGetPokemonById.mockReturnValueOnce({
            data: "1",
            isLoading: false,
            isSuccess: true,
            isError: false,
            error: null,
        });

        renderWithProviders(<Pokemon />)

        // Check that loading state is not displayed
        expect(screen.queryByText('Loading...')).toBeNull();

        // Check that data is displayed correctly
        expect(screen.getByText('name :bulbasaur')).toBeInTheDocument();
        expect(screen.getByText('height :7 cm')).toBeInTheDocument();
    });
});