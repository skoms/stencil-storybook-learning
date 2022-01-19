import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { MyButton } from './my-button';

const mockedDisable = jest.fn();
const mockedEnable = jest.fn();

describe('my button', () => {
  beforeAll(() => {
    jest.restoreAllMocks();
  });

  const getSpecPage = async (
    props: Omit<MyButton, 'render'> = {
      buttonClicked: undefined,
      buttonClickedHandler: undefined,
      disable: mockedDisable,
      enable: mockedEnable,
    }
  ) =>
    await newSpecPage({
      components: [MyButton],
      template: () => <my-button {...props} />,
    });

  it('should display the full name if passed', async () => {
    const page = await getSpecPage({
      buttonType: 'primary',
      shape: 'round',
      disabled: false,
      elevated: true,
      buttonClicked: undefined,
      buttonClickedHandler: undefined,
      disable: mockedDisable,
      enable: mockedEnable,
    });

    expect(page.root).toMatchSnapshot();
  });
});
