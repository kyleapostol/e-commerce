import React from 'react';

export default class Header extends React.Component {
  render() {
    let count = this.props.cartItemCount.length;
    return (
      <div className="container-fluid">
        <p className="text-center">Shopping Cart
          <i className="fas fa-shopping-cart">{`${count} Items`}</i>         
        </p>
      </div>
    );
  }
}

