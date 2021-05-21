import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BackButton from '.';



describe('BackButton', () => {
    test('it renders a backButton', () => {

        render(<BackButton/>);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    })
})