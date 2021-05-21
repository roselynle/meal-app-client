import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from '.';

describe('NavBar', () => {
    test('it renders a navbar', () => {
        render(<NavBar />, { wrapper: MemoryRouter });
        const nav = screen.queryByRole('navigation');
        expect(nav).toBeInTheDocument();
    })
})