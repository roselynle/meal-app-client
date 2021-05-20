import { render, screen } from '@testing-library/react';
import Recipes from './index';

describe('Recipes', () => {
  beforeEach(() => {
    renderWithReduxProvider(<Recipes />);
  });

      test('it renders a heading', () => {
        expect(screen.getByRole('heading').textContent).toBe('Recipes');
        })
    
      })