import React from 'react';
import Header from '..components/header.jsx';
import ProductListItem from './productListItem.jsx';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = { products:[] };
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount(){
    this.getProducts();
  }

  getProducts(){
    fetch('/api/products.php')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
    });
  }

  render(){
    return(
      <div
        <Header/>
        <ProductListItem productInfo={this.getProducts}/>
        />     
      </div>
    )}
}

export default App;

