import React from 'react';
import CartSummaryItem from './cart-summary-item';
import Footer from './footer';

export default class CartSummary extends React.Component {

  componentDidMount() {
   this.props.handleTotal();
  }

  render() {
    if (this.props.cartItems.length === 0) {
      return (
        <div className=" container jumbotron">
          <h1 className="display-4">Your Cart is Empty!</h1>
          <hr className="my-4"/>
          <p className="text-center">Please checkout an Item to add to your cart.</p>
          <div className="btn btn-success btn-lg d-flex justify-content-center main-page-btn" href="#"
            role="button"
            onClick={ () => this.props.setView('catalog', {}) }>Main Page</div>
        </div>
      );
    } else {
      return (
        <div className="cart-summary-container">
          <h1 className="product-title">Cart Summary</h1>
          <div className="return-btn" onClick={ () => this.props.setView('catalog', {}) }>
            <div className="fas fa-arrow-left arrow-margin mb-3">{' Continue Shopping'}</div>
          </div>
          <div>
            {this.props.cartItems.map(cartObj => {
              return (
                <CartSummaryItem
                  key = { cartObj.productID }
                  cartItem = { cartObj }
                  delete = { this.props.delete }
                  add = { this.props.addToCart }
                  handleTotal = { this.props.handleTotal }/>
              );
            })}
          </div>
          <div className="container d-flex justify-content-between content-padding">
            Subtotal: ${ this.props.total }
            <button type="button"
              className="btn btn-success checkout-cart-btn"
              onClick= { () => this.props.setView( 'checkout', {} ) }> Checkout
            </button>
          </div>
          <Footer/>
        </div>
      );
    }

  }
}
