import { render, screen } from '@testing-library/react';
import RecipeCards from '.';

describe('Recipe Cards', () => {
  beforeEach(() => {
    renderWithReduxProvider(<RecipeCards />)
  });
  
        test('it renders a button', () => {
            const button = screen.getByRole('button')
            expect(button.textContent).toContain('See recipe here!')
        })
})