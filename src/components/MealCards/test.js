import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MealCards from '.';

describe('Meal Cards', () => {
    beforeEach(() => {
        render(<MealCards />, { wrapper: MemoryRouter });
    });

    describe('meal cards', () => {
        test('it renders 7 meal cards for each day', () => {
            const div = screen.getByRole('div')
            expect(div).toHaveLength(7)
        })
    })
})