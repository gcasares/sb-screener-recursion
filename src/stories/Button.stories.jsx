import React from 'react';

import Screener, { Steps } from 'screener-storybook/src/screener';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args, steps) => (
  <Screener steps={steps}>
    <Button {...args} />
  </Screener>
);

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};
Primary.steps = new Steps()
  .click('.storybook-button')
  .snapshot('name')
  .end()

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
