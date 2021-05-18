import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LoginForm from '.';

describe('Login Form', () => {
    beforeEach(() => {
        render(<LoginForm />, { wrapper: MemoryRouter });
    });

    describe('Login Button', () => {
        test('it renders a login button', () => {
            const button = screen.getByRole('button')
            expect(button.textContent).toContain('Login')
        })
    })
})