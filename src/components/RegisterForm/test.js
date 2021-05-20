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

        test("can delete an added ingredient on click of x button", () => {
        const register = screen.getByRole('register')
        userEvent.click(register)
        let error = screen.getByText("Registration unsuccessful - username already exists")
        expect(error).toBeInTheDocument

    })
})