import React from 'react';
import Footer from '../Footer';
import {render,screen } from '@testing-library/react';

it('render footer', async()=>{
    render(<Footer />);
    //screen.getByRole('');
    expect(screen.getByRole('heading')).toHaveTextContent(/Big ideas/i);
});