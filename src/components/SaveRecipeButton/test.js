import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SaveRecipeButton from '.';

describe('Save Recipe Button', () => {
    beforeEach(() => {
        renderWithReduxProvider(<SaveRecipeButton />, { wrapper: MemoryRouter });
    });

        /*test('it renders a button', () => {
            const button = screen.getByRole('button')
            expect(button.textContent).toContain('save')
        })*/
})