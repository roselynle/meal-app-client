import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RegisterForm from '.';

describe('Register Form', () => {
    beforeEach(() => {
        render(<RegisterForm />, { wrapper: MemoryRouter });
    });

        test('it renders a register button', () => {
            const register = screen.getByRole('register')
            expect(register).toBeInTheDocument()
        })

        test('it renders an input for username, password and email', () => {
            const input = screen.getAllByRole('register-input')
            expect(input).toHaveLength(3)
        })

        test("shows error on unsuccesful registration", () => {
        const register = screen.getByRole('register')
        userEvent.click(register)
        let error = screen.getByText("Registration unsuccessful - please try another username")
        expect(error).toBeInTheDocument()
// currently not passing
    })
})