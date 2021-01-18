import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Input, InputProps } from './Input';

export default {
  title: 'Input',
  component: Input
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const disabled = Template.bind({});
disabled.args = {
  disabled: true,
  size: 'lg',
};
