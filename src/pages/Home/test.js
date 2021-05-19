import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '.';

describe('Home', () => {
    beforeEach(() => {
        render(<Home />, { wrapper: MemoryRouter });
    });

      test('it renders a heading', () => {
            expect(screen.getByRole('heading').textContent).toBe('PlanEat');
        })
    })
