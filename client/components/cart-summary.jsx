import React from 'react';
import CartSummaryItem from './cart-summary-item';
import Footer from './footer';

export default class CartSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartTotal: this.props.total
    };
     this.handleTotalAmt = this.handleTotalAmt.bind(this);
  }

    handleTotalAmt(){
      let total = null;
      total = this.props.total;
      return total;
    }
  // componentDidMount() {
  //   this.handleTotalAmt();
  // }

  // handleTotalAmt() {
  //   console.log('handleAmt is called')
  //   let currentTotal = 0;
  //   this.props.cartItems.map(cartObj => {
  //     let price = parseInt(cartObj.price);
  //     let quantity = parseInt(cartObj.count);
  //     let result = price * quantity;
  //     currentTotal = currentTotal + result;
  //     this.setState({ cartTotal: currentTotal });
  //   });
  // }

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
                  total = { this.props.total }
                />
              );
            })}
          </div>
          <div className="container d-flex justify-content-between content-padding">
                    Subtotal: ${ this.handleTotalAmt() }
                    {/* ${this.state.cartTotal} */}
            <button type="button"
              className="btn btn-success checkout-cart-btn"
              onClick= { () => {
                this.props.setView('checkout', {});
                this.props.total(this.state.cartTotal);
              } }>Checkout
            </button>
          </div>
          <Footer/>
        </div>
      );
    }

  }
}
