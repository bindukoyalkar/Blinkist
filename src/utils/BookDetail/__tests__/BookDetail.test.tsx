import React from 'react';
import BookDetail from '../BookDetail'
import {fireEvent, render,screen } from '@testing-library/react';

it('beyond Entrepreneurship book detail page', async()=>{
    render(<BookDetail changeState={()=>{}}/>)
    //screen.getByRole('');

    const logo=screen.getByRole('img')
    expect(logo).toHaveAttribute('src',"beyondEntrepreneur.png")

    const readNowButton=screen.getByRole('button',{name:"Read now"})
    expect(readNowButton).not.toBeDisabled();

    const tab1=screen.getByRole('tab',{name:'Synopsis'})
    expect(tab1).toHaveAttribute("aria-selected", "true");
    const tab2=screen.getByRole('tab',{name:'Who is it for?'})
    expect(tab2).toHaveAttribute("aria-selected", "false");
    const tab3=screen.getByRole('tab',{name:'About the author'})
    expect(tab3).toHaveAttribute("aria-selected", "false");
});