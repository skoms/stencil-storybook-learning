import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { MyButton } from './my-button';

describe('my button', () => {
  const getSpecPage = async (props: Omit<MyButton, 'render'> = {}) =>
    await newSpecPage({
      components: [MyButton],
      template: () => <my-button {...props} />,
    });

  it('should display the full name if passed', async () => {
    const page = await getSpecPage({ buttonType: 'primary', shape: 'round', disabled: false, elevated: true });

    expect(page.root).toMatchSnapshot();
  });
});
