import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import CheckoutForm from './checkout-form';
import LandingPage from './landing-page';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: null,
      cartTotal: 0.00,
      cart: [],
      productArr: [],
      view: {
        name: 'landing-page',
        params: {}
      }
    };

    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.handleTotal = this.handleTotal.bind(this);
    this.deleteCartItems = this.deleteCartItems.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidMount() {
    this.getProducts();
    this.getCartItems();
  }

  deleteCartItems(productID, quantity) {
    fetch('/api/cart.php?id=' + productID, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: productID,
        count: quantity
      })
    })
      .then(() => this.getCartItems())
      .catch(error => console.error('Error:', error));
  }

  getCartItems() {
    fetch('/api/cart.php')
      .then(res => res.json())
      .then(obj => {
        this.setState({ cart: obj });
        return obj;
      })
      .catch(error => console.error('Error:', error));
  }

  addToCart(product) {
    fetch('/api/cart.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    })
      .then(() => this.getCartItems())
  }

  getProducts() {
    fetch('/api/products.php')
      .then(res => res.json())
      .then(dataObj => {
        this.setState({ productArr: dataObj });
      })
      .catch(error => console.error('Error:', error));
  }

  setView(name, params) {
    this.setState({
      view: { name, params }
    });
  }

  placeOrder(productObj) {
    return (
      fetch('/api/orders.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productObj)
      })
        .then(promiseObj => promiseObj.json())
        .then(successObj => {
          this.setState({ cart: successObj });
        })
    );
  }

  handleTotal() {
    let currentTotal = 0;
    this.state.cart.map( cartObj => {
      let price = parseInt(cartObj.price);
      let quantity = parseInt(cartObj.count);
      let result = price * quantity;
      currentTotal = currentTotal + result;
      console.log('currentTotal: ', currentTotal);
      this.setState({ cartTotal: currentTotal });
    });
  }

  handleReset() {
    this.setState({ cart: [] });
  }

  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <div>
          <Header cartItemCount = { this.state.cart }
            setView = { this.setView }
          />
          <ProductList
            setView = { this.setView }
            products = { this.state.productArr } />
        </div>);
    } else if (this.state.view.name === 'details') {
      return (
        <div>
          <Header cartItemCount = { this.state.cart }
            setView = { this.setView }
          />
          <ProductDetails
            viewParams = { this.state.view.params }
            setView = { this.setView }
            addToCart = { this.addToCart }
          />
        </div>);
    } else if (this.state.view.name === 'cart') {
      return (
        <div>
          <Header setView = { this.setView }
            cartItemCount = { this.state.cart }
          />
          <CartSummary setView = { this.setView }
            cartItems = { this.state.cart }
            handleTotal = { this.handleTotal }
            total = { this.state.cartTotal }
            delete = { this.deleteCartItems }
            addToCart = { this.addToCart }
          />
        </div>);
    } else if (this.state.view.name === 'checkout') {
      return (
        <div>
          <Header setView = { this.setView }
            cartItemCount = { this.state.cart }
          />
          <CheckoutForm placeOrder = { this.placeOrder }
            setView = { this.setView }
            totalAmt = { this.state.Total }
            reset = { this.handleReset }
          />
        </div>
      );
    } else if (this.state.view.name === 'landing-page' && this.state.cart.length === 0) {
      return (
        <div>
          <div className="avoid-clicks">
            <Header setView = { this.setView }
              cartItemCount = { this.state.cart }/>
          </div>
          <LandingPage setView = { this.setView }/>
        </div>
      );
    } else {
      return (
        <div>
          <Header cartItemCount = { this.state.cart }
            setView = { this.setView }
          />
          <ProductList
            setView = { this.setView }
            products = { this.state.productArr } />
        </div>
      );
    }
  }
}

export default App;
