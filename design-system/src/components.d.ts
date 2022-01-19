/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import { Identifier } from './components/my-button/my-button';
export namespace Components {
  interface MyButton {
    buttonType?: 'primary' | 'secondary' | 'warning';
    disable: () => Promise<void>;
    disabled?: boolean;
    elevated?: boolean;
    enable: () => Promise<void>;
    identifier?: Identifier;
    shape?: 'round' | 'smooth' | 'sharp';
    size?: 'large' | 'medium' | 'small';
  }
  interface MyComponent {
    first?: string;
    last?: string;
    middle?: string;
  }
  interface MyLoader {
    color?: string;
    message?: string | undefined;
    type?: 'spinner' | 'bubbles' | 'pulsing' | 'boxes';
  }
}
declare global {
  interface HTMLMyButtonElement extends Components.MyButton, HTMLStencilElement {}
  var HTMLMyButtonElement: {
    prototype: HTMLMyButtonElement;
    new (): HTMLMyButtonElement;
  };
  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };
  interface HTMLMyLoaderElement extends Components.MyLoader, HTMLStencilElement {}
  var HTMLMyLoaderElement: {
    prototype: HTMLMyLoaderElement;
    new (): HTMLMyLoaderElement;
  };
  interface HTMLElementTagNameMap {
    'my-button': HTMLMyButtonElement;
    'my-component': HTMLMyComponentElement;
    'my-loader': HTMLMyLoaderElement;
  }
}
declare namespace LocalJSX {
  interface MyButton {
    buttonType?: 'primary' | 'secondary' | 'warning';
    disabled?: boolean;
    elevated?: boolean;
    identifier?: Identifier;
    onButtonClicked?: (event: CustomEvent<Identifier>) => void;
    shape?: 'round' | 'smooth' | 'sharp';
    size?: 'large' | 'medium' | 'small';
  }
  interface MyComponent {
    first?: string;
    last?: string;
    middle?: string;
  }
  interface MyLoader {
    color?: string;
    message?: string | undefined;
    type?: 'spinner' | 'bubbles' | 'pulsing' | 'boxes';
  }
  interface IntrinsicElements {
    'my-button': MyButton;
    'my-component': MyComponent;
    'my-loader': MyLoader;
  }
}
export { LocalJSX as JSX };
declare module '@stencil/core' {
  export namespace JSX {
    interface IntrinsicElements {
      'my-button': LocalJSX.MyButton & JSXBase.HTMLAttributes<HTMLMyButtonElement>;
      'my-component': LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
      'my-loader': LocalJSX.MyLoader & JSXBase.HTMLAttributes<HTMLMyLoaderElement>;
    }
  }
}
