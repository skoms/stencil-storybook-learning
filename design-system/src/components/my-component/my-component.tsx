import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true,
})
export class MyComponent implements ComponentInterface {
  @Prop() first?: string;
  @Prop() middle?: string;
  @Prop() last?: string;

  render() {
    return <Host>{`Hello, my name is ${this.first}${this.middle ? ' ' + this.middle : ''} ${this.last}`}</Host>;
  }
}
