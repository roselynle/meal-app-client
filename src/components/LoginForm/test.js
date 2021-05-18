import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LoginForm from '.';

describe('Login Form', () => {
    beforeEach(() => {
        render(<LoginForm />, { wrapper: MemoryRouter });
    });

    describe('Login Button', () => {
        test('it renders a login button', () => {
            const login = screen.getByRole('login')
            expect(login).toBeInTheDocument()
        })
    })
        describe('Login inputs', () => {
        test('it renders an input for username and password', () => {
            const input = screen.getAllByRole('login-input')
            expect(input).toHaveLength(2)
        })
    })
})