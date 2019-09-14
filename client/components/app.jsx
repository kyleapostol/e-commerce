import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productArr: [],
      view : {
        name : 'catalog',
        params : {}
      }
    };

    this.getProducts = this.getProducts.bind(this);
    this.setView = this.setView.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  setView(name, params) {
    this.setState({ 
      view:{ name, params }
    })
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
        {/* <ProductList products={this.state.productArr}/> */}
        <ProductDetails/>
      </div>
    );
  }
}

export default App;
