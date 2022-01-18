import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: './my-button.scss',
  shadow: true,
})
export class MyButton implements ComponentInterface {
  @Prop() size?: 'large' | 'medium' | 'small' = 'medium';
  @Prop() buttonType?: 'primary' | 'secondary' | 'warning' = 'primary';
  @Prop() shape?: 'round' | 'smooth' | 'sharp' = 'smooth';
  @Prop({ reflect: true }) disabled? = false;
  @Prop() elevated? = false;

  render() {
    return (
      <Host>
        <button class={`MyButton ${this.size} ${this.buttonType} ${this.shape} ${this.elevated ? 'elevated' : ''}`}>
          <slot>Default</slot>
        </button>
      </Host>
    );
  }
}
