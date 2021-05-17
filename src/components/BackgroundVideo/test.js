import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BackgroundVideo from '.';

describe('Background Video', () => {
    beforeEach(() => {
        render(<BackgroundVideo />, { wrapper: MemoryRouter });
    });

    describe('Video', () => {
        test('it renders a video', () => {
            expect(screen.getByRole('video')).toBeInTheDocument();
        })
    })
})