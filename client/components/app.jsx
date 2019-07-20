import React from 'react';
import Header from './header.jsx';
import ProductList from './productList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    fetch('/api/products.php')
      .then(res => res.json())
      .then(result => {
        this.setState({ products: result });
      });
  }

  render() {
    return (
      <div>
        <Header/>
        <ProductList productInfo={this.state.products}/>
      </div>
    );
  }
}

export default App;
