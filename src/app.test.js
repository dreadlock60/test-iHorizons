import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';
import { useGetPokemonsQuery } from './services/pokemon';
import { MemoryRouter, Route, Router } from 'react-router-dom';
import { store } from './store';

jest.mock('./services/pokemon');
function Wrapper(props) {
    return <Provider store={store}>{props.children}</Provider>;
}
describe('App', () => {
    beforeEach(() => {
        useGetPokemonsQuery.mockClear();
    });

    it('should render data after API request', async () => {

        useGetPokemonsQuery.mockReturnValueOnce({
            data: {},
            isLoading: false,
            isSuccess: true,
            isError: false,
            error: null,
        });

        renderWithProviders(<App />)

        // Check that loading state is not displayed
        expect(screen.queryByText('Loading...')).toBeNull();

        // Check that data is displayed correctly
        expect(screen.getByText('bulbasaur')).toBeInTheDocument();
        expect(screen.getByText('ivysaur')).toBeInTheDocument();
    });
});