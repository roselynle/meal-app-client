import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from '.';

describe('Login', () => {
    beforeEach(() => {
        render(<Login />, { wrapper: MemoryRouter });
    });

      test('it renders a heading', () => {
            expect(screen.getByRole('heading').textContent).toBe('Login');
        })
    })
