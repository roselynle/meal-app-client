import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
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

    test('it updates username input value on change', () => {
        const input = screen.getByRole("register-input", { name: "username" })
        userEvent.type(input, "test")
        expect(input.textContent).toEqual("test")
    })

    test('it updates email input value on change', () => {
        const input = screen.getByRole("register-input", { name: "email" })
        userEvent.type(input, "test@test")
        expect(input.textContent).toEqual("test@test")
    })

    test('it updates password input value on change', () => {
        const input = screen.getByRole("register-input", { name: "password" })
        userEvent.type(input, "test_pass")
        expect(input.textContent).toEqual("test_pass")
    })

    /*test("shows error on unsuccesful registration", () => {
        const mockSuccessResponse = { err: "error" };
        const mockJsonPromise = Promise.reject(mockSuccessResponse); // 2
        global.fetch = () =>
            Promise.resolve({
                json: () => mockJsonPromise,
            })
        const register = screen.getByRole('register')
        userEvent.click(register)
        let error = screen.getByText("Email:") //Registration unsuccessful - please try another username
        expect(error).toBeInTheDocument()
        // currently not passing
    })*/
})