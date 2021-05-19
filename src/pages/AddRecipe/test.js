import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AddRecipe from '.';

describe('Add Recipe', () => {
    beforeEach(() => {
        render(<AddRecipe />, { wrapper: MemoryRouter });
    });

      test('it renders a heading', () => {
            expect(screen.getByRole('heading').textContent).toBe('Add a new recipe!');
        })
    })
