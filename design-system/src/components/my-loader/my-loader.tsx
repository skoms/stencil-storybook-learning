import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'my-loader',
  styleUrl: './my-loader.scss',
  shadow: true,
})
export class MyLoader implements ComponentInterface {
  @Prop() type?: 'spinner' | 'bubbles' | 'pulsing' | 'boxes' = 'spinner';
  @Prop() color? = '#fff';
  @Prop() message?: string | undefined;

  spinnerStyles = {
    borderColor: `${this.color} transparent transparent transparent`,
  };

  getLoader = () => {
    switch (this.type) {
      case 'spinner':
        return (
          <div class="spinner">
            <div style={this.spinnerStyles} />
            <div style={this.spinnerStyles} />
            <div style={this.spinnerStyles} />
            <div style={this.spinnerStyles} />
          </div>
        );
      case 'bubbles':
        return (
          <div class="bubbles">
            <div style={{ backgroundColor: this.color }} />
            <div style={{ backgroundColor: this.color }} />
            <div style={{ backgroundColor: this.color }} />
            <div style={{ backgroundColor: this.color }} />
          </div>
        );
      case 'pulsing':
        return (
          <div class="pulsing">
            <div style={{ borderColor: this.color }} />
            <div style={{ borderColor: this.color }} />
          </div>
        );
      default:
        return (
          <div class="boxes">
            <div style={{ backgroundColor: this.color }} />
            <div style={{ backgroundColor: this.color }} />
            <div style={{ backgroundColor: this.color }} />
          </div>
        );
    }
  };

  render() {
    return (
      <Host>
        {this.getLoader()}
        {this.message && (
          <p class="message" style={{ color: this.color }}>
            {this.message}
          </p>
        )}
      </Host>
    );
  }
}
