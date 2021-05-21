import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import AboutModal from '.';

describe('About Modal', () => {
  beforeEach(() => {
    render(<AboutModal />);
  });


  test('it renders a modal', () => {
    const modal = screen.getByRole('div')
    expect(modal).toBeInTheDocument()
  })

  test('modal opens when anchor tag is clicked', () => {
    const open = screen.getByRole('link')
    userEvent.click(open)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  test('modal closes when button is clicked', () => {
    const open = screen.getByRole('link')
    userEvent.click(open)
    const button = screen.getByRole('button')
    userEvent.click(button)
    expect(button).not.toBeInTheDocument()
  })
})