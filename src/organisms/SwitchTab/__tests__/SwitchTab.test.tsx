import React from 'react';
import SwitchTab from '../SwitchTab'
import {fireEvent, render,screen } from '@testing-library/react';

it('check beyond Entrepreneurship functionality', async()=>{
    render(<SwitchTab searchTerm=''/>);
    //screen.getByRole('')
    const tab1=screen.getByRole('tab',{name:'Currently reading'})
    const tab2=screen.getByRole('tab',{name:'Finished'})
    expect(tab1).toHaveAttribute("aria-selected", "true");
    expect(tab2).toHaveAttribute("aria-selected", "false");
    fireEvent.click(tab2)
    expect(tab1).toHaveAttribute("aria-selected", "false");
    expect(tab2).toHaveAttribute("aria-selected", "true");
});