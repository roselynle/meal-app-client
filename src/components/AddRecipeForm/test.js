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


    test("handleChange is called when input changes", () =>{
        const file = new File(['hello'], 'hello.png', {type: 'image/png'})
        const handleChange = jest.fn()


        let fileinput = screen.getByLabelText('Upload an image:')
        userEvent.upload(fileinput, file)
        expect(fileinput.files).toHaveLength(1)
    })
    
                
    test("expect uploaded to be present on click of upload button", () => {
    // const file = new File(['hello'], 'hello.png', {type: 'image/png'})
    const file = new File(['hello'], 'hello.png', {type: 'image/png'})
    let fileinput = screen.getByLabelText('Upload an image:')
    userEvent.upload(fileinput, file)

    let button = screen.getByText('Click to Upload')
    userEvent.click(button)
    let image = screen.getByRole('img')
    expect(image).toBeInTheDocument

})

test("expect prompt to click upload to be present if click to upload has not been clicked", () => {
    // const file = new File(['hello'], 'hello.png', {type: 'image/png'})
    const file = new File(['hello'], 'hello.png', {type: 'image/png'})
    let fileinput = screen.getByLabelText('Upload an image:')
    userEvent.upload(fileinput, file)
    let image = screen.getByText('Please choose an image and click upload')
    expect(image).toBeInTheDocument

})
    
        




})