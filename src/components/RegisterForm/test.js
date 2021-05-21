import { act, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import RegisterForm from '.';
import { createMemoryHistory } from "history";

describe('Register Form', () => {
    beforeEach(() => {

        const history = createMemoryHistory();
        act(() => {
            render(<RegisterForm />, { wrapper: MemoryRouter });
        })
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
        const inputPassowrdConfirm = screen.getByRole("register-input", { name: "passwordConfirm" })
        userEvent.type(inputPassowrdConfirm, "test_pas")
        let message = screen.getByText("Passwords do not match") //Registration unsuccessful - please try another username
        expect(message).toBeInTheDocument()
        // currently not passing
    })

    /*test("logs in on succesful registration", () => {
        const sessionStorageMock = (() => {
            let store = {};

            return {
                getItem(key) {
                    return store[key] || null;
                },
                setItem(key, value) {
                    store[key] = value.toString();
                },
                removeItem(key) {
                    delete store[key];
                },
                clear() {
                    store = {};
                }
            };
        })();
        Object.defineProperty(window, 'sessionStorage', {
            value: sessionStorageMock
        });
        const setItem = sessionStorage.setItem = jest.fn();
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

        expect(setItem).toHaveBeenCalled()
        //const username = sessionStorage.getItem('username')
        //expect(username).toEqual('test')
    })*/

    /*test("shows error on unsuccesful registration", () => {
        act(() => {
            const inputUsername = screen.getByRole("register-input", { name: "username" })
            userEvent.type(inputUsername, "test")
            const inputEmail = screen.getByRole("register-input", { name: "email" })
            userEvent.type(inputEmail, "test@test")
            const inputPassowrd = screen.getByRole("register-input", { name: "password" })
            userEvent.type(inputPassowrd, "test_pass")
            const inputPassowrdConfirm = screen.getByRole("register-input", { name: "passwordConfirm" })
            userEvent.type(inputPassowrdConfirm, "test_pass")
            act(() => {
            const mockSuccessResponse = { err: "error" };
            const mockJsonPromise = Promise.resolve(mockSuccessResponse);
            global.fetch = () =>
                Promise.resolve({
                    json: () => mockJsonPromise,
                })
            const register = screen.getByRole('register')
            userEvent.click(register)
        })
    })
        let error = screen.getByRole("error") //Registration unsuccessful - please try another username
        expect(error).toBeInTheDocument()
        // currently not passing
    })*/
})