import React from 'react';
import Image from '../Image';
import {render,screen } from '@testing-library/react';

it('check image src', async()=>{
    render(<Image path='1.png'/>);
    //screen.debug();
    //screen.debug(image)

    /* const displayedImage = document.querySelector("img") as HTMLImageElement;
    expect(displayedImage.src).toContain("1.png"); */
 
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', '1.png');
});