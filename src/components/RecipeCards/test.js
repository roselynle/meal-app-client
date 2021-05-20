import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import RecipeCards from '.';

describe('Recipe Cards', () => {
  beforeEach(() => {
    const recipe = {_id: "test id", image_url: "test_url", title: "test title", description: "test", diet_req: ["req1", "req2"]}
    render(<Router><RecipeCards recipe={recipe} hideSave={true}/></Router>)
  });

  test('it renders a heading', () => {
    const heading = screen.getByRole('heading')
    expect(heading.textContent).toContain('test title')
  })
})