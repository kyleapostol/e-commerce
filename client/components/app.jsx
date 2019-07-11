import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import ProductList from './ProductList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { productArray: [] };
  }

  getProducts() {
    fetch('/api/products.php')
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.state.productArray = myJson;
        console.log(this.state.productArray);
      });
  }

  componentDidMount() {
    return this.getProducts();
  }

  render() {
    return (
      <Header/>,
      <ProductList/>
    );
  }
}
