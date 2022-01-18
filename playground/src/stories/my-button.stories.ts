import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';

import { MyButton } from '../../../design-system/src/components/my-button/my-button';

export default {
  title: 'My Button',
} as Meta;

const Template: Story<MyButton> = ({ buttonType = 'primary', size = 'medium', shape = 'smooth', disabled = false, elevated = false }) => {
  return html` <my-button button-type="${buttonType}" size="${size}" shape="${shape}" disabled="${disabled}" elevated="${elevated}">
    <p style="color: white; margin: 0;">Test</p>
  </my-button>`;
};

export const Default: Story<MyButton> = Template.bind({});

export const Primary: Story<MyButton> = Template.bind({});
Primary.args = {
  buttonType: 'primary',
};

export const Secondary: Story<MyButton> = Template.bind({});
Secondary.args = {
  buttonType: 'secondary',
};

export const Warning: Story<MyButton> = Template.bind({});
Warning.args = {
  buttonType: 'warning',
};

export const Large: Story<MyButton> = Template.bind({});
Large.args = {
  size: 'large',
};

export const Medium: Story<MyButton> = Template.bind({});
Medium.args = {
  size: 'medium',
};

export const Small: Story<MyButton> = Template.bind({});
Small.args = {
  size: 'small',
};

export const Smooth: Story<MyButton> = Template.bind({});
Smooth.args = {
  shape: 'smooth',
};

export const Round: Story<MyButton> = Template.bind({});
Round.args = {
  shape: 'round',
};

export const Sharp: Story<MyButton> = Template.bind({});
Sharp.args = {
  shape: 'sharp',
};

export const Disabled: Story<MyButton> = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Elevated: Story<MyButton> = Template.bind({});
Elevated.args = {
  elevated: true,
};
