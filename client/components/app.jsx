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
      count: null,
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
    // this.handleProductCount = this.handleProductCount.bind(this);
  
  }

  componentDidMount() {
    this.getProducts();
    this.getCartItems();
  }
  // componentDidUpdate(){
  //   console.log("COMPONENTDIDUPDATE ran");
  //   this.handleProductCount(this.state.cart);

  // }

  setView(name, params) {
    this.setState({ 
      view:{ name, params }
    })
  }

  getCartItems(){
    fetch("/api/cart.php")
    .then( res => res.json())
    .then( obj => { this.setState({ cart: obj }); return obj; })
    .then( obj => { console.log("getCartItems: ", obj)})
    .catch(error => console.error('Error:', error));
  }

  addToCart(product){
    fetch("/api/cart.php", {
      method : "POST",
      mode : "cors",
      headers : { "Content-Type" : "application/json"},
      body : JSON.stringify(product)
    })
    // .then(promiseObj => promiseObj.json())
    // .then(obj => obj.json())
    // .then(res => console.log(res))
    .then(() => this.getCartItems())
  
    // .then(successObj => { //find same product in cart by id if there is one, 
    //                       //if there is one, update its quantity, 
    //                       //Otherwise add the product to the product array
    //     let newArr= this.state.cart.concat(successObj);
    //     console.log("newArr; ", newArr);
    //     this.setState({cart : newArr});
    // })
  } 
  
  getProducts() {
    fetch('/api/products.php')
      .then(res => res.json())
      .then(dataObj => {
        this.setState({ productArr : dataObj });
      })

      .catch(error => console.error('Error:', error));
  }

  // handleProductCount(cart){
    
  //   console.log("Products:::: ", cart);
  //   let result = cart.map( cart =>  cart.count);
  //   console.log("count: ", result);
  //   this.setState({count:   result});
  // }

  placeOrder(productObj){
    return (
      fetch("/api/orders.php", {
        method : "POST",
        mode : 'cors',
        headers : { 'Content-Type' : 'application/json'},
        body : JSON.stringify(productObj),
      }) 
      .then(promiseObj => promiseObj.json())
      .then(successObj => {
          this.setState({ cart : successObj});
      })
    )
  }

  render() {
    console.log("current cart status: ", this.state.cart);
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
            addToCart = { this.addToCart } 
            />
        </div>)
    } else if ( this.state.view.name === 'cart') {
      return(
      <div>
        <Header setView = { this.setView }
          cartItemCount = { this.state.cart }
        />
        <CartSummary setView = { this.setView }
          cartItems = { this.state.cart } ///not cart!
        />  
      </div>)
    } else if ( this.state.view.name === 'checkout'){
      return(
        <div>
          <Header setView = { this.setView }
            cartItemCount = { this.state.cart }
          />
          <CheckoutForm placeOrder = { this.placeOrder }
            setView = { this.setView }
          />
        </div>
      )
    } else if ( this.state.view.name === 'landing-page'){
      return(
        <div>
          <div className="avoid-clicks">
            <Header setView = { this.setView }
              cartItemCount = { this.state.cart }/>
          </div>
          <LandingPage setView = { this.setView }/>
        </div>
      )
    }
  }
}

export default App;
