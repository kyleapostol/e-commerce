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
      total: 0.00,
      cart: [],
      productArr: [],
      view: {
        name: 'landing-page',
        params: {}
      }
    };

    // this.getProducts = this.getProducts.bind(this);
    this.setView = this.setView.bind(this);
    // this.getCartItems = this.getCartItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.handleTotal = this.handleTotal.bind(this);
    this.deleteCartProducts = this.deleteCartProducts.bind(this);
    this.updateTotal = this.updateTotal.bind(this);
    // this.handleProductCount = this.handleProductCount.bind(this);

  }

  componentDidMount() {
    this.getProducts();
    this.getCartItems();
  }

  deleteCartProducts(productID) {
    console.log('delete gets called: ', productID);
    fetch('/api/cart.php?id=' + productID, {
      method: 'DELETE',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: productID })
    })
      .catch(error => console.error('Error:', error));
    this.componentDidMount();
  }

  setView(name, params) {
    this.setState({
      view: { name, params }
    });
  }

  getCartItems() {
    fetch('/api/cart.php')
      .then(res => res.json())
      .then(obj => {
        this.setState({ cart: obj });
        return obj;
      })
      .then(obj => { console.log('getCartItems: ', obj); })
      .catch(error => console.error('Error:', error));
  }

  addToCart(product) {
    fetch('/api/cart.php', {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    })
      .then(() => this.getCartItems());
  }

  getProducts() {
    fetch('/api/products.php')
      .then(res => res.json())
      .then(dataObj => {
        this.setState({ productArr: dataObj });
      })
      .catch(error => console.error('Error:', error));
  }

  placeOrder(productObj) {
    return (
      fetch('/api/orders.php', {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productObj)
      })
        .then(promiseObj => promiseObj.json())
        .then(successObj => {
          this.setState({ cart: successObj });
        })
    );
  }

  handleTotal(total) {
    let num = total.toFixed(2);
    this.setState({ total: num });
  }

  updateTotal() {
    console.log('update gets called');
    this.getCartItems();
  }

  render() {
    console.log('total in app: ', this.state.total);
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
            total = { this.handleTotal }
            delete = { this.deleteCartProducts }
            update = { this.updateTotal }
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
            totalAmt = { this.state.total }
          />
        </div>
      );
    } else if (this.state.view.name === 'landing-page') {
      return (
        <div>
          <div className="avoid-clicks">
            <Header setView = { this.setView }
              cartItemCount = { this.state.cart }/>
          </div>
          <LandingPage setView = { this.setView }/>
        </div>
      );
    }
  }
}

export default App;
