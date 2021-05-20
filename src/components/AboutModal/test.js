import { render, screen } from '@testing-library/react';
import AboutModal from '.';

describe('About Modal', () => {
  beforeEach(() => {
    render(<AboutModal />);
});

  
        test('it renders a modal', () => {
            const modal = screen.getByRole('div')
            expect(modal).toBeInTheDocument()
        })
})