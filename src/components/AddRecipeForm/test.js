import { screen } from '@testing-library/react';
import AddRecipeForm from './';

describe('Form', () => {

    beforeEach(() => {
        render(<AddRecipeForm />);
    });

    test("is rendered", () => {
        let form = screen.getByRole('form')
        expect(form).toBeInTheDocument();
        expect(form).toHaveFormValues({
            recipeName: ''
           
          })
      });


    test("has an input for recipe name", () => {
        let input = screen.getByLabelText('Recipe Name:')
        expect(input).toBeInTheDocument();
      });

    test("has an input for the recipe description", () => {
    let input = screen.getByLabelText('Description:')
    expect(input).toBeInTheDocument();
    });

    test("has an input for recipe name", () => {
        let input = screen.getByLabelText('Instructions:')
        expect(input).toBeInTheDocument();
        });
  
     
    test("has 6 checkboxes", () => {
        let checkboxes = screen.getAllByRole('checkbox')
        expect(checkboxes).toHaveLength(6)
        });
        

    test("ingredient input appears on click of Add Ingredient button", () => {
        let button = screen.getByText('Add Ingredient')
        userEvent.click(button)
        let ingredient = screen.getByRole('listitem')
        expect(ingredient).toBeInTheDocument()
        });

    test("added ingredient has a delete ingredient button with an x and a drop down list with 7 options", () => {
        let button = screen.getByText('Add Ingredient')
        userEvent.click(button)
        let deleteButton = screen.getByText('✘')
        expect(deleteButton).toBeInTheDocument()
        let options = screen.queryAllByRole('option')
        expect(options).toHaveLength(7)

        });

    test("can delete an added ingredient on click of x button", () => {
        let button = screen.getByText('Add Ingredient')
        userEvent.click(button)
        let deleteButton = screen.getByText('✘')
        userEvent.click(deleteButton)
        let ingredient = screen.queryByRole('listitem')
        expect(ingredient).not.toBeInTheDocument()


        

        });
                    
                
            
    
    
        




})