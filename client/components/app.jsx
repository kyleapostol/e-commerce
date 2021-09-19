import React, { useState, useEffect } from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import CheckoutForm from './checkout-form';
import LandingPage from './landing-page';

const app = () => {
  let [cartTotal, setCartTotal] = useState(0.00);
  let [cart, setCart] = useState([]);
  let [productArr, setProductArr] = useState([]);
  let [view, setView] = useState(
    {
      name: 'landing-page',
      params: {}
    }
  );

  useEffect(() => {
    getProducts();
    getCartItems();
  }, []);

  const deleteCartItems = (productID, quantity) => {
    fetch(`http://localhost:4000/api/cart/${productID}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
      // body: JSON.stringify({
      //   id: productID,
      //   count: quantity
      // })
    })
      .then(() => getCartItems())
      .catch(error => console.error('Error:', error));
  };

  const getCartItems = () => {
    fetch('http://localhost:4000/api/cart')
      .then(res => res.json())
      .then(obj => {
        setCart(obj);
        // this.setState({ cart: obj });
        return obj;
      })
      .catch(error => console.error('Error:', error));
  };

  const addToCart = product => {
    let { id } = product;

    fetch(`http://localhost:4000/api/cart/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
      // body: JSON.stringify(product)
    })
      .then(() => getCartItems());
  };

  const getProducts = () => {
    fetch('http://localhost:4000/api/products')
      .then(res => res.json())
      .then(dataObj => setProductArr(dataObj))
      .catch(error => console.error('Error:', error));
  };

  const handleView = (name, params) => {
    let obj = { name, params };
    setView(obj);
  };

  const placeOrder = productObj => {
    fetch('/api/orders.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productObj)
    })
      .then(promiseObj => promiseObj.json())
      .then(successObj => setCart({ cart: successObj })
      );
  };

  const handleTotal = () => {
    let currentTotal = 0;
    cart.map(cartObj => {
      let price = parseInt(cartObj.price);
      let quantity = parseInt(cartObj.count);
      let indvRes = price * quantity;
      currentTotal = currentTotal + indvRes;
      setCartTotal(currentTotal);
    });
  };

  const handleReset = () => setCart([]);

  if (view.name === 'catalog') {
    return (
      <div>
        <Header cartItemCount = { cart }
          setView = { handleView }
        />
        <ProductList
          setView = { handleView }
          products = { productArr } />
      </div>);
  } else if (view.name === 'details') {
    return (
      <div>
        <Header cartItemCount = { cart }
          setView = { handleView }
        />
        <ProductDetails
          viewParams = { view.params }
          setView = { handleView }
          addToCart = { addToCart }
        />
      </div>);
  } else if (view.name === 'cart') {
    return (
      <div>
        <Header setView = { handleView }
          cartItemCount = { cart }
        />
        <CartSummary setView = { handleView }
          cartItems = { cart }
          handleTotal = {handleTotal }
          total = { cartTotal }
          delete = { deleteCartItems }
          addToCart = {addToCart }
        />
      </div>);
  } else if (view.name === 'checkout') {
    return (
      <div>
        <Header setView = { handleView }
          cartItemCount = { cart }
        />
        <CheckoutForm placeOrder = { placeOrder }
          setView = { handleView }
          totalAmt = { cartTotal }
          reset = { handleReset }
        />
      </div>
    );
  } else if (view.name === 'landing-page' && cart.length === 0) {
    return (
      <div>
        <div className="avoid-clicks">
          <Header setView = { handleView }
            cartItemCount = { cart }/>
        </div>
        <LandingPage setView = { handleView }/>
      </div>
    );
  } else {
    return (
      <div>
        <Header cartItemCount = { cart }
          setView = { handleView }
        />
        <ProductList
          setView = { handleView }
          products = { productArr } />
      </div>
    );
  }
};

export default app;
