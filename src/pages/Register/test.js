import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Register from '.';

describe('Register', () => {
    beforeEach(() => {
        render(<Register />, { wrapper: MemoryRouter });
    });

      test('it renders a heading', () => {
            expect(screen.getByRole('heading').textContent).toBe('Register');
        })
    })
