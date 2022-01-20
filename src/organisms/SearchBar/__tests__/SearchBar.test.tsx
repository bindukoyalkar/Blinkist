import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from "../SearchBar"

const mockedFuntion = jest.fn(); 

it('should be able to type into input', () => {
    render(
        <SearchBar changeState={mockedFuntion} />
    );
    //screen.getByRole('');
    const textField= screen.getByRole('textbox')
    fireEvent.click(textField)
    fireEvent.change(textField, { target: { value: "Go Grocery Shopping" } })
    expect(textField.value).toBe("Go Grocery Shopping");
    //expect(textField).toHaveAttribute('value', "Go Grocery Shopping");
    /* onst inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.click(inputElement)
    fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping" } })
    expect(inputElement.value).toBe("Go Grocery Shopping"); */
});