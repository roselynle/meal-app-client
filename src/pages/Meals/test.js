import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Meals from '.';

describe('Meals', () => {
    test('it renders a header', () => {
        render(<Meals />, { wrapper: MemoryRouter })
        expect(screen.getByRole('heading').textContent).toBe('Here are your meals for the week:');
    })
})
