import { Meta, Story } from '@storybook/web-components';
// import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

import { MyComponent } from '../../../design-system/src/components/my-component/my-component';

export default {
  title: 'My Component',
} as Meta;

const Template: Story<MyComponent> = ({ first, middle = undefined, last }) => {
  return html`<my-component first="${first}" middle="${middle ? middle : ''}" last="${last}"></my-component>`;
};

export const Default: Story<MyComponent> = Template.bind({});
Default.args = {
  first: 'John',
  last: 'Doe',
};

export const WithMiddleName: Story<MyComponent> = Template.bind({});
WithMiddleName.args = {
  first: 'Andreas',
  middle: 'Myklebust',
  last: 'Skomsoy',
};
