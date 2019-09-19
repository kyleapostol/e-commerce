import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import CheckoutForm from './checkout-form.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart : [],
      productArr: [],
      view : {
        name : 'catalog',
        params : {}
      }
    };

    // this.getProducts = this.getProducts.bind(this);
    this.setView = this.setView.bind(this);
    // this.getCartItems = this.getCartItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
  }

  componentDidMount() {
    this.getProducts();
    this.getCartItems();
  }

  setView(name, params) {
    this.setState({ 
      view:{ name, params }
    })
  }

  getCartItems(){
    fetch("/api/cart.php")
    .then(res => res.json())
    .then(obj => {
      this.setState({ cart: obj })
    })
    .catch(error => console.error('Error:', error));
  }

  addToCart(product){
    return fetch("/api/cart.php", {
      method : "POST",
      mode : 'cors',
      headers : { 'Content-Type' : 'application/json'},
      body : JSON.stringify(product),
    }) 
    .then(promiseObj => promiseObj.json())
    .then(successObj => {
        let newArr= this.state.cart.concat(successObj);
        this.setState({cart : newArr});
    })
  } 

  getProducts() {
    fetch('/api/products.php')
      .then(res => res.json())
      .then(dataObj => {
        this.setState({ productArr : dataObj });
      })
      .catch(error => console.error('Error:', error));

  }

  placeOrder(obj){
    return (
      fetch("/api/orders.php", {
        method : "POST",
        mode : 'cors',
        headers : { 'Content-Type' : 'application/json'},
        body : JSON.stringify(product),
      }) 
      .then(promiseObj => promiseObj.json())
      .then(successObj => {
          // let newArr= this.state.cart.concat(successObj);
          this.setState({ cart: successObj});
      })
    )
    this.setView("catalog", {});
  }

  render() {
    if(this.state.view.name === 'catalog' ) {
      return (
        <div>
          <Header cartItemCount = { this.state.cart }
            setView = { this.setView }
          />
          <ProductList 
            setView = { this.setView }
            products = { this.state.productArr } />
        </div>)
    } else if ( this.state.view.name === 'details' ) {
      return (
        <div>
          <Header cartItemCount = { this.state.cart }
            setView = { this.setView }
          />
          <ProductDetails 
            viewParams = { this.state.view.params }
            setView = { this.setView }
            addToCart = {this.addToCart}  
            />
        </div>)
    } else if ( this.state.view.name === 'cart') {
      return(
      <div>
        <Header setView = { this.setView }
          cartItemCount = { this.state.cart }
        />
        <CartSummary setView = { this.setView }
          cartItems = { this.state.cart }
        />  
      </div>)
    } else if ( this.state.view.name === 'checkout'){
      return(
        <div>
          <Header setView = { this.setView }
            cartItemCount = { this.state.cart }
          />
          <CheckoutForm placeOrder = { this.placeOrder }/>
        </div>
      )
    }
  }
}

export default App;
