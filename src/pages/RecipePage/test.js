import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RecipePage from '.';

describe('Recipe Page', () => {
  beforeEach(() => {
    renderWithReduxProvider(<RecipePage />);
  });

      test('it renders a heading', () => {
            expect(screen.getByRole('heading').textContent).toBe('Loading . . .');
        })
    })
