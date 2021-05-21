import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import RegisterForm from '.';
import { createMemoryHistory } from "history";

describe('Register Form', () => {
    beforeEach(() => {
        
        const history = createMemoryHistory();
        render(<RegisterForm />, { wrapper: MemoryRouter });
    });

    afterAll(() => {
        jest.resetAllMocks()
    })

    test('it renders a register button', () => {
        const register = screen.getByRole('register')
        expect(register).toBeInTheDocument()
    })

    test('it renders an input for username, password and email', () => {
        const input = screen.getAllByRole('register-input')
        expect(input).toHaveLength(4)
    })

    test('it updates username input value on change', () => {
        const input = screen.getByRole("register-input", { name: "username" })
        userEvent.type(input, "test")
        expect(input.value).toEqual("test")
    })

    test('it updates email input value on change', () => {
        const input = screen.getByRole("register-input", { name: "email" })
        userEvent.type(input, "test@test")
        expect(input.value).toEqual("test@test")
    })

    test('it updates password input value on change', () => {
        const input = screen.getByRole("register-input", { name: "password" })
        userEvent.type(input, "test_pass")
        expect(input.value).toEqual("test_pass")
    })

    test("shows an error if passwords do not match", () => {
        const inputUsername = screen.getByRole("register-input", { name: "username" })
        userEvent.type(inputUsername, "test")
        const inputEmail = screen.getByRole("register-input", { name: "email" })
        userEvent.type(inputEmail, "test@test")
        const inputPassowrd = screen.getByRole("register-input", { name: "password" })
        userEvent.type(inputPassowrd, "test_pass")
        const inputPassowrd = screen.getByRole("register-input", { name: "passwordConfirm" })
        userEvent.type(inputPassowrd, "test_pas")
        let message = screen.getByText("Passwords do not match") //Registration unsuccessful - please try another username
        expect(message).toBeInTheDocument()
        // currently not passing
    })

    test("redirects on succesful registration", () => {
        const inputUsername = screen.getByRole("register-input", { name: "username" })
        userEvent.type(inputUsername, "test")
        const inputEmail = screen.getByRole("register-input", { name: "email" })
        userEvent.type(inputEmail, "test@test")
        const inputPassowrd = screen.getByRole("register-input", { name: "password" })
        userEvent.type(inputPassowrd, "test_pass")
        const mockSuccessResponse = { username: "test" };
        const mockJsonPromise = Promise.resolve(mockSuccessResponse);
        global.fetch = () =>
            Promise.resolve({
                json: () => mockJsonPromise,
            })
        const register = screen.getByRole('register')
        userEvent.click(register)
        let error = screen.getByRole("error") //Registration unsuccessful - please try another username
        expect(error).toBeInTheDocument()
        // currently not passing
    })

    test("shows error on unsuccesful registration", () => {
        const inputUsername = screen.getByRole("register-input", { name: "username" })
        userEvent.type(inputUsername, "test")
        const inputEmail = screen.getByRole("register-input", { name: "email" })
        userEvent.type(inputEmail, "test@test")
        const inputPassowrd = screen.getByRole("register-input", { name: "password" })
        userEvent.type(inputPassowrd, "test_pass")
        const mockSuccessResponse = { err: "error" };
        const mockJsonPromise = Promise.resolve(mockSuccessResponse);
        global.fetch = () =>
            Promise.resolve({
                json: () => mockJsonPromise,
            })
        const register = screen.getByRole('register')
        userEvent.click(register)
        let error = screen.getByRole("error") //Registration unsuccessful - please try another username
        expect(error).toBeInTheDocument()
        // currently not passing
    })
})