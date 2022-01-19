import { Component, ComponentInterface, Event, EventEmitter, h, Host, Method, Prop } from '@stencil/core';

export type Identifier = string;

@Component({
  tag: 'my-button',
  styleUrl: './my-button.scss',
  shadow: true,
})
export class MyButton implements ComponentInterface {
  @Prop() identifier?: Identifier = 'button';
  @Prop() size?: 'large' | 'medium' | 'small' = 'medium';
  @Prop() buttonType?: 'primary' | 'secondary' | 'warning' = 'primary';
  @Prop() shape?: 'round' | 'smooth' | 'sharp' = 'smooth';
  @Prop({ reflect: true, mutable: true }) disabled? = false;
  @Prop() elevated? = false;

  @Event({
    eventName: 'buttonClicked',
    bubbles: true,
    composed: true,
  })
  buttonClicked: EventEmitter<Identifier>;

  buttonClickedHandler() {
    this.buttonClicked.emit(this.identifier);
  }

  @Method()
  async disable() {
    this.disabled = true;
  }

  @Method()
  async enable() {
    this.disabled = false;
  }

  render() {
    return (
      <Host>
        <button class={`MyButton ${this.size} ${this.buttonType} ${this.shape} ${this.elevated ? 'elevated' : ''}`} onClick={this.buttonClickedHandler.bind(this)}>
          <slot>Default</slot>
        </button>
      </Host>
    );
  }
}
