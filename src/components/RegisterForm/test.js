import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RegisterForm from '.';

describe('Register Form', () => {
    beforeEach(() => {
        render(<RegisterForm />, { wrapper: MemoryRouter });
    });

    describe('Register Button', () => {
        test('it renders a register button', () => {
            const button = screen.getByRole('button')
            expect(button.textContent).toContain('Register')
        })
    })
})