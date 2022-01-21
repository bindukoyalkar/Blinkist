import React from 'react';
import MyCard from '../MyCard'
import {fireEvent, render,screen } from '@testing-library/react';

it('check beyond Entrepreneurship functionality', async()=>{
    
    render(<MyCard  progressBar='none' button='add'
    id={1} key={1} src="beyondEntrepreneur.png" name="Beyond Entrepreneurship"
    author="Jim Collins & Bill Lazier" duration="13"/>);

    const image= screen.getByRole('img')
    expect(image).toHaveAttribute('src','beyondEntrepreneur.png')
    
    const nameOfBook = screen.getByText(/Beyond Entrepreneurship/i);
    expect(nameOfBook).toBeInTheDocument()

    const clock=screen.getByTestId('AccessTimeIcon')
    fireEvent.click(clock)
    expect(clock).toBeVisible()

    const button=screen.getByRole('button')
    expect(button).toHaveTextContent('Add to library')
});