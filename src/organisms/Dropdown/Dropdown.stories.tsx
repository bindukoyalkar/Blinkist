import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dropdown from './Dropdown'

export default {
  title: 'Organism/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

/* export const Appbar: ComponentStory<typeof Dropdown> = () => <Dropdown></Dropdown>; */
const Template:ComponentStory<typeof Dropdown>= (args) => <Dropdown {...args} />

export const Appbar= Template.bind({});

