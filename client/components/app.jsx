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
        name : 'catalog', //change it back to catalog
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

   console.log("setView method was called! ", this.state.view )
  }

  getProducts() {
    fetch('/api/products.php')
      .then(res => res.json())
      .then(dataObj => {
        this.setState({ productArr : dataObj });
      });
  }

  render() {
    if(this.state.view.name === 'catalog' ) {
      return (
        <div>
          <Header/>
          <ProductList 
            setView = { this.setView }
            products = { this.state.productArr} />
        </div>)
    } else if( this.state.view.name === 'details' ) {
      return (
        <div>
          <Header/>
          <ProductDetails 
            viewParams = { this.state.view.params }
            setView = {this.setView}/>
        </div>)
    }
  }
}

export default App;
