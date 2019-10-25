import React from 'react';

export default class Quantity extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.item.count };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.handleQuantity = this.handleQuantity.bind(this);
  }

  increment() {
    this.setState({ value: parseInt(this.state.value) + 1 });
  }

  decrement() {
    this.setState({ value: this.state.value > 0 ? --this.state.value : 0 });
  }

  handleQuantity(value) {
    if (value !== 0) {
      return this.state.value;
    } else {
      console.log('a product is deleted');
      this.props.delete(this.props.item.productID);
    }
  }

  render() {
    console.log('value: ', this.state.value);
    return (
      <div>
        <div className="quantity-input">
          <b>Quantiy: </b>
          <button className="quantity-input__modifier quantity-input__modifier--left" onClick={this.decrement}>&mdash;</button>
          <div className="quantity-input__screen">{ this.handleQuantity(this.state.value) }</div>
          <button className="quantity-input__modifier quantity-input__modifier--right" onClick={this.increment}>&#xff0b;</button>
        </div>
      </div>
    );
  }

}
