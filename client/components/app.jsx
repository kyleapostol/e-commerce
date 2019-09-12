import React from 'react';

import Header from './header';
import ProductList from './product-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productArr: []
    };

    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    fetch('/api/products.php')
      .then(res => res.json())
      .then(dataObj => {
        this.setState({ productArr: dataObj });

      });
  }

  render() {
    return (
      <div>
        <Header/>
        <ProductList products={this.state.productArr}/>

      </div>
    );
  }
}

export default App;
