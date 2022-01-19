import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';

import { MyLoader } from '../../../design-system/src/components/my-loader/my-loader';

export default {
  title: 'My Loader',
  argTypes: {
    type: {
      options: ['spinner', 'bubbles', 'pulsing', 'boxes'],
      control: { type: 'inline-radio' },
    },
    message: {
      control: { type: 'text' },
    },
    color: {
      control: { type: 'color' },
    },
  },
} as Meta;

const Template: Story<MyLoader> = ({ type = 'spinner', message = undefined, color = '#fff' }) => {
  return html`<my-loader type="${type}" message="${message || ''}" color="${color}"></my-loader>`;
};

export const Default: Story<MyLoader> = Template.bind({});
Default.args = {
  type: 'spinner',
  message: undefined,
};

export const WithMessage: Story<MyLoader> = Template.bind({});
WithMessage.args = {
  type: 'spinner',
  message: 'Loading',
};

export const DifferentColor: Story<MyLoader> = Template.bind({});
DifferentColor.args = {
  type: 'bubbles',
  message: 'Interesting color choice..',
  color: '#c2c',
};

export const Spinner: Story<MyLoader> = Template.bind({});
Spinner.args = {
  type: 'spinner',
  message: undefined,
};

export const Bubbles: Story<MyLoader> = Template.bind({});
Bubbles.args = {
  type: 'bubbles',
  message: undefined,
};

export const Pulsing: Story<MyLoader> = Template.bind({});
Pulsing.args = {
  type: 'pulsing',
  message: undefined,
};

export const Boxes: Story<MyLoader> = Template.bind({});
Boxes.args = {
  type: 'boxes',
  message: undefined,
};
