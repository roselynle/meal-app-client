import { screen } from '@testing-library/react';
import NotFound from '.';

describe('Not Founds', () => {
    test('it renders a header', () => {
        render(<NotFound />)
        expect(screen.getByRole('heading').textContent).toBe('Oops! The page you are looking for cannot be found!');
    })
})